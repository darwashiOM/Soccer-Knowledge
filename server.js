import dotenv from "dotenv";
import express from "express";
import path from "path";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import fs from "fs";

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route for the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// File to store match data
const DATA_FILE = path.join(__dirname, "matches.json");

// Function to fetch data from API and save to file
const fetchAndSaveData = async () => {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2023`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.FOORBALL_API_KEY,
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const apiResponse = await fetch(url, options);
    const apiData = await apiResponse.json();
    fs.writeFileSync(DATA_FILE, JSON.stringify(apiData.response));
    console.log("Data fetched and saved");
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

// Initialize data fetching
fetchAndSaveData();

//getting the games data from the API
app.get("/data", async (req, res) => {
  let matchesFrom = parseInt(req.query.matchesFrom) || 0;
  let matchesTo = parseInt(req.query.matchesTo) || 5;

  if (fs.existsSync(DATA_FILE)) {
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    const newValue = data.slice(matchesFrom, matchesTo);
    res.json(newValue);
  } else {
    fetchAndSaveData()
      .then(() => {
        const data = JSON.parse(fs.readFileSync(DATA_FILE));
        const newValue = data.slice(matchesFrom, matchesTo);
        res.json(newValue);
      })
      .catch((err) => {
        res.status(500).send("Failed to fetch data");
      });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
