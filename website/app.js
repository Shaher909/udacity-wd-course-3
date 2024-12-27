/* Global Variables */
let apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "54e0ec609b34d950268ee4f593e312fe";

/* API call structure
 https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
 */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

//async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.

const getWeatherData = async (zipCode, countryCode) => {
  const res = await fetch(
    `${apiBaseUrl}?zip=${zipCode},${countryCode}&appid=${apiKey}`
  );
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error: API connection failed, additional information:", error);
  }
};
