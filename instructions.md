# Instructions summary

For this project, most code would be written at:

- server.js
- website/app.js

## Suggested steps

- Setup env -> install: Node, Express and CORS -> OK
- Setup server and ensure it's running -> OK
- Create a GET request to return `projectData`from the server -> OK
- Create a POST request to add incoming data to `projectData` (post should expect: temp, date, user response)
- Acquire API key from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your `app.js` code.
- Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
- Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
- Inside that callback function call your async GET request with the parameters:
  -- base url
  -- user entered zip code (see input in html with id zip)
  -- personal API key
- After your successful retrieval of the weather data, you will need to chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to your app.
  -- You will need to write another async function to make this POST request.
  -- The function should receive a path and a data object.
  -- The data object should include: temp, date, user response.
  -- Remember, you can access the value of DOM elements by selecting them in your JS code.
- Finally, chain another Promise that updates the UI dynamically Write another async function that is called after the completed POST request. This function should retrieve data from our app, select the necessary elements on the DOM (index.html), and then update their necessary values to reflect the dynamic values for: temp,date, user input.

## Notes:

The body-parser has been deprecated in the latest version of Express.js (version 4.16.0 and above), the built-in middleware express.json() and express.urlencoded() are used to parse incoming request bodies. These middleware functions are based on the body-parser module and provide similar functionality.

Just like the body-parser module, express.json() and express.urlencoded() also have options you can pass to customize their behavior. You can refer to the Express.js documentation(opens in a new tab) for more information on these options.
