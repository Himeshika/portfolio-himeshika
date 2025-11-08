const aboutSection = document.querySelector("#about");

window.addEventListener("scroll", () => {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        aboutSection.classList.add("visible");
    }
});