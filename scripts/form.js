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
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    }
    document.getElementById('reviewCount').innerText = `Total Reviews Submitted: ${reviewCount}`;
}

// Function to display all reviews from localStorage
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


function processFormData() {
    const urlParams = new URLSearchParams(window.location.search);
    const reviewText = urlParams.get('review');
    const name = urlParams.get('name');

    if (reviewText) {

        let reviewCount = localStorage.getItem('reviewCount');
        if (!reviewCount) {
            reviewCount = 0;
        }
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);


        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        const fullReview = `${reviewText} ${name ? '- ' + name : ''}`; 
        reviews.push(fullReview);
        localStorage.setItem('reviews', JSON.stringify(reviews));


        updateReviewCount();
        displayReviews();
    }
}


window.onload = function() {
    updateReviewCount();
    displayReviews();
    processFormData();
};