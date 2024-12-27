/* Global Variables */
let apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "54e0ec609b34d950268ee4f593e312fe";

/* API call structure
 https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
 */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Event listener to generate button
const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", performAction);

// Function called by event listener and call the getWeatherData, country is not an existing field when it's empty US is used.
function performAction(e) {
  const userZipCode = document.getElementById("zip").value;
  getWeatherData(userZipCode, "", apiBaseUrl);
}

//async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
const getWeatherData = async (zipCode, countryCode, url) => {
  const res = await fetch(
    `${url}?zip=${zipCode},${countryCode}&appid=${apiKey}`
  );
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error: API connection failed, additional information:", error);
  }
};
