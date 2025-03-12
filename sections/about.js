document.addEventListener("DOMContentLoaded", function () {
    console.log("📌 Script Loaded: Fixing Black Screen Issue...");

    // 🛠 **Fix Black Screen Issue - Ensure All Modals Are Hidden Properly**
    setTimeout(() => {
        document.querySelectorAll(".modal").forEach(modal => {
            modal.style.opacity = "0"; // Ensure modal is invisible
            modal.style.display = "none"; // Hide all modals explicitly
            modal.classList.remove("show-popup");
        });
    }, 200); // Delay to ensure DOM is fully loaded before hiding modals

    // 🏫 Open Education Modal
    window.openModal = function (type) {
        const modal = document.getElementById("modal");
        const title = document.getElementById("modal-title");
        const description = document.getElementById("modal-description");
        const image = document.getElementById("modal-image");

        const details = {
            school: {
                title: "Mount Everest Sec. Boarding School",
                description: "A strong academic foundation built here.",
                image: "../images/school1.jpg"
            },
            college: {
                title: "Triton International College",
                description: "Focused on Science and Technology, preparing for university.",
                image: "../images/triton1.jpg"
            },
            university: {
                title: "Noida International University",
                description: "Advanced studies in Computer Science, specializing in front-end development.",
                image: "../images/noida.jpg"
            }
        };

        if (details[type]) {
            title.textContent = details[type].title;
            description.textContent = details[type].description;
            image.src = details[type].image;
            
            modal.style.display = "flex";
            setTimeout(() => {
                modal.classList.add("show-popup");
                modal.style.opacity = "1"; // Ensure smooth fade-in effect
            }, 50);
        }
    };

    // ❌ Close Education Modal
    window.closeModal = function () {
        const modal = document.getElementById("modal");
        modal.classList.remove("show-popup");
        modal.style.opacity = "0"; // Fade out smoothly
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    };

    // 🏆 Open Certificate Preview
    window.openCertificate = function (imageSrc) {
        const modal = document.getElementById("certificate-modal");
        const img = document.getElementById("certificate-img");

        img.src = imageSrc;
        modal.style.display = "flex";
        setTimeout(() => {
            modal.classList.add("show-popup");
            modal.style.opacity = "1";
        }, 50);
    };

    // ❌ Close Certificate Preview
    window.closeCertificate = function () {
        const modal = document.getElementById("certificate-modal");
        modal.classList.remove("show-popup");
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    };

    // 🛑 Close modals when clicking outside
    document.querySelectorAll(".modal").forEach(modal => {
        modal.addEventListener("click", event => {
            if (event.target === modal) {
                window.closeModal();
                window.closeCertificate();
            }
        });
    });

    // ⌨ Close modals on pressing ESC key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            if (typeof window.closeModal === "function") window.closeModal();
            if (typeof window.closeCertificate === "function") window.closeCertificate();
        }
    });

    // ✅ Hide inactive modals on page load (Final Fix)
    window.addEventListener("load", function () {
        console.log("✅ Hiding all inactive modals on page load...");
        document.querySelectorAll(".modal").forEach(modal => {
            modal.style.display = "none";
            modal.style.opacity = "0";
            modal.classList.remove("show-popup");
        });
    });

    // ✅ **Smooth Scrolling for Navbar Links**
    document.querySelectorAll(".navbar-links a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    /* ✅ **Timeline Animation - Smooth One by One Sliding** */
    function handleTimelineScroll() {
        const timelineItems = document.querySelectorAll(".timeline-item");
        let delay = 0; // Delay for staggered effect

        timelineItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight - 100 && !item.classList.contains("show")) {
                setTimeout(() => {
                    item.classList.add("show");
                }, delay);
                delay += 200;
            }
        });
    }

    document.addEventListener("scroll", handleTimelineScroll);
    window.addEventListener("load", handleTimelineScroll);

    
    
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("📌 Script Loaded: Fixing Certificate Scrolling...");

    function scrollCertificates(direction) {
        const container = document.getElementById("certificates-container");

        if (!container) {
            console.error("❌ ERROR: certificates-container not found!");
            return;
        }

        console.log("🛠 Scrolling Certificates:", direction === 1 ? "Right →" : "← Left");

        if (direction === 1) {
            container.scrollBy({ left: 250, behavior: "smooth" });

            setTimeout(() => {
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                    console.log("🔄 Moving First Item to End");
                    let firstItem = container.firstElementChild;
                    container.appendChild(firstItem);
                    container.scrollLeft -= firstItem.clientWidth + 20;
                }
            }, 500);
        } else {
            container.scrollBy({ left: -250, behavior: "smooth" });

            setTimeout(() => {
                if (container.scrollLeft <= 10) {
                    console.log("🔄 Moving Last Item to Start");
                    let lastItem = container.lastElementChild;
                    container.prepend(lastItem);
                    container.scrollLeft += lastItem.clientWidth + 20;
                }
            }, 500);
        }
    }

    // Attach the function globally so HTML buttons can call it
    window.scrollCertificates = scrollCertificates;
});

