//update footer year and modified date
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

//Wind chill
function calculateWindChill(temp, windSpeed) {
    return(
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}

function updateWindChill() {
    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('windSpeed').textContent);

    let windChill = "N/A";

    if (temperature <= 50 && windSpeed > 3) {
        windChill = calculateWindChill(temperature, windSpeed) + " °F";
    }

    document.getElementById('windChill').textContent = windChill;
}

// Run on page load
updateWindChill();