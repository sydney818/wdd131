//update footer year and modified date
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

function updateReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;

    // Update the review count on the page
    const reviewsElement = document.querySelector('.reviews');
    if (reviewsElement) {
        reviewsElement.textContent = `Number of reviews completed: ${reviewCount}`;
    } else {
        console.error("Element .reviews not found on this page.");
    }
}

function incrementReviewCountOnSubmit() {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;
    reviewCount += 1;
    localStorage.setItem('reviewCount', reviewCount);
    console.log("Running updateReviewCount function."); 

    updateReviewCount();

    return true; 
}


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

