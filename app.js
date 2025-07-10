
// 1. Section Text Auto Loader
const text = document.querySelector(".sec-text");
function textLoad() {
    setTimeout(() => text.textContent = "Pursuing BCA", 0);
    setTimeout(() => text.textContent = "FrontEndDeveloper", 4000);
    setTimeout(() => text.textContent = "SoftwareDeveloper", 8000);
}
textLoad();

// 2. Read More Toggle
const aboutMeText = document.querySelector(".aboutme");
const readMore = document.querySelector(".read-more");
readMore.addEventListener("click", () => {
    readMore.classList.toggle("clicked");
    if (readMore.classList.contains("clicked")) {
        aboutMeText.textContent = "Hey there! I'm Saurav, pursuing BCA and software developer specializing in Java. I love turning ideas into functional software and applications. Passionate about creativity and problem-solving, I thrive on crafting seamless user experiences. My journey in technology began with a curiosity-driven exploration of programming languages and software development. Along the way, I've honed my skills in front-end, Java & its framework technologies. I'm constantly seeking ways to innovate and elevate the digital experience. Outside of coding, you'll find me exploring the intersection of technology and design, experimenting with new frameworks, or immersing myself in the vibrant tech community. I thrive in collaborative environments and am always eager to learn from and share knowledge with fellow enthusiasts.";
        readMore.textContent = "Read Less";
    } else {
        aboutMeText.textContent = "Hey there! I'm Saurav, pursuing BCA and software developer specializing in Java. I love turning ideas into functional software and applications. Passionate about creativity and problem-solving, I thrive on crafting seamless user experiences. Let's collaborate and bring your vision to life!...";
        readMore.textContent = "Read More";
    }
});

// 3. Resume Download
const downloadBtn = document.querySelector(".download-btn");
downloadBtn.addEventListener("click", () => {
    const resumePath = "https://docs.google.com/document/d/1eygTjxTOArsHTwVl6k8MH376wUxS6Aze/edit?usp=sharing";
    window.location.href = resumePath;
});

// 4. Project Scroll Buttons
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const projList = document.querySelector(".project-list");
let scrollAmount = 0;

function calculateStep() {
    const firstImage = document.querySelector(".overlay");
    return firstImage?.clientWidth + 16 || 300; // fallback to 300px
}

const scrollStep = calculateStep();

prevBtn?.addEventListener("click", () => {
    scrollAmount -= scrollStep;
    scrollAmount = Math.max(scrollAmount, 0);
    slideTo(scrollAmount);
    updateButtonVisibility();
});

nextBtn?.addEventListener("click", () => {
    scrollAmount += scrollStep;
    const maxScroll = projList.scrollWidth - projList.clientWidth;
    scrollAmount = Math.min(scrollAmount, maxScroll);
    slideTo(scrollAmount);
    updateButtonVisibility();
});

function slideTo(amount) {
    projList.scrollTo({ left: amount, behavior: "smooth" });
}

function updateButtonVisibility() {
    prevBtn.style.display = scrollAmount <= 0 ? "none" : "block";
    nextBtn.style.display = scrollAmount >= projList.scrollWidth - projList.clientWidth ? "none" : "block";
}

// 5. Email Sender
const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const contact = document.querySelector("#contact");
const sub = document.querySelector("#sub");
const msg = document.querySelector("#messg");
const errorDivs = document.querySelectorAll(".error-field");

function showError(errorDiv) {
    errorDiv.style.display = "block";
}

function sendEmail() {
    const bodyMesg = `Full Name: ${fullName.value}<br>Contact No: ${contact.value}<br>Subject: ${sub.value}<br>Email: ${email.value}<br>Message: ${msg.value}`;

    let hasError = false;
    errorDivs.forEach((div, index) => {
        div.style.display = "none";
        const input = form.elements[index];
        if (!input.value) {
            showError(div);
            hasError = true;
        }
    });

    if (hasError) return;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "vishalritazson88@gmail.com",
        Password: "6D301B4566966758614CC5F4FF75DD761C2C",
        To: "vishalritazson88@gmail.com",
        From: "vishalritazson88@gmail.com",
        Subject: sub.value,
        Body: bodyMesg
    }).then(() => {
        alert("Email sent successfully! Thanks for your interest.");
    });
}

form?.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    form.reset();
});

// 6. Hamburger Menu Toggle
const ham = document.querySelector(".hamburg-menu");
const ul = document.querySelector(".ham-list");

ham?.addEventListener("click", () => {
    ul.classList.toggle("display");
});

document.querySelectorAll(".ham-list li").forEach((item) => {
    item.addEventListener("click", () => {
        ul.classList.remove("display");
    });
});
