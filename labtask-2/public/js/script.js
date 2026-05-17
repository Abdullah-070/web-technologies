//Vanilla JavaScript for Responsive Menu
// Get references to the hamburger button and nav menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// Toggle menu visibility when hamburger is clicked
hamburgerBtn.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
});

// (Bonus) Close menu when a navigation link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
    });
});