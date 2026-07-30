/* ==========================================
   JEEYP TECH - PROFESSIONAL SCRIPT.JS
   PART 1
========================================== */

// ==========================
// Mobile Navigation
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}

// ==========================
// Smooth Scrolling
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

        if(navLinks){

            navLinks.classList.remove("active");

        }

    });

});

// ==========================
// Sticky Header Effect
// ==========================

const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(6,15,35,.98)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    }else{

        header.style.background = "rgba(6,15,35,.92)";
        header.style.boxShadow = "none";

    }

});

// ==========================
// Reveal Animation
// ==========================

const revealItems = document.querySelectorAll(

".service-card,.portfolio-card,.team-card,.testimonial-card,.price-card,.stat-box"

);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.15});

revealItems.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition="all .7s ease";

revealObserver.observe(item);

});

// ==========================
// Animated Statistics
// ==========================

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

const updateCounter=()=>{

const text=counter.innerText;

const target=parseInt(text.replace(/\D/g,""));

const suffix=text.replace(/[0-9]/g,"");

let current=parseInt(counter.getAttribute("data-count"))||0;

const increment=Math.ceil(target/80);

if(current<target){

current+=increment;

if(current>target) current=target;

counter.innerText=current+suffix;

counter.setAttribute("data-count",current);

requestAnimationFrame(updateCounter);

}else{

counter.innerText=target+suffix;

}

};

updateCounter();

});

// ==========================
// Portfolio Filter
// ==========================

const filterButtons=document.querySelectorAll(".portfolio-filter button");

const portfolioCards=document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

// Ready for category filtering when
// data-category values are added.

portfolioCards.forEach(card=>{

card.style.display="block";

});

});
/* ==========================================
   JEEYP TECH - PROFESSIONAL SCRIPT.JS
   PART 2
========================================== */

// ==========================
// Scroll To Top Button
// ==========================

const scrollButton = document.createElement("button");

scrollButton.innerHTML = "↑";

scrollButton.className = "scroll-top";

document.body.appendChild(scrollButton);

scrollButton.style.position = "fixed";
scrollButton.style.right = "25px";
scrollButton.style.bottom = "100px";
scrollButton.style.width = "55px";
scrollButton.style.height = "55px";
scrollButton.style.border = "none";
scrollButton.style.borderRadius = "50%";
scrollButton.style.background = "#00d4ff";
scrollButton.style.color = "#081120";
scrollButton.style.fontSize = "24px";
scrollButton.style.cursor = "pointer";
scrollButton.style.display = "none";
scrollButton.style.zIndex = "999";
scrollButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollButton.style.display = "block";

    } else {

        scrollButton.style.display = "none";

    }

});

scrollButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section[id]");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// Contact Form Validation
// ==========================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = this.querySelector('input[type="text"]');
        const email = this.querySelector('input[type="email"]');

        if (!name.value.trim()) {

            alert("Please enter your full name.");

            return;

        }

        if (!email.value.trim()) {

            alert("Please enter your email address.");

            return;

        }

        alert("Thank you! Your message has been received.");

        this.reset();

    });

}

// ==========================
// Current Year
// ==========================

const yearElement = document.querySelector(".footer-year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

// ==========================
// Welcome Message
// ==========================

window.addEventListener("load", () => {

    console.log("Welcome to Jeeyp Tech");

});

// ==========================
// End of Script
// ==========================
});
