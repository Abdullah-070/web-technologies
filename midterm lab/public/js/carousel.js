/**
 * Auto Care - Interactive Product Carousel
 * Features: Infinite loop, responsive breakpoints, auto-play with pause on hover
 */

$(document).ready(function() {
    
    // Carousel Configuration
    const carouselConfig = {
        autoPlayInterval: 5000, // 5 seconds
        slideAnimationDuration: 600, // milliseconds
        gapBetweenItems: 30,
        breakpoints: {
            desktop: { width: 1200, itemsToShow: 3 },
            tablet: { width: 769, itemsToShow: 2 },
            mobile: { width: 0, itemsToShow: 1 }
        }
    };

    // Cache jQuery elements
    const $carouselTrack = $('#carouselTrack');
    const $prevBtn = $('#prevBtn');
    const $nextBtn = $('#nextBtn');
    const $slideCounter = $('#slideCounter');
    const $carouselItems = $('.carousel-item');

    // Carousel state
    let carouselState = {
        currentPosition: 0,
        autoPlayTimer: null,
        isAutoPlaying: false,
        itemsToShow: 3,
        totalItems: $carouselItems.length,
        isAnimating: false,
        containerWidth: calculateContainerWidth()
    };

    /**
     * Get current items to show based on window width
     */
    function getItemsToShow() {
        const width = $(window).width();
        if (width >= carouselConfig.breakpoints.desktop.width) {
            return carouselConfig.breakpoints.desktop.itemsToShow;
        } else if (width >= carouselConfig.breakpoints.tablet.width) {
            return carouselConfig.breakpoints.tablet.itemsToShow;
        } else {
            return carouselConfig.breakpoints.mobile.itemsToShow;
        }
    }

    /**
     * Calculate container width for carousel
     */
    function calculateContainerWidth() {
        const $container = $carouselTrack.closest('.carousel-inner');
        return $container.width();
    }

    /**
     * Update carousel state on window resize
     */
    function updateCarouselState() {
        carouselState.itemsToShow = getItemsToShow();
        carouselState.containerWidth = calculateContainerWidth();
        carouselState.currentPosition = 0;
        updateCarouselPosition(0);
        updateSlideCounter();
    }

    /**
     * Calculate the offset for the carousel track
     */
    function calculateOffset(position) {
        const itemWidth = carouselState.containerWidth / carouselState.itemsToShow;
        const gapTotal = carouselConfig.gapBetweenItems * (carouselState.itemsToShow - 1);
        const totalAvailableWidth = carouselState.containerWidth - gapTotal;
        const singleItemWidth = totalAvailableWidth / carouselState.itemsToShow;
        
        return -(position * (singleItemWidth + carouselConfig.gapBetweenItems));
    }

    /**
     * Update carousel position with smooth animation
     */
    function updateCarouselPosition(position) {
        const offset = calculateOffset(position);
        $carouselTrack.css({
            'transform': `translateX(${offset}px)`,
            'transition': `transform ${carouselConfig.slideAnimationDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
        });
    }

    /**
     * Move to next slide
     */
    function nextSlide() {
        if (carouselState.isAnimating) return;
        
        carouselState.isAnimating = true;
        let nextPosition = carouselState.currentPosition + 1;

        // Infinite loop: wrap around to start
        if (nextPosition > carouselState.totalItems - carouselState.itemsToShow) {
            nextPosition = 0;
        }

        carouselState.currentPosition = nextPosition;
        updateCarouselPosition(carouselState.currentPosition);
        updateSlideCounter();

        setTimeout(() => {
            carouselState.isAnimating = false;
        }, carouselConfig.slideAnimationDuration);

        // Reset auto-play timer
        resetAutoPlay();
    }

    /**
     * Move to previous slide
     */
    function prevSlide() {
        if (carouselState.isAnimating) return;
        
        carouselState.isAnimating = true;
        let prevPosition = carouselState.currentPosition - 1;

        // Infinite loop: wrap around to end
        if (prevPosition < 0) {
            prevPosition = carouselState.totalItems - carouselState.itemsToShow;
        }

        carouselState.currentPosition = prevPosition;
        updateCarouselPosition(carouselState.currentPosition);
        updateSlideCounter();

        setTimeout(() => {
            carouselState.isAnimating = false;
        }, carouselConfig.slideAnimationDuration);

        // Reset auto-play timer
        resetAutoPlay();
    }

    /**
     * Update the slide counter display
     */
    function updateSlideCounter() {
        const startItem = carouselState.currentPosition + 1;
        const endItem = Math.min(carouselState.currentPosition + carouselState.itemsToShow, carouselState.totalItems);
        const counterText = `Showing ${startItem}-${endItem} of ${carouselState.totalItems}`;
        $slideCounter.text(counterText);
    }

    /**
     * Start auto-play
     */
    function startAutoPlay() {
        if (carouselState.autoPlayTimer) return;
        
        carouselState.isAutoPlaying = true;
        carouselState.autoPlayTimer = setInterval(nextSlide, carouselConfig.autoPlayInterval);
    }

    /**
     * Stop auto-play
     */
    function stopAutoPlay() {
        if (carouselState.autoPlayTimer) {
            clearInterval(carouselState.autoPlayTimer);
            carouselState.autoPlayTimer = null;
            carouselState.isAutoPlaying = false;
        }
    }

    /**
     * Reset auto-play timer (called after manual navigation)
     */
    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    /**
     * Event Listeners - Button Clicks
     */
    $prevBtn.on('click', function(e) {
        e.preventDefault();
        prevSlide();
    });

    $nextBtn.on('click', function(e) {
        e.preventDefault();
        nextSlide();
    });

    /**
     * Event Listeners - Hover to Pause Auto-Play
     */
    $carouselTrack.on('mouseenter', function() {
        if (carouselState.isAutoPlaying) {
            stopAutoPlay();
        }
    });

    $carouselTrack.on('mouseleave', function() {
        if (!carouselState.isAutoPlaying && carouselState.autoPlayTimer === null) {
            startAutoPlay();
        }
    });

    /**
     * Keyboard Navigation (Bonus Feature)
     */
    $(document).on('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    /**
     * Handle window resize
     */
    $(window).on('resize', function() {
        updateCarouselState();
    });

    /**
     * Initialize Carousel
     */
    function initCarousel() {
        updateCarouselState();
        startAutoPlay();
        
        // Log initialization for debugging
        console.log('✓ Carousel initialized with ' + carouselState.itemsToShow + ' items per slide');
        console.log('✓ Auto-play enabled (5 second interval)');
        console.log('✓ Total carousel items: ' + carouselState.totalItems);
    }

    // Start the carousel
    initCarousel();

}); // End of $(document).ready()
