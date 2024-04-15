window.addEventListener('scroll', function() {
    // Select the navbar
    var navbar = document.querySelector('.navbar');
    
    // Toggle .scrolled-down class on the navbar based on scroll position
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled-down');
    } else {
        navbar.classList.remove('scrolled-down');
    }
});

