document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll(".animated-text span");

    letters.forEach((letter, index) => {
        letter.style.display = "inline-block"; // Assurer que chaque lettre est animable
        letter.style.animation = `scaleEffect 1.5s infinite ease-in-out`;
        letter.style.animationDelay = `${index * 0.1}s`; // Décalage entre chaque lettre
    });
});