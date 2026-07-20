// --- Page Switching Logic ---
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.page-section');
const redirectBtns = document.querySelectorAll('.nav-redirect');

// Function to change page
function switchPage(targetId) {
    // 1. Remove active class from all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Add active class to target section
    const targetSection = document.getElementById(targetId);
    if(targetSection) {
        targetSection.classList.add('active');
    }

    // 3. Update active link in navbar
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('data-target') === targetId) {
            link.classList.add('active-link');
        }
    });
}

// Add click event to navbar links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        switchPage(targetId);
        
        // Close mobile menu if it's open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
});

// Add click event to buttons inside pages (like "View My Work")
redirectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-target');
        switchPage(targetId);
    });
});


// --- Mobile Menu Toggle ---
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.querySelector('.nav-links');
const menuIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Toggle Icon between Bars and X
    if (navMenu.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});


// --- Dynamic Footer Year ---
document.getElementById('year').textContent = new Date().getFullYear();