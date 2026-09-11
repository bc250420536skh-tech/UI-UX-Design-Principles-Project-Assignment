* =========================================
   ALEX STYLES PORTFOLIO
   Interactive JavaScript
========================================= */


/* ---------- MOBILE NAVIGATION ---------- */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* ---------- PROJECT MODAL ---------- */

const modal = document.getElementById("projectModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");


const projects = {

    studio: {
        title: "Creative Studio",
        description:
            "A modern portfolio website concept created for a fictional creative studio. The design focuses on strong typography, clear navigation, visual hierarchy, and responsive layouts.",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design"
        ]
    },

    finance: {
        title: "Finance Dashboard",
        description:
            "A dashboard concept that presents financial information through a clean and organized interface. The design emphasizes usability, visual hierarchy, and accessibility.",
        technologies: [
            "UI/UX Design",
            "CSS Grid",
            "Flexbox",
            "Responsive Design"
        ]
    },

    travel: {
        title: "Travel Explorer",
        description:
            "A responsive travel website concept designed to help users explore destinations. The interface combines colorful visual elements with intuitive navigation and mobile-friendly layouts.",
        technologies: [
            "Web Design",
            "UX Design",
            "HTML5",
            "CSS3"
        ]
    }

};


/* Open modal */

document.querySelectorAll(".project-btn").forEach(button => {

    button.addEventListener("click", () => {

        const projectName = button.dataset.project;

        const project = projects[projectName];

        if (!project) return;

        modalTitle.textContent = project.title;

        modalDescription.textContent = project.description;

        modalTech.innerHTML = "";

        project.technologies.forEach(technology => {

            const tag = document.createElement("span");

            tag.textContent = technology;

            modalTech.appendChild(tag);

        });

        modal.classList.add("active");

        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("modal-open");

        modalClose.focus();

    });

});


/* Close modal */

function closeModal() {

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

}


modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal);


/* Close modal with Escape key */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* ---------- CONTACT FORM ---------- */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    formMessage.textContent =
        "Thanks! Your message has been received. Alex will get back to you soon.";

    contactForm.reset();

});


/* ---------- ACTIVE NAVIGATION ---------- */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});
