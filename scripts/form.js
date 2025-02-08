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


  function updateReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    document.getElementById('review-counter').textContent = `Total Reviews Submitted: ${reviewCount}`;
}

// Display all reviews stored in localStorage
function displayReviews() {
    const reviewsList = document.getElementById('reviewsList');
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    reviewsList.innerHTML = ''; 

    reviews.forEach(review => {
        const li = document.createElement('li');
        li.innerText = review;
        reviewsList.appendChild(li);
    });
}

// Process the form data from URL 
function processFormData() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('production');
    const rating = urlParams.get('rating');
    const installDate = urlParams.get('install_date');
    const features = urlParams.get('features');
    const reviewText = urlParams.get('review');
    const name = urlParams.get('name') || "Anonymous";

    if (reviewText) {
        // Display review details
        const reviewContainer = document.getElementById("review-container");
        reviewContainer.innerHTML = `
            <h2>Review Submitted</h2>
            <p><strong>Product Name:</strong> ${product}</p>
            <p><strong>Overall Rating:</strong> ${rating}</p>
            <p><strong>Date of Installation:</strong> ${installDate}</p>
            <p><strong>Selected Features:</strong> ${features}</p>
            <p><strong>Review:</strong> ${reviewText}</p>
            <p><strong>Reviewer:</strong> ${name}</p>
        `;

   
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);

        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(`${reviewText} - ${name}`);
        localStorage.setItem('reviews', JSON.stringify(reviews));

   
        updateReviewCount();
        displayReviews();
    } else {
        document.getElementById("review-container").innerHTML = "<p>No review data found.</p>";
    }
}


window.onload = function() {
    updateReviewCount();
    displayReviews();
    processFormData();
};