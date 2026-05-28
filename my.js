AOS.init({
    offset: 0,
    duration: 1000,
    once: true
});

const dropdown = document.querySelector(".dropdown");
const navLinks = document.querySelectorAll(".dropdown .links a");
const changingText = document.getElementById("changing-text");

function hamburg() {
    if (dropdown) {
        dropdown.style.transform = "translateY(0)";
    }
}

function cancel() {
    if (dropdown) {
        dropdown.style.transform = "translateY(-500px)";
    }
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        cancel();
    });
});

const texts = ["Web Developer", "Frontend Designer", "YouTuber", "Coder", "Gamer"];
const typingSpeed = 100;
const deletingSpeed = 60;
const pauseTime = 1000;

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!changingText) return;

    const currentText = texts[textIndex];

    if (isDeleting) {
        changingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(typeEffect, deletingSpeed);
    } else {
        changingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseTime);
        } else {
            setTimeout(typeEffect, typingSpeed);
        }
    }
}

typeEffect();