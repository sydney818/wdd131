const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;



document.getElementById("hamburger-btn").addEventListener("click", function() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
});