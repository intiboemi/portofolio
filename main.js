/* ==========================================================================
   Portfolio Landing Page - JavaScript
   Author: Prabowo Boemi Wijaya
   Features: Typing effect, Intersection Observer, Navbar, Mobile menu
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initTypingEffect();
    initScrollObserver();
    initNavbarScroll();
    initMobileMenu();
});

/* --------------------------------------------------------------------------
   1. Typing Effect
   -------------------------------------------------------------------------- */
function initTypingEffect() {
    const phrases = [
        "Building Secure Infrastructure",
        "Managing Cloud Systems",
        "IoT Enthusiast",
        "Software Engineer",
    ];

    const el = document.getElementById("typing-text");
    if (!el) return;

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typeSpeed = 60;
    const deleteSpeed = 35;
    const pauseAfterType = 2000;
    const pauseAfterDelete = 400;

    function tick() {
        const current = phrases[phraseIdx];

        if (!isDeleting) {
            el.textContent = current.substring(0, charIdx + 1);
            charIdx++;

            if (charIdx === current.length) {
                isDeleting = true;
                setTimeout(tick, pauseAfterType);
                return;
            }
            setTimeout(tick, typeSpeed);
        } else {
            el.textContent = current.substring(0, charIdx - 1);
            charIdx--;

            if (charIdx === 0) {
                isDeleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                setTimeout(tick, pauseAfterDelete);
                return;
            }
            setTimeout(tick, deleteSpeed);
        }
    }

    tick();
}

/* --------------------------------------------------------------------------
   2. Intersection Observer - Fade-in on Scroll
   -------------------------------------------------------------------------- */
function initScrollObserver() {
    const targets = document.querySelectorAll(".fade-in");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    targets.forEach((t) => observer.observe(t));
}

/* --------------------------------------------------------------------------
   3. Navbar - Background on scroll + active link highlight
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!navbar) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-slate-900/95", "shadow-lg");
            navbar.classList.remove("bg-transparent");
        } else {
            navbar.classList.remove("bg-slate-900/95", "shadow-lg");
            navbar.classList.add("bg-transparent");
        }

        let current = "";
        sections.forEach((section) => {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active", "text-cyan-400");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active", "text-cyan-400");
            }
        });
    });
}

/* --------------------------------------------------------------------------
   4. Mobile Menu Toggle
   -------------------------------------------------------------------------- */
function initMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");

    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.add("hidden");
        });
    });
}