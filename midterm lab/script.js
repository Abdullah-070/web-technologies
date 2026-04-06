// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navbarContent = document.getElementById('navbarContent');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownContainers = document.querySelectorAll('.dropdown-menu-container');

    // Toggle menu visibility when hamburger button is clicked
    hamburgerBtn.addEventListener('click', function() {
        hamburgerBtn.classList.toggle('active');
        navbarContent.classList.toggle('mobile-open');
    });

    // Close menu when a navigation link is clicked (Optional Bonus)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Close menu for regular nav items
            if (!this.parentElement.classList.contains('dropdown-menu-container')) {
                hamburgerBtn.classList.remove('active');
                navbarContent.classList.remove('mobile-open');
            }
        });
    });

    // Close menu when a dropdown submenu item is clicked
    document.querySelectorAll('.dropdown-menu-custom a').forEach(link => {
        link.addEventListener('click', function(e) {
            hamburgerBtn.classList.remove('active');
            navbarContent.classList.remove('mobile-open');
            // Also close the dropdown
            document.querySelectorAll('.dropdown-menu-custom').forEach(menu => {
                menu.classList.remove('show');
            });
        });
    });

    // Handle dropdown menu toggle on mobile
    dropdownContainers.forEach(container => {
        const dropdownMenu = container.querySelector('.dropdown-menu-custom');
        const navLink = container.querySelector('.nav-link');

        // Only apply click behavior on mobile
        if (window.innerWidth <= 768) {
            navLink.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Close other dropdowns
                dropdownContainers.forEach(otherContainer => {
                    if (otherContainer !== container) {
                        otherContainer.querySelector('.dropdown-menu-custom').classList.remove('show');
                    }
                });

                // Toggle current dropdown
                dropdownMenu.classList.toggle('show');
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navbarContent.classList.contains('mobile-open')) {
            hamburgerBtn.classList.remove('active');
            navbarContent.classList.remove('mobile-open');
        }
    });

    // Handle window resize to reset menu on larger screens
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburgerBtn.classList.remove('active');
            navbarContent.classList.remove('mobile-open');
            // Close all dropdowns
            document.querySelectorAll('.dropdown-menu-custom').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});

// CAROUSEL/SLIDER FUNCTIONALITY
$(document).ready(function() {
    const $carouselItems = $('.carousel-items');
    const $slides = $('.product-card');
    const $prevBtn = $('#prevBtn');
    const $nextBtn = $('#nextBtn');
    const $currentSlideSpan = $('#currentSlide');
    const $totalSlidesSpan = $('#totalSlides');
    const $carousel = $('.carousel');
    
    let currentIndex = 0;
    let itemsPerView = 3; // Default for desktop
    let autoPlayInterval = null;
    
    // Set total slides count
    $totalSlidesSpan.text($slides.length);
    
    // Determine items per view based on screen width
    function updateItemsPerView() {
        if ($(window).width() < 576) {
            itemsPerView = 1; // Mobile
        } else if ($(window).width() < 1200) {
            itemsPerView = 2; // Tablet
        } else {
            itemsPerView = 3; // Desktop
        }
    }
    
    // Update carousel position
    function updateCarousel() {
        const totalWidth = 100 / itemsPerView;
        const offset = -currentIndex * totalWidth;
        $carouselItems.css('transform', `translateX(${offset}%)`);
        $currentSlideSpan.text(currentIndex + 1);
    }
    
    // Go to next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % $slides.length;
        updateCarousel();
    }
    
    // Go to previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + $slides.length) % $slides.length;
        updateCarousel();
    }
    
    // Start auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
    
    // Stop auto-play
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Button click handlers
    $nextBtn.click(function() {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });
    
    $prevBtn.click(function() {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });
    
    // Pause on hover
    $carousel.on('mouseenter', function() {
        stopAutoPlay();
    });
    
    $carousel.on('mouseleave', function() {
        startAutoPlay();
    });
    
    // Handle window resize
    $(window).resize(function() {
        updateItemsPerView();
        updateCarousel();
    });
    
    // Initialize carousel
    updateItemsPerView();
    updateCarousel();
    startAutoPlay();
});
