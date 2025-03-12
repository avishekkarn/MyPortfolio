document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll(".skill-item");
    const categories = document.querySelectorAll(".skills-category");

    // Fade-in effect on scroll
    function handleScroll() {
        categories.forEach(category => {
            const rect = category.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                category.classList.add("visible");
            }
        });
    }
    
    // Hover Animation
    skillItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.1) rotate(3deg)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1) rotate(0)";
        });
    });

    document.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on page load
});
