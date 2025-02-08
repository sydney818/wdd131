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
    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
       
        let reviewCount = localStorage.getItem('reviewCount');
        if (!reviewCount) {
            reviewCount = 0;
        } else {
            reviewCount = parseInt(reviewCount);
        }

    
        reviewCountElement.textContent = `Total Reviews Submitted: ${reviewCount}`;
    } else {
        console.error("Error: Element with id 'reviewCount' not found.");
    }
}


if (window.location.pathname.includes("review.html")) {
 
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('review')) { 
        incrementReviewCount();
    }
}

function incrementReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }
    reviewCount += 1;
    localStorage.setItem('reviewCount', reviewCount);

    updateReviewCount();
}


if (window.location.pathname.includes("form.html")) {
    const form = document.querySelector("form.review");
    if (form) {
        form.addEventListener("submit", function() {
            incrementReviewCount();
        });
    }
}
