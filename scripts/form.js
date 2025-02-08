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


document.addEventListener("DOMContentLoaded", function () {
    updateReviewCount();
});

function updateReviewCount() {
    // 1️⃣ Initialize the display element.
    const reviewCountElement = document.getElementById("reviewCount");

    // 2️⃣ Get the stored review count from localStorage (default to 0 if not found).
    let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

    // 3️⃣ Check if reviewCount is greater than 0 (not first visit).
    if (reviewCount !== 0) {
        reviewCountElement.textContent = `Total Reviews Submitted: ${reviewCount}`;
    } else {
        reviewCountElement.textContent = `No reviews submitted yet. Be the first!`;
    }
}

function incrementReviewCount() {

    let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;
    reviewCount++;


    localStorage.setItem('reviewCount', reviewCount);

    
    updateReviewCount();
}

window.onload = function () {
    updateReviewCount();  

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('review')) { 
        incrementReviewCount();
    }
};
