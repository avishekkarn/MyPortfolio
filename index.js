
window.onload = function () {
    document.body.style.visibility = "visible";  
};

document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".navbar-links a");
    const currentPath = window.location.pathname;
    
    navItems.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".navbar-links a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const sectionId = this.getAttribute("href").substring(1); // Remove "#"
            const targetSection = document.getElementById(sectionId.toLowerCase());

            if (targetSection) {
                const navbarHeight = document.querySelector(".navbar").offsetHeight;

                window.scrollTo({
                    top: targetSection.offsetTop - navbarHeight, // Adjust for navbar height
                    behavior: "smooth"
                });

                console.log(`Scrolling to ${sectionId}...`); // Debugging log
            } else {
                console.error(`Section with ID '${sectionId}' not found!`); // Debugging error
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact-btn").addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact-btn").addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
});



const btnEl = document.querySelector(".contact-btn");

btnEl.addEventListener("mouseenter", (event) => {
  const rect = btnEl.getBoundingClientRect(); // Get button position
  btnEl.addEventListener("mousemove", (e) => {
    const x = e.clientX - rect.left; // Mouse X relative to button
    const y = e.clientY - rect.top;  // Mouse Y relative to button

    btnEl.style.setProperty("--xPos", `${x}px`);
    btnEl.style.setProperty("--yPos", `${y}px`);
  });
});

// Optional: Cleanup event when mouse leaves button
btnEl.addEventListener("mouseleave", () => {
  btnEl.style.setProperty("--xPos", `-999px`);
  btnEl.style.setProperty("--yPos", `-999px`);
});




//emailjs

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("LDj93-yTofF3760Bg"); // Replace with your EmailJS Public Key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        // Collect form data
        const formData = {
            user_name: document.getElementById("name").value,
            user_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        if (!formData.user_name || !formData.user_email || !formData.message) {
            alert("⚠ Please fill out all fields before sending.");
            return;
        }

        // Send email using EmailJS
        emailjs.send("service_yk6pvxq", "template_8b86jse", formData)
            .then(response => {
                console.log("✅ SUCCESS:", response);
                alert("📩 Your message has been sent successfully!");
                document.getElementById("contact-form").reset(); // Clear the form
            })
            .catch(error => {
                console.error("❌ ERROR:", error);
                alert("⚠ Failed to send message. Please try again later.");
            });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    hamburger.innerHTML = `
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    `;

    const mobileNav = document.createElement("div");
    mobileNav.classList.add("mobile-nav");
    mobileNav.innerHTML = `
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#blogs">Blogs</a>
    `;

    document.body.appendChild(hamburger);
    document.body.appendChild(mobileNav);

    // Ensure click event works
    hamburger.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent clicks from being blocked
        hamburger.classList.toggle("active");
        mobileNav.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
            hamburger.classList.remove("active");
            mobileNav.classList.remove("active");
        }
    });
});





