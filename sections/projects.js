window.addEventListener("load", async function () {
    console.log("📌 Script Loaded: GitHub Projects Fetching...");

    const GITHUB_USERNAME = "avishekkarn"; 
    const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=15`;

    const projectContainer = document.getElementById("github-projects-container");

    if (!projectContainer) {
        console.error("❌ ERROR: #github-projects-container not found in the HTML!");
        return;
    }

    try {
        console.log("🔄 Fetching from GitHub API...");
        const response = await fetch(API_URL);

        if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);

        const repos = await response.json();
        console.log("✅ Fetched Repositories:", repos);

        if (repos.length === 0) {
            projectContainer.innerHTML = "<p>No projects found.</p>";
            return;
        }

        let projectHTML = "";
        repos.forEach(repo => {
            const { name, description, html_url, homepage, topics, pushed_at } = repo;

            const formattedDate = new Date(pushed_at).toLocaleDateString("en-US", {
                year: "numeric", month: "long", day: "numeric"
            });

            projectHTML += `
                <div class="project-card">
                    <div class="project-content">
                        <h3>${name}</h3>
                        <p>${description || "No description available."}</p>
                        <p><strong>Last Updated:</strong> ${formattedDate}</p>
                        <p><strong>Topics:</strong> ${topics.length ? topics.join(", ") : "None"}</p>
                        <div class="project-links">
                            <a href="${html_url}" target="_blank" class="github-link">🔗 GitHub</a>
                            ${homepage ? `<a href="${homepage}" target="_blank" class="demo-link">🚀 Live Demo</a>` : ""}
                        </div>
                    </div>
                </div>
            `;
        });

        projectContainer.innerHTML = projectHTML;
    } catch (error) {
        console.error("❌ Error fetching GitHub projects:", error);
        projectContainer.innerHTML = "<p>⚠️ Failed to load projects. Try again later.</p>";
    }
});
