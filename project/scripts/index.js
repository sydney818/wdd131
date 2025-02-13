const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", function () {
    // Handle Review Form Submission
    const reviewForm = document.getElementById("reviewForm");

    if (reviewForm) {
        reviewForm.addEventListener("submit", function (event) {
            event.preventDefault();  // Prevent the form from submitting normally

            let reviewer = document.getElementById("reviewer").value.trim();
            let reviewText = document.getElementById("reviewText").value.trim();

            if (reviewer === "" || reviewText === "") {
                alert("Please fill in both fields.");
                return;
            }

            let newReview = { name: reviewer, text: reviewText };
            let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

            reviews.push(newReview);
            localStorage.setItem("reviews", JSON.stringify(reviews));

            // Clear form after submission
            reviewForm.reset();

            alert("Thank you for your review!");
            displayReviews();  // Refresh the displayed reviews
        });
    }

    // Function to display reviews
    function displayReviews() {
        const reviewsContainer = document.getElementById("reviewsContainer");

        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        if (reviews.length === 0) {
            reviewsContainer.innerHTML = "<p>No reviews yet. Be the first to leave one!</p>";
        } else {
            reviewsContainer.innerHTML = ""; // Clear existing reviews before displaying new ones
            reviews.forEach(review => {
                let reviewElement = document.createElement("div");
                reviewElement.classList.add("review");

                reviewElement.innerHTML = `
                    <h4>${review.name}</h4>
                    <p>${review.text}</p>
                `;

                reviewsContainer.appendChild(reviewElement);
            });
        }
    }

    // Display reviews on page load
    displayReviews();
});
