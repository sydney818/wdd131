//update footer year and modified date
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectElement = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

function incrementReviewCountOnSubmit() {
    let numReview = Number(localStorage.getItem("review-ls")) || 0;

    numReview++;

    localStorage.setItem("review-ls", numReview);
}

let numReview = Number(localStorage.getItem("review-ls"));
if (numReview !== 0) {
    document.querySelector("#reviewCount").textContent = `Total Reviews Submitted: ${numReview}`;
} else {
    document.querySelector("#reviewCount").textContent = "This is your first review!";
}

if (window.location.pathname.includes("review.html")) {
    document.addEventListener("DOMContentLoaded", function() {
        const reviewDisplay = document.querySelector(".reviews");

        let numReview = Number(localStorage.getItem("review-ls"));

        if (numReview > 1) {
            reviewDisplay.textContent = `Total Reviews Submitted: ${numReview}`;
        } else {
            reviewDisplay.textContent = "This is your first review!";
        }
    });
}
