// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use the built-in middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

// POST request to add incoming data to `projectData`
app.post("/add", function (req, res) {
  const { temperature, date, userResponse } = req.body;

  // Check if all required fields are present and provide an error if not
  if (!temperature || !date || !userResponse) {
    return res.status(400).send("Missing required fields");
  }

  projectData = { temperature, date, userResponse };
  res.send("POST received");
});

// Post request routes
app.post('/newRecord', addNewRecord)

function addNewRecord(req, res){
  
  newRecord = {
    weatherTitle: req.body.weatherTitle,
    weatherDescription: req.body.weatherDescription,
    tempreture: req.body.tempreture,
    date: req.body.date,
    feeling: req.body.feeling
  }

  projectData = newRecord;
  console.log(projectData);
  res.send(projectData)
}

// GET request to return `projectData`from the server
app.get("/all", function (req, res) {
  res.send(projectData);
});
