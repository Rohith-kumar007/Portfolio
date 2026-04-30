// -----------------------------------------
// 1. Navbar & Mobile Menu Toggle
// -----------------------------------------
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate hamburger icon if needed
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
});

// Close mobile menu on link click
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// -----------------------------------------
// 2. Active Section on Scroll
// -----------------------------------------
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// -----------------------------------------
// 3. Theme Toggle (Light / Dark)
// -----------------------------------------
const themeSwitch = document.getElementById('themeSwitch');
const themeIcon = themeSwitch.querySelector('i');
const body = document.body;

// Check local storage for saved theme
if (localStorage.getItem('theme') === 'light') {
    enableLightMode();
}

themeSwitch.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        disableLightMode();
    } else {
        enableLightMode();
    }
});

function enableLightMode() {
    body.classList.add('light-mode');
    themeIcon.className = 'fa-solid fa-sun';
    localStorage.setItem('theme', 'light');
    
    // Update CSS Variable backups for light mode if desired
    updateCSSVariables('#F9FBFF', '#0B0F19', '#1A1D24');
}

function disableLightMode() {
    body.classList.remove('light-mode');
    themeIcon.className = 'fa-solid fa-moon';
    localStorage.setItem('theme', 'dark');
    
    updateCSSVariables('#0B0F19', '#F3F4F6', '#9CA3AF');
}

function updateCSSVariables(bg, text, subtitle) {
    if(body.classList.contains('light-mode')) {
        document.documentElement.style.setProperty('--bg-color', '#F4F7F6');
        document.documentElement.style.setProperty('--text-primary', '#1A202C');
        document.documentElement.style.setProperty('--text-secondary', '#4A5568');
        document.documentElement.style.setProperty('--card-bg', '#FFFFFF');
        document.documentElement.style.setProperty('--border-glass', '#E2E8F0');
        document.documentElement.style.setProperty('--accent-blue', '#2B6CB0');
        document.documentElement.style.setProperty('--accent-gradient', 'linear-gradient(135deg, #2B6CB0 0%, #3182CE 100%)');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#1A202C');
        document.documentElement.style.setProperty('--text-primary', '#F7FAFC');
        document.documentElement.style.setProperty('--text-secondary', '#A0AEC0');
        document.documentElement.style.setProperty('--card-bg', '#2D3748');
        document.documentElement.style.setProperty('--border-glass', '#4A5568');
        document.documentElement.style.setProperty('--accent-blue', '#63B3ED');
        document.documentElement.style.setProperty('--accent-gradient', 'linear-gradient(135deg, #4299E1 0%, #3182CE 100%)');
    }
}

// -----------------------------------------
// 4. Contact Form Handling
// -----------------------------------------
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        formStatus.textContent = 'Sending message...';
        formStatus.className = 'form-status';

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        try {
            // Updated to point to our backend API
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                formStatus.textContent = result.message || 'Error sending message.';
                formStatus.className = 'form-status error';
            }
        } catch (error) {
            formStatus.textContent = 'Server unreachable. Try running backend first.';
            formStatus.className = 'form-status error';
            console.error('Submit error:', error);
        }
    });
}

// -----------------------------------------
// 5. Scroll Reveal Animations
// -----------------------------------------
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 100,
    reset: false // Animations only happen once
});

// Hero animations
sr.reveal('.hero .subtitle', { delay: 200 });
sr.reveal('.hero h1', { delay: 300, scale: 0.95 });
sr.reveal('.hero .role', { delay: 400 });
sr.reveal('.hero .tagline', { delay: 500 });
sr.reveal('.cta-group', { delay: 600, duration: 1200 });

// Section titles
sr.reveal('.section-title', { origin: 'top' });

// About section
sr.reveal('.about-text', { origin: 'left', delay: 200 });
sr.reveal('.sphere', { origin: 'right', delay: 300, scale: 0.8 });

// Skills Cards
sr.reveal('.skill-category', { 
    interval: 150, 
    scale: 0.9, 
    opacity: 0 
});

// Projects Cards
sr.reveal('.project-card', { 
    interval: 200, 
    origin: 'bottom' 
});

// Experience
sr.reveal('.timeline-item', { 
    interval: 200, 
    origin: 'left' 
});

// Contact
sr.reveal('.contact-info', { origin: 'left', delay: 200 });
sr.reveal('.contact-form-wrapper', { origin: 'right', delay: 300 });
