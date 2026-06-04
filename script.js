// SMART RESPONSIVE MOBILE NAVIGATION SCRIPT
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-link-item");

    // Open/Close Mobile Menu Panel
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function() {
            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("active");
            
            // Prevent background page body from scrolling when menu is full screen
            if (navLinks.classList.contains("active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "initial";
            }
        });
    }

    // Smooth scroll navigation closing handler (For smooth sliding away upon page link taps)
    navItems.forEach(item => {
        item.addEventListener("click", function() {
            if (navLinks.classList.contains("active")) {
                menuToggle.classList.remove("active");
                navLinks.classList.remove("active");
                document.body.style.overflow = "initial";
            }
        });
    });
});