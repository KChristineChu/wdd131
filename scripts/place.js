
let myDate = new Date();
let myYear = myDate.getFullYear();
document.getElementById("currently").textContent = myYear;

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

//Calculate wind chill with fahrenheit and wind speed
const temperature = 57;
const windSpeed = 5;

function calculateWindChill(temp, wind) {
    return (
        35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16).toFixed(1)
    );
}
function displayWindChill() {
    let windChillElement = document.getElementById("windchill");
    let windchill = "N/A";  //default value

    if (temperature <= 50 && windSpeed > 3) {
        windchill = calculateWindChill(temperature, windSpeed) + " °F";
    }

    windChillElement.textContent = windChill;
}
