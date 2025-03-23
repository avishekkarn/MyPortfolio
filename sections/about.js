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
        const extraDetails = document.getElementById("modal-extra-details"); // 🆕 Extra details container

        const details = {
            school: {
                title: "Mount Everest Sec. Boarding School",
                description: "A strong academic foundation built here.",
                image: "../images/school1.jpg",
                location: "Siraha, Nepal",
                modeOfInstruction: "English",
                yearsAttended: "2007 - 2019",
                gpa: "3.5 / 4.0",
                achievements: [
                    "Ranked among the top 5 students in the district board exams.",
                    "Active member of the Science & Robotics Club.",
                    "Winner of the Interschool Mathematics Olympiad."
                ]
            },
            college: {
                title: "Triton International College",
                description: "Focused on Science and Technology, preparing for university.",
                image: "../images/triton1.jpg",
                location: "Kathmandu, Nepal",
                modeOfInstruction: "English",
                yearsAttended: "2019 - 2021",
                gpa: "3.05 / 4.0",
                major: "Science (Physics, Chemistry, Mathematics, Computer Science, Biology)",
                achievements: [
                    "Top performer in Physics and Mathematics.",,
                    "Active Member of Sports and Scientific Clubs",
                    "Researched and Worked on Sprituality during Covid Lockdown"

                ]
            },
            university: {
                title: "Noida International University",
                description: "Advanced studies in Computer Science, specializing in front-end development.",
                image: "../images/noida.jpg",
                location: "Greater Noida, India",
                modeOfInstruction: "English",
                yearsAttended: "2024 - Present",
                gpa: "7.70 / 10",
                major: "Computer Science & Engineering",
                minor: "Artificial Intelligence & Machine Learning",
                achievements: [
                    "Developing a working Health Assistance AI chatbot as self-learning project.",
                    "Building a real-time Human Resources platform as a university project.",
                    "learning all the essentials skills"
                ]
            }
        };

        if (details[type]) {
            const edu = details[type];

            // ✅ Update Basic Information
            title.textContent = edu.title;
            description.textContent = edu.description;
            image.src = edu.image;

            // ✅ Update Extra Details
            extraDetails.innerHTML = `
                <p><strong> Location:</strong> ${edu.location}</p>
                <p><strong> Mode of Instruction:</strong> ${edu.modeOfInstruction}</p>
                <p><strong> Years Attended:</strong> ${edu.yearsAttended}</p>
                <p><strong> GPA:</strong> ${edu.gpa}</p>
                ${edu.major ? `<p><strong> Major:</strong> ${edu.major}</p>` : ""}
                ${edu.minor ? `<p><strong> Minor:</strong> ${edu.minor}</p>` : ""}
                <p><strong> Achievements:</strong></p>
                <ul>
                    ${edu.achievements.map(achieve => `${achieve}<br>`).join("")}
                </ul>
            `;

            // ✅ Show Modal with Smooth Animation
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

        if (!modal || !img) {
            console.error("❌ ERROR: Modal or Image element not found!");
            return;
        }

        // Ensure the path correctly points to the root folder
        let fixedSrc = imageSrc.startsWith("/") ? imageSrc : `/${imageSrc.split('/').pop()}`;

        console.log("📸 Opening Certificate:", fixedSrc);

        img.onload = function () { 
            modal.style.display = "flex";
            setTimeout(() => {
                modal.classList.add("show-popup");
                modal.style.opacity = "1";
            }, 50);
        };

        img.onerror = function () {
            console.error("⚠ ERROR: Image failed to load:", fixedSrc);
        };

        img.src = fixedSrc;
    };

    // 🏆 Close Certificate Preview
    window.closeCertificate = function () {
        const modal = document.getElementById("certificate-modal");
        if (modal) {
            modal.classList.remove("show-popup");
            setTimeout(() => {
                modal.style.opacity = "0";
                modal.style.display = "none";
            }, 500);
        }
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

