const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(express.static(__dirname)); // Serve static files (HTML, CSS, JS)

// -----------------------------------------
// 1. Database Connection (PostgreSQL)
// -----------------------------------------
// Create a new pool using environment variables or fallback values
const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'portfolio_db',
    password: process.env.DB_PASSWORD || 'password',
    port: process.env.DB_PORT || 5432,
});

// Test connection and initialize table
pool.connect()
    .then(client => {
        console.log('✅ Connected to PostgreSQL successfully!');
        
        // Create table for contact submissions if not exists
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS contact_submissions (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                message TEXT NOT NULL,
                submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        
        return client.query(createTableQuery)
            .then(() => {
                console.log('📊 Table "contact_submissions" is ready.');
                client.release();
            })
            .catch(err => {
                console.error('❌ Error creating table:', err);
                client.release();
            });
    })
    .catch(err => {
        console.error('❌ Failed to connect to PostgreSQL database:', err.message);
        console.log('💡 Note: Ensure PostgreSQL is running and credentials match in .env file.');
    });

// -----------------------------------------
// 2. API Endpoints
// -----------------------------------------

// Root check
app.get('/', (req, res) => {
    res.send('Portfolio API is running.');
});

// Handle Contact Form Submission
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Server-side validation
    if (!name || !email || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'All fields (name, email, message) are required.' 
        });
    }

    try {
        const insertQuery = `
            INSERT INTO contact_submissions (name, email, message)
            VALUES ($1, $2, $3)
            RETURNING id, submitted_at;
        `;
        
        const result = await pool.query(insertQuery, [name, email, message]);

        console.log(`📩 New message received from ${name} (${email})`);

        return res.status(201).json({
            success: true,
            message: 'Message saved securely in database!',
            data: {
                id: result.rows[0].id,
                submitted_at: result.rows[0].submitted_at
            }
        });
        
    } catch (error) {
        console.error('❌ Database Insert Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error. Could not save message to database.',
            error: error.message
        });
    }
});

// ---------------- =======================================
// Start Server
// ---------------- =======================================
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 API endpoint: http://localhost:${PORT}/api/contact`);
});
