// Add interactivity to the sidebar links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar ul li a");
    const pageTitle = document.getElementById("pageTitle");

    // Handle sidebar link clicks
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            // Remove active class from all links
            links.forEach(l => l.parentElement.classList.remove("active"));

            // Add active class to the clicked link
            link.parentElement.classList.add("active");

            // Update page title based on the clicked link
            const linkId = link.id;
            switch (linkId) {
                case "home":
                    pageTitle.textContent = "Accueil";
                    break;
                case "about":
                    pageTitle.textContent = "À propos d'ISMAI-CONNECT";
                    break;
                case "notifications":
                    pageTitle.textContent = "Notifications";
                    break;
                case "settings":
                    pageTitle.textContent = "Paramètres";
                    break;
                case "discord":
                    pageTitle.textContent = "Discord";
                    break;
                default:
                    pageTitle.textContent = "Quelques informations sur ISMAI-CONNECT";
            }
        });
    });

    // Add interactivity to the search bar
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});