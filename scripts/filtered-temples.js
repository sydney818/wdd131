const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

const mainnav = document.querySelector("nav");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
      templeName: "Bountiful Utah",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 104000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-1059079-wallpaper.jpg"
    },

    {
      templeName: "Belém Brazil",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 28675,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior2.jpg"
    },

    {
      templeName: "Salt Lake Utah",
      location: "Salt Lake City, Utah",
      dedicated: "1983, April, 6",
      area: 253000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },

];

function displayTemples(filteredTemples) {
  const container = document.getElementById("temple-container");
  container.innerHTML = ""; // Clear existing content
  console.log("Filtered Temples:", filteredTemples); // Debugging log

  filteredTemples.forEach((temple) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedication = document.createElement("p");
    dedication.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = "lazy";

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);

    container.appendChild(card);
  });
}

// Filter Functions
function filterTemples(filterType) {
  let filteredTemples = [];

  switch (filterType) {
    case "old":
      filteredTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]); // Extract year
        return year < 1900;
      });
      break;

    case "new":
      filteredTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
      });
      break;

    case "large":
      filteredTemples = temples.filter((temple) => temple.area > 90000);
      break;

    case "small":
      filteredTemples = temples.filter((temple) => temple.area < 10000);
      break;

    case "home":
    default:
      filteredTemples = temples; // Show all
      break;
  }

  displayTemples(filteredTemples);
}

// Event Listeners for Navigation
document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples); // Display all temples on page load

  document.getElementById("home").addEventListener("click", () => filterTemples("home"));
  document.getElementById("old").addEventListener("click", () => filterTemples("old"));
  document.getElementById("new").addEventListener("click", () => filterTemples("new"));
  document.getElementById("large").addEventListener("click", () => filterTemples("large"));
  document.getElementById("small").addEventListener("click", () => filterTemples("small"));
});
