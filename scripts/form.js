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
 
    const reviewCountElement = document.getElementById("reviewCount");


    let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

 
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
