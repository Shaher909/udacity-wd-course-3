/* Global Variables */
let apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "54e0ec609b34d950268ee4f593e312fe";

/* API call structure
 https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
 */

// Create a new date instance dynamically with JS
let d = new Date();
//let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
let newDate = d.toLocaleDateString();
console.log(newDate);

// Event listener to generate button
const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", performAction);

// Function called by event listener and call the getWeatherData, country is not an existing field when it's empty US is used.
function performAction(e) {
  const userZipCode = document.getElementById("zip").value;
  const userFeeling = document.getElementById("feelings").value;

  getWeatherData(userZipCode, "", apiBaseUrl)
  .then(function(data){
  //calling post data function
  postData('/newRecord', {weatherTitle: data.weather[0].main, weatherDescription: data.weather[0].description, tempreture: data.main.temp, date: newDate, feeling: userFeeling })
  })
  
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

//post data function
const postData = async (url, dataRecord) => {

  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataRecord),
  });
  
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  }catch(error){
    console.log("Error", error);
  }
}