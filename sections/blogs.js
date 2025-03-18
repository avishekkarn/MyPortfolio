document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");

    const blogs = [
        {
            title: "The Chance Encounter with a Stranger",
            description: "A deep dive into my personal story, experience.",
            link: "https://medium.com/@avishek.np09/the-chance-encounter-with-a-stranger-97708a738b3a",
            thumbnail: "../images/p2.png",
            author: "Avishek Karn",
            date: "March 1, 2024"
        },
        // {
        //     title: "Cybersecurity Best Practices",
        //     description: "Protect your online presence with essential security tips.",
        //     link: "https://cybersecurity.com/secure-your-data",
        //     thumbnail: "../images/p3.jpg",
        //     author: "John Doe",
        //     date: "February 2025"
        // },
        // {
        //     title: "Data Structures & Algorithms Guide",
        //     description: "Learn DSA concepts with real-world examples.",
        //     link: "files/DSA-Guide.pdf",
        //     thumbnail: "../images/p4.jpg",
        //     author: "Avishek Karn",
        //     date: "January 2025"
        // },
        // {
        //     title: "Web Development Trends 2025",
        //     description: "A look into the future of web development and emerging technologies.",
        //     link: "https://dev.to/web-trends",
        //     thumbnail: "../images/p5.jpg",
        //     author: "Jane Smith",
        //     date: "April 2025"
        // },
        // {
        //     title: "How to Optimize React Performance",
        //     description: "Techniques and best practices to speed up React applications.",
        //     link: "https://github.com/avishekkarn/react-optimization",
        //     thumbnail: "../images/p6.jpg",
        //     author: "Avishek Karn",
        //     date: "May 2025"
        // }
    ];

    // **Clear existing blogs**
    blogContainer.innerHTML = "";

    // **Loop through blogs & create cards**
    blogs.forEach(blog => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        blogCard.innerHTML = `
            <img src="${blog.thumbnail}" alt="${blog.title}" class="blog-thumbnail">
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
                <p><strong>By:</strong> ${blog.author} | <strong>Date:</strong> ${blog.date}</p>
                <a href="${blog.link}" target="_blank" class="btn read-more">Read More</a>
            </div>
        `;

        blogContainer.appendChild(blogCard);
    });
});
