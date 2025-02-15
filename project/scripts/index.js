document.addEventListener("DOMContentLoaded", function () {
    // Update the year and last modified info
    const today = new Date();
    document.querySelector("#currentyear").textContent = today.getFullYear();
    document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;



    const reviewForm = document.getElementById("reviewForm");

    if (reviewForm) {
        reviewForm.addEventListener("submit", function (event) {
            event.preventDefault();  // Prevent form from submitting normally

            let reviewer = document.getElementById("reviewer").value.trim();
            let reviewText = document.getElementById("reviewText").value.trim();

            if (reviewer === "" || reviewText === "") {
                alert("Please fill in both fields.");
                return;
            }

            let newReview = { name: reviewer, text: reviewText };

            // Save the most recent review to localStorage, overwriting any previous review
            localStorage.setItem("mostRecentReview", JSON.stringify(newReview));

            // Clear form after submission
            reviewForm.reset();

            alert("Thank you for your review!");
            displayReview();  // Refresh the displayed review
        });
    }

    // Function to display the most recent review
    function displayReview() {
        const reviewsContainer = document.getElementById("reviewsContainer");
        
        if (!reviewsContainer) {
            console.error("reviewsContainer element not found!");
            return;
        }

        let mostRecentReview = JSON.parse(localStorage.getItem("mostRecentReview"));

        if (mostRecentReview) {
            reviewsContainer.innerHTML = ""; // Clear any existing reviews before displaying the new one

            let reviewElement = document.createElement("div");
            reviewElement.classList.add("review");

            reviewElement.innerHTML = `
                <h4>${mostRecentReview.name}</h4>
                <p>${mostRecentReview.text}</p>
            `;

            reviewsContainer.appendChild(reviewElement);
        } else {
            reviewsContainer.innerHTML = "<p>No reviews yet. Be the first to leave one!</p>";
        }
    }

    // Display the most recent review on page load
    displayReview();

    // Free quote section
    const estimateForm = document.getElementById("estimateForm");

    if (estimateForm) {
        estimateForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            // Get form data
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Store form data in localStorage
            const estimateData = {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                message: message
            };

            localStorage.setItem("estimateData", JSON.stringify(estimateData));

            alert("Estimate request saved! Thank you for your submission.");
            estimateForm.reset(); // Reset form fields after submission
        });
    }
});


// Hamburger menu
document.getElementById("hamburger-btn").addEventListener("click", function() {
        const nav = document.querySelector("nav");
        nav.classList.toggle("active");
});



