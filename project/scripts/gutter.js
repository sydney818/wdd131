const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;



document.getElementById("hamburger-btn").addEventListener("click", function() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
});



const testimonials = [
    { name: "John Doe", text: "Excellent service and great quality gutters!", rating: 5 },
    { name: "Jane Smith", text: "Professional and quick installation.", rating: 4 },
    { name: "Mike Johnson", text: "Highly recommend UA Gutter Solutions!", rating: 5 },
    { name: "Sarah Lee", text: "Affordable prices and friendly staff.", rating: 4 },
    { name: "Chris Brown", text: "Good experience overall.", rating: 3 },
    { name: "Emily Davis", text: "The team was friendly and efficient.", rating: 5 },
    { name: "Robert Wilson", text: "Great customer service and durable materials.", rating: 4 },
    { name: "Olivia Taylor", text: "Smooth process from start to finish.", rating: 5 },
    { name: "David Clark", text: "Prompt responses and clean work.", rating: 4 },
    { name: "Sophia Martinez", text: "Fair pricing and timely completion.", rating: 3 },
    { name: "Liam Thomas", text: "The gutters have made such a difference!", rating: 5 },
    { name: "Isabella Anderson", text: "Highly satisfied with the work done.", rating: 4 },
    { name: "Mason White", text: "Reliable and skilled team.", rating: 5 },
    { name: "Ava Harris", text: "They exceeded my expectations.", rating: 4 },
    { name: "Ethan Lewis", text: "No more water issues thanks to them.", rating: 5 }
];


function displayTestimonials(ratingFilter = "all") {
    console.log("Display testimonials called with filter:", ratingFilter); // Debugging line
    const testimonialsList = document.getElementById("testimonials-list");
    testimonialsList.innerHTML = ''; // Clear current list before updating

    const filteredTestimonials = testimonials.filter(testimonial => {
        if (ratingFilter === "all") {
            return true; // Show all testimonials
        }
        return testimonial.rating === parseInt(ratingFilter); // Filter 
    });

    filteredTestimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement("div");
        testimonialDiv.classList.add("testimonial");

        const nameElement = document.createElement("h3");
        nameElement.textContent = testimonial.name;

        const textElement = document.createElement("p");
        textElement.textContent = testimonial.text;

        const ratingElement = document.createElement("p");
        ratingElement.textContent = `Rating: ${testimonial.rating} stars`;

        testimonialDiv.appendChild(nameElement);
        testimonialDiv.appendChild(textElement);
        testimonialDiv.appendChild(ratingElement);

        testimonialsList.appendChild(testimonialDiv);
    });
}

document.getElementById("filter-rating").addEventListener("change", function() {
    console.log("Filter changed to:", this.value); // Debugging line
    displayTestimonials(this.value);
});
