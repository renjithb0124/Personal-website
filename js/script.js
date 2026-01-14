// Bootstrap 5 Form Validation Logic has been moved to validation.js

// Scroll to Top Logic
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Blog Horizontal Scroll Logic
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");
const blogContainer = document.getElementById("blogContainer");

if (scrollLeftBtn && scrollRightBtn && blogContainer) {
    scrollLeftBtn.addEventListener("click", () => {
        blogContainer.scrollBy({ left: -350, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener("click", () => {
        blogContainer.scrollBy({ left: 350, behavior: 'smooth' });
    });
}

// Skills Horizontal Scroll Logic
const scrollSkillsLeftBtn = document.getElementById("scrollSkillsLeft");
const scrollSkillsRightBtn = document.getElementById("scrollSkillsRight");
const skillsContainer = document.getElementById("skillsContainer");

if (scrollSkillsLeftBtn && scrollSkillsRightBtn && skillsContainer) {
    scrollSkillsLeftBtn.addEventListener("click", () => {
        skillsContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });

    scrollSkillsRightBtn.addEventListener("click", () => {
        skillsContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });
}


// Active Navigation Based on Scroll Position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveNav() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= (sectionTop - 100)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Set active on scroll
window.addEventListener('scroll', setActiveNav);

// Set active on page load
window.addEventListener('load', setActiveNav);

// Set active when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});



// Theme Toggle Logic
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggleBtn.querySelector('i');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        if (body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeToggleBtn.classList.remove('btn-outline-light');
            themeToggleBtn.classList.add('btn-outline-dark');
            themeToggleBtn.style.borderColor = '#4361ee';
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeToggleBtn.classList.remove('btn-outline-dark');
            themeToggleBtn.classList.add('btn-outline-light');
            themeToggleBtn.style.borderColor = 'rgba(255,255,255,0.5)';
        }
    });
}
