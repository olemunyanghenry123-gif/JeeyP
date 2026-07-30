/* ======================================
   JEEYP TECH
   script.js
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* Smooth fade-in animation */
    const elements = document.querySelectorAll(".card, .stat, .about, .cta");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "all 0.8s ease";

            }

        });

    }, {
        threshold: 0.2
    });

    elements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        observer.observe(el);

    });

    /* Animated statistics counter */

    const counters = document.querySelectorAll(".stat h2");

    counters.forEach(counter => {

        const targetText = counter.textContent;
        const target = parseInt(targetText.replace(/\D/g, ""));

        if (!target) return;

        let current = 0;

        const increment = Math.ceil(target / 100);

        const update = () => {

            current += increment;

            if (current >= target) {

                counter.textContent = targetText;

            } else {

                let suffix = targetText.replace(/[0-9]/g, "");

                counter.textContent = current + suffix;

                requestAnimationFrame(update);

            }

        };

        update();

    });

    /* Navbar background on scroll */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.style.background = "rgba(5,15,35,0.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

        } else {

            navbar.style.background = "rgba(10,20,40,.65)";
            navbar.style.boxShadow = "none";

        }

    });

});

/* Current year in footer */

const footer = document.querySelector("footer p:last-child");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Jeeyp Tech. All Rights Reserved.`;

}
/* Portfolio Filter */

const filterButtons = document.querySelectorAll(".portfolio-filter button");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.textContent.toLowerCase();

        portfolioCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all") {

                card.style.display = "block";

            } else if (
                (filter === "websites" && category === "website") ||
                (filter === "mobile apps" && category === "app") ||
                (filter === "cybersecurity" && category === "cyber") ||
                (filter === "cloud" && category === "cloud") ||
                (filter === "software" && category === "software")
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});
