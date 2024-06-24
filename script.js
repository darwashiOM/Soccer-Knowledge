import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

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

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// (async function () {
//   const url =
//     "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2024";
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": process.env.FOORBALL_API_KEY,
//       "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// })();


// let value = {
//   get: "fixtures",
//   parameters: {
//     league: "39",
//     season: "2024",
//   },
//   errors: [],
//   results: 380,
//   paging: {
//     current: 1,
//     total: 1,
//   },
//   response: [
//     {
//       fixture: {
//         id: 1208021,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-16T19:00:00+00:00",
//         timestamp: 1723834800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 1",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208022,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-17T11:30:00+00:00",
//         timestamp: 1723894200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 1",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208023,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-17T14:00:00+00:00",
//         timestamp: 1723903200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 1",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208024,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-17T14:00:00+00:00",
//         timestamp: 1723903200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 1",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208025,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-17T14:00:00+00:00",
//         timestamp: 1723903200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 1",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208026,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-17T14:00:00+00:00",
//         timestamp: 1723903200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 1",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208027,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-17T16:30:00+00:00",
//         timestamp: 1723912200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 1",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208028,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-18T13:00:00+00:00",
//         timestamp: 1723986000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 1",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208029,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-18T15:30:00+00:00",
//         timestamp: 1723995000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 1",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208030,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-19T19:00:00+00:00",
//         timestamp: 1724094000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 1",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208031,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-24T14:00:00+00:00",
//         timestamp: 1724508000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 2",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208032,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-24T14:00:00+00:00",
//         timestamp: 1724508000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 2",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208033,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-24T14:00:00+00:00",
//         timestamp: 1724508000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 2",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208034,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-24T14:00:00+00:00",
//         timestamp: 1724508000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 2",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208035,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-24T14:00:00+00:00",
//         timestamp: 1724508000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 2",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208036,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-24T14:00:00+00:00",
//         timestamp: 1724508000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 2",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208037,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-24T14:00:00+00:00",
//         timestamp: 1724508000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 2",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208038,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-24T14:00:00+00:00",
//         timestamp: 1724508000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 2",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208039,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-24T14:00:00+00:00",
//         timestamp: 1724508000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 2",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208040,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-24T14:00:00+00:00",
//         timestamp: 1724508000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 2",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208041,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-31T14:00:00+00:00",
//         timestamp: 1725112800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 3",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208042,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-31T14:00:00+00:00",
//         timestamp: 1725112800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 3",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208043,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-31T14:00:00+00:00",
//         timestamp: 1725112800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 3",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208044,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-31T14:00:00+00:00",
//         timestamp: 1725112800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 3",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208045,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-31T14:00:00+00:00",
//         timestamp: 1725112800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 3",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208046,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-31T14:00:00+00:00",
//         timestamp: 1725112800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 3",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208047,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-31T14:00:00+00:00",
//         timestamp: 1725112800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 3",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208048,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-31T14:00:00+00:00",
//         timestamp: 1725112800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 3",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208049,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-31T14:00:00+00:00",
//         timestamp: 1725112800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 3",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208050,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-08-31T14:00:00+00:00",
//         timestamp: 1725112800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 3",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208051,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-14T14:00:00+00:00",
//         timestamp: 1726322400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 4",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208052,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-14T14:00:00+00:00",
//         timestamp: 1726322400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 4",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208053,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-14T14:00:00+00:00",
//         timestamp: 1726322400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 4",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208054,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-14T14:00:00+00:00",
//         timestamp: 1726322400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 4",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208055,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-14T14:00:00+00:00",
//         timestamp: 1726322400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 4",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208056,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-14T14:00:00+00:00",
//         timestamp: 1726322400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 4",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208057,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-14T14:00:00+00:00",
//         timestamp: 1726322400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 4",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208058,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-14T14:00:00+00:00",
//         timestamp: 1726322400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 4",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208059,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-14T14:00:00+00:00",
//         timestamp: 1726322400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 4",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208060,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-14T14:00:00+00:00",
//         timestamp: 1726322400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 4",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208061,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-21T14:00:00+00:00",
//         timestamp: 1726927200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 5",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208062,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-21T14:00:00+00:00",
//         timestamp: 1726927200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 5",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208063,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-21T14:00:00+00:00",
//         timestamp: 1726927200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 5",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208064,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-21T14:00:00+00:00",
//         timestamp: 1726927200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 5",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208065,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-21T14:00:00+00:00",
//         timestamp: 1726927200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 5",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208066,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-21T14:00:00+00:00",
//         timestamp: 1726927200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 5",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208067,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-21T14:00:00+00:00",
//         timestamp: 1726927200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 5",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208068,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-21T14:00:00+00:00",
//         timestamp: 1726927200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 5",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208069,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-21T14:00:00+00:00",
//         timestamp: 1726927200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 5",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208070,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-21T14:00:00+00:00",
//         timestamp: 1726927200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 5",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208071,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-28T14:00:00+00:00",
//         timestamp: 1727532000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 6",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208072,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-28T14:00:00+00:00",
//         timestamp: 1727532000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 6",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208073,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-28T14:00:00+00:00",
//         timestamp: 1727532000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 6",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208074,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-28T14:00:00+00:00",
//         timestamp: 1727532000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 6",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208075,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-28T14:00:00+00:00",
//         timestamp: 1727532000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 6",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208076,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-28T14:00:00+00:00",
//         timestamp: 1727532000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 6",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208077,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-28T14:00:00+00:00",
//         timestamp: 1727532000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 6",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208078,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-28T14:00:00+00:00",
//         timestamp: 1727532000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 6",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208079,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-28T14:00:00+00:00",
//         timestamp: 1727532000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 6",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208080,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-09-28T14:00:00+00:00",
//         timestamp: 1727532000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 6",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208081,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-05T14:00:00+00:00",
//         timestamp: 1728136800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 7",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208082,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-05T14:00:00+00:00",
//         timestamp: 1728136800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 7",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208083,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-05T14:00:00+00:00",
//         timestamp: 1728136800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 7",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208084,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-05T14:00:00+00:00",
//         timestamp: 1728136800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 7",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208085,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-05T14:00:00+00:00",
//         timestamp: 1728136800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 7",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208086,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-05T14:00:00+00:00",
//         timestamp: 1728136800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 7",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208087,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-05T14:00:00+00:00",
//         timestamp: 1728136800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 7",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208088,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-05T14:00:00+00:00",
//         timestamp: 1728136800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 7",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208089,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-05T14:00:00+00:00",
//         timestamp: 1728136800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 7",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208090,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-05T14:00:00+00:00",
//         timestamp: 1728136800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 7",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208091,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-19T14:00:00+00:00",
//         timestamp: 1729346400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 8",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208092,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-19T14:00:00+00:00",
//         timestamp: 1729346400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 8",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208093,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-19T14:00:00+00:00",
//         timestamp: 1729346400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 8",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208094,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-19T14:00:00+00:00",
//         timestamp: 1729346400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 8",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208095,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-19T14:00:00+00:00",
//         timestamp: 1729346400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 8",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208096,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-19T14:00:00+00:00",
//         timestamp: 1729346400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 8",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208097,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-19T14:00:00+00:00",
//         timestamp: 1729346400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 8",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208098,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-19T14:00:00+00:00",
//         timestamp: 1729346400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 8",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208099,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-19T14:00:00+00:00",
//         timestamp: 1729346400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 8",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208100,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-19T14:00:00+00:00",
//         timestamp: 1729346400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 8",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208103,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-26T14:00:00+00:00",
//         timestamp: 1729951200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 9",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208104,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-26T14:00:00+00:00",
//         timestamp: 1729951200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 9",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208105,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-26T14:00:00+00:00",
//         timestamp: 1729951200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 9",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208106,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-26T14:00:00+00:00",
//         timestamp: 1729951200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 9",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208107,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-26T14:00:00+00:00",
//         timestamp: 1729951200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 9",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208108,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-26T14:00:00+00:00",
//         timestamp: 1729951200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 9",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208109,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-26T14:00:00+00:00",
//         timestamp: 1729951200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 9",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208110,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-26T14:00:00+00:00",
//         timestamp: 1729951200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 9",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208111,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-26T14:00:00+00:00",
//         timestamp: 1729951200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 9",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208112,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-10-26T14:00:00+00:00",
//         timestamp: 1729951200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 9",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208113,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-02T15:00:00+00:00",
//         timestamp: 1730559600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 10",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208114,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-02T15:00:00+00:00",
//         timestamp: 1730559600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 10",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208115,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-02T15:00:00+00:00",
//         timestamp: 1730559600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 10",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208116,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-02T15:00:00+00:00",
//         timestamp: 1730559600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 10",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208117,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-02T15:00:00+00:00",
//         timestamp: 1730559600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 10",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208118,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-02T15:00:00+00:00",
//         timestamp: 1730559600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 10",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208119,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-02T15:00:00+00:00",
//         timestamp: 1730559600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 10",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208120,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-02T15:00:00+00:00",
//         timestamp: 1730559600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 10",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208121,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-02T15:00:00+00:00",
//         timestamp: 1730559600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 10",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208122,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-02T15:00:00+00:00",
//         timestamp: 1730559600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 10",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208123,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-09T15:00:00+00:00",
//         timestamp: 1731164400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 11",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208124,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-09T15:00:00+00:00",
//         timestamp: 1731164400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 11",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208125,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-09T15:00:00+00:00",
//         timestamp: 1731164400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 11",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208126,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-09T15:00:00+00:00",
//         timestamp: 1731164400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 11",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208127,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-09T15:00:00+00:00",
//         timestamp: 1731164400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 11",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208128,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-09T15:00:00+00:00",
//         timestamp: 1731164400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 11",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208129,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-09T15:00:00+00:00",
//         timestamp: 1731164400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 11",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208130,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-09T15:00:00+00:00",
//         timestamp: 1731164400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 11",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208131,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-09T15:00:00+00:00",
//         timestamp: 1731164400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 11",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208132,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-09T15:00:00+00:00",
//         timestamp: 1731164400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 11",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208133,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-23T15:00:00+00:00",
//         timestamp: 1732374000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 12",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208134,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-23T15:00:00+00:00",
//         timestamp: 1732374000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 12",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208135,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-23T15:00:00+00:00",
//         timestamp: 1732374000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 12",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208136,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-23T15:00:00+00:00",
//         timestamp: 1732374000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 12",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208137,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-23T15:00:00+00:00",
//         timestamp: 1732374000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 12",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208138,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-23T15:00:00+00:00",
//         timestamp: 1732374000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 12",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208139,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-23T15:00:00+00:00",
//         timestamp: 1732374000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 12",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208140,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-23T15:00:00+00:00",
//         timestamp: 1732374000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 12",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208141,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-23T15:00:00+00:00",
//         timestamp: 1732374000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 12",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208142,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-23T15:00:00+00:00",
//         timestamp: 1732374000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 12",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208143,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-30T15:00:00+00:00",
//         timestamp: 1732978800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 13",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208144,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-30T15:00:00+00:00",
//         timestamp: 1732978800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 13",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208145,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-30T15:00:00+00:00",
//         timestamp: 1732978800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 13",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208146,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-30T15:00:00+00:00",
//         timestamp: 1732978800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 13",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208147,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-30T15:00:00+00:00",
//         timestamp: 1732978800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 13",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208148,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-30T15:00:00+00:00",
//         timestamp: 1732978800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 13",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208149,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-30T15:00:00+00:00",
//         timestamp: 1732978800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 13",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208150,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-30T15:00:00+00:00",
//         timestamp: 1732978800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 13",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208151,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-30T15:00:00+00:00",
//         timestamp: 1732978800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 13",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208152,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-11-30T15:00:00+00:00",
//         timestamp: 1732978800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 13",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208153,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-03T19:45:00+00:00",
//         timestamp: 1733255100,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 14",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208154,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-03T19:45:00+00:00",
//         timestamp: 1733255100,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 14",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208155,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-03T19:45:00+00:00",
//         timestamp: 1733255100,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 14",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208156,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-03T19:45:00+00:00",
//         timestamp: 1733255100,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 14",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208157,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-03T19:45:00+00:00",
//         timestamp: 1733255100,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 14",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208158,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-03T19:45:00+00:00",
//         timestamp: 1733255100,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 14",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208159,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-03T19:45:00+00:00",
//         timestamp: 1733255100,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 14",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208160,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-04T19:45:00+00:00",
//         timestamp: 1733341500,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 14",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208161,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-04T19:45:00+00:00",
//         timestamp: 1733341500,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 14",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208162,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-04T19:45:00+00:00",
//         timestamp: 1733341500,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 14",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208163,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-07T15:00:00+00:00",
//         timestamp: 1733583600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 15",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208164,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-07T15:00:00+00:00",
//         timestamp: 1733583600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 15",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208165,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-07T15:00:00+00:00",
//         timestamp: 1733583600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 15",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208166,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-07T15:00:00+00:00",
//         timestamp: 1733583600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 15",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208167,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-07T15:00:00+00:00",
//         timestamp: 1733583600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 15",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208168,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-07T15:00:00+00:00",
//         timestamp: 1733583600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 15",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208169,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-07T15:00:00+00:00",
//         timestamp: 1733583600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 15",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208170,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-07T15:00:00+00:00",
//         timestamp: 1733583600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 15",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208171,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-07T15:00:00+00:00",
//         timestamp: 1733583600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 15",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208172,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-07T15:00:00+00:00",
//         timestamp: 1733583600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 15",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208173,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-14T15:00:00+00:00",
//         timestamp: 1734188400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 16",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208174,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-14T15:00:00+00:00",
//         timestamp: 1734188400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 16",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208175,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-14T15:00:00+00:00",
//         timestamp: 1734188400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 16",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208176,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-14T15:00:00+00:00",
//         timestamp: 1734188400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 16",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208177,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-14T15:00:00+00:00",
//         timestamp: 1734188400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 16",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208178,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-14T15:00:00+00:00",
//         timestamp: 1734188400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 16",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208179,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-14T15:00:00+00:00",
//         timestamp: 1734188400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 16",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208180,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-14T15:00:00+00:00",
//         timestamp: 1734188400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 16",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208181,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-14T15:00:00+00:00",
//         timestamp: 1734188400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 16",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208182,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-14T15:00:00+00:00",
//         timestamp: 1734188400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 16",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208183,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-21T15:00:00+00:00",
//         timestamp: 1734793200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 17",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208184,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-21T15:00:00+00:00",
//         timestamp: 1734793200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 17",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208185,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-21T15:00:00+00:00",
//         timestamp: 1734793200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 17",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208186,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-21T15:00:00+00:00",
//         timestamp: 1734793200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 17",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208187,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-21T15:00:00+00:00",
//         timestamp: 1734793200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 17",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208188,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-21T15:00:00+00:00",
//         timestamp: 1734793200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 17",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208189,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-21T15:00:00+00:00",
//         timestamp: 1734793200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 17",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208190,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-21T15:00:00+00:00",
//         timestamp: 1734793200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 17",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208191,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-21T15:00:00+00:00",
//         timestamp: 1734793200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 17",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208192,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-21T15:00:00+00:00",
//         timestamp: 1734793200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 17",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208193,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-26T15:00:00+00:00",
//         timestamp: 1735225200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 18",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208194,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-26T15:00:00+00:00",
//         timestamp: 1735225200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 18",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208195,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-26T15:00:00+00:00",
//         timestamp: 1735225200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 18",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208196,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-26T15:00:00+00:00",
//         timestamp: 1735225200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 18",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208197,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-26T15:00:00+00:00",
//         timestamp: 1735225200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 18",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208198,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-26T15:00:00+00:00",
//         timestamp: 1735225200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 18",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208199,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-26T15:00:00+00:00",
//         timestamp: 1735225200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 18",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208200,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-26T15:00:00+00:00",
//         timestamp: 1735225200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 18",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208201,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-26T15:00:00+00:00",
//         timestamp: 1735225200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 18",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208202,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-26T15:00:00+00:00",
//         timestamp: 1735225200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 18",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208203,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-29T15:00:00+00:00",
//         timestamp: 1735484400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 19",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208204,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-29T15:00:00+00:00",
//         timestamp: 1735484400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 19",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208205,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-29T15:00:00+00:00",
//         timestamp: 1735484400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 19",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208206,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-29T15:00:00+00:00",
//         timestamp: 1735484400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 19",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208207,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-29T15:00:00+00:00",
//         timestamp: 1735484400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 19",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208208,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-29T15:00:00+00:00",
//         timestamp: 1735484400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 19",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208209,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-29T15:00:00+00:00",
//         timestamp: 1735484400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 19",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208210,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-29T15:00:00+00:00",
//         timestamp: 1735484400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 19",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208211,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-29T15:00:00+00:00",
//         timestamp: 1735484400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 19",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208212,
//         referee: null,
//         timezone: "UTC",
//         date: "2024-12-29T15:00:00+00:00",
//         timestamp: 1735484400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 19",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208213,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-04T15:00:00+00:00",
//         timestamp: 1736002800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 20",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208214,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-04T15:00:00+00:00",
//         timestamp: 1736002800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 20",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208215,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-04T15:00:00+00:00",
//         timestamp: 1736002800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 20",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208216,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-04T15:00:00+00:00",
//         timestamp: 1736002800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 20",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208217,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-04T15:00:00+00:00",
//         timestamp: 1736002800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 20",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208218,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-04T15:00:00+00:00",
//         timestamp: 1736002800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 20",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208219,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-04T15:00:00+00:00",
//         timestamp: 1736002800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 20",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208220,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-04T15:00:00+00:00",
//         timestamp: 1736002800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 20",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208221,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-04T15:00:00+00:00",
//         timestamp: 1736002800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 20",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208222,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-04T15:00:00+00:00",
//         timestamp: 1736002800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 20",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208223,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-14T19:45:00+00:00",
//         timestamp: 1736883900,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 21",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208224,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-14T19:45:00+00:00",
//         timestamp: 1736883900,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 21",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208225,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-14T19:45:00+00:00",
//         timestamp: 1736883900,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 21",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208226,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-14T19:45:00+00:00",
//         timestamp: 1736883900,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 21",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208227,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-14T19:45:00+00:00",
//         timestamp: 1736883900,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 21",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208228,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-14T19:45:00+00:00",
//         timestamp: 1736883900,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 21",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208229,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-14T19:45:00+00:00",
//         timestamp: 1736883900,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 21",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208230,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-15T19:45:00+00:00",
//         timestamp: 1736970300,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 21",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208231,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-15T19:45:00+00:00",
//         timestamp: 1736970300,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 21",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208232,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-15T20:00:00+00:00",
//         timestamp: 1736971200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 21",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208233,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-18T15:00:00+00:00",
//         timestamp: 1737212400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 22",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208234,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-18T15:00:00+00:00",
//         timestamp: 1737212400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 22",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208235,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-18T15:00:00+00:00",
//         timestamp: 1737212400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 22",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208236,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-18T15:00:00+00:00",
//         timestamp: 1737212400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 22",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208237,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-18T15:00:00+00:00",
//         timestamp: 1737212400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 22",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208238,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-18T15:00:00+00:00",
//         timestamp: 1737212400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 22",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208239,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-18T15:00:00+00:00",
//         timestamp: 1737212400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 22",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208240,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-18T15:00:00+00:00",
//         timestamp: 1737212400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 22",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208241,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-18T15:00:00+00:00",
//         timestamp: 1737212400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 22",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208242,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-18T15:00:00+00:00",
//         timestamp: 1737212400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 22",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208243,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-25T15:00:00+00:00",
//         timestamp: 1737817200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 23",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208244,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-25T15:00:00+00:00",
//         timestamp: 1737817200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 23",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208245,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-25T15:00:00+00:00",
//         timestamp: 1737817200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 23",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208246,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-25T15:00:00+00:00",
//         timestamp: 1737817200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 23",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208247,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-25T15:00:00+00:00",
//         timestamp: 1737817200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 23",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208248,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-25T15:00:00+00:00",
//         timestamp: 1737817200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 23",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208249,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-25T15:00:00+00:00",
//         timestamp: 1737817200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 23",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208250,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-25T15:00:00+00:00",
//         timestamp: 1737817200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 23",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208251,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-25T15:00:00+00:00",
//         timestamp: 1737817200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 23",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208252,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-01-25T15:00:00+00:00",
//         timestamp: 1737817200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 23",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208253,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-01T15:00:00+00:00",
//         timestamp: 1738422000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 24",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208254,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-01T15:00:00+00:00",
//         timestamp: 1738422000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 24",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208255,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-01T15:00:00+00:00",
//         timestamp: 1738422000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 24",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208256,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-01T15:00:00+00:00",
//         timestamp: 1738422000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 24",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208257,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-01T15:00:00+00:00",
//         timestamp: 1738422000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 24",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208258,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-01T15:00:00+00:00",
//         timestamp: 1738422000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 24",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208259,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-01T15:00:00+00:00",
//         timestamp: 1738422000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 24",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208260,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-01T15:00:00+00:00",
//         timestamp: 1738422000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 24",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208261,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-01T15:00:00+00:00",
//         timestamp: 1738422000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 24",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208262,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-01T15:00:00+00:00",
//         timestamp: 1738422000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 24",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208263,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-15T15:00:00+00:00",
//         timestamp: 1739631600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 25",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208264,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-15T15:00:00+00:00",
//         timestamp: 1739631600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 25",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208265,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-15T15:00:00+00:00",
//         timestamp: 1739631600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 25",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208266,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-15T15:00:00+00:00",
//         timestamp: 1739631600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 25",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208267,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-15T15:00:00+00:00",
//         timestamp: 1739631600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 25",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208268,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-15T15:00:00+00:00",
//         timestamp: 1739631600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 25",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208269,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-15T15:00:00+00:00",
//         timestamp: 1739631600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 25",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208270,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-15T15:00:00+00:00",
//         timestamp: 1739631600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 25",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208271,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-15T15:00:00+00:00",
//         timestamp: 1739631600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 25",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208272,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-15T15:00:00+00:00",
//         timestamp: 1739631600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 25",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208273,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-22T15:00:00+00:00",
//         timestamp: 1740236400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 26",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208274,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-22T15:00:00+00:00",
//         timestamp: 1740236400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 26",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208275,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-22T15:00:00+00:00",
//         timestamp: 1740236400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 26",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208276,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-22T15:00:00+00:00",
//         timestamp: 1740236400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 26",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208277,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-22T15:00:00+00:00",
//         timestamp: 1740236400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 26",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208278,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-22T15:00:00+00:00",
//         timestamp: 1740236400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 26",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208279,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-22T15:00:00+00:00",
//         timestamp: 1740236400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 26",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208280,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-22T15:00:00+00:00",
//         timestamp: 1740236400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 26",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208281,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-22T15:00:00+00:00",
//         timestamp: 1740236400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 26",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208282,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-22T15:00:00+00:00",
//         timestamp: 1740236400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 26",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208283,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-25T19:45:00+00:00",
//         timestamp: 1740512700,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 27",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208284,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-25T19:45:00+00:00",
//         timestamp: 1740512700,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 27",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208285,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-25T19:45:00+00:00",
//         timestamp: 1740512700,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 27",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208286,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-25T19:45:00+00:00",
//         timestamp: 1740512700,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 27",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208287,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-25T19:45:00+00:00",
//         timestamp: 1740512700,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 27",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208288,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-25T19:45:00+00:00",
//         timestamp: 1740512700,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 27",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208289,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-25T20:00:00+00:00",
//         timestamp: 1740513600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 27",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208290,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-26T19:45:00+00:00",
//         timestamp: 1740599100,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 27",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208291,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-26T20:00:00+00:00",
//         timestamp: 1740600000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 27",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208292,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-02-26T20:00:00+00:00",
//         timestamp: 1740600000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 27",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208293,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-08T15:00:00+00:00",
//         timestamp: 1741446000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 28",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208294,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-08T15:00:00+00:00",
//         timestamp: 1741446000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 28",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208295,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-08T15:00:00+00:00",
//         timestamp: 1741446000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 28",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208296,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-08T15:00:00+00:00",
//         timestamp: 1741446000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 28",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208297,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-08T15:00:00+00:00",
//         timestamp: 1741446000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 28",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208298,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-08T15:00:00+00:00",
//         timestamp: 1741446000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 28",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208299,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-08T15:00:00+00:00",
//         timestamp: 1741446000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 28",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208300,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-08T15:00:00+00:00",
//         timestamp: 1741446000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 28",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208301,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-08T15:00:00+00:00",
//         timestamp: 1741446000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 28",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208302,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-08T15:00:00+00:00",
//         timestamp: 1741446000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 28",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208303,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-15T15:00:00+00:00",
//         timestamp: 1742050800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 29",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208304,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-15T15:00:00+00:00",
//         timestamp: 1742050800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 29",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208305,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-15T15:00:00+00:00",
//         timestamp: 1742050800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 29",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208306,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-15T15:00:00+00:00",
//         timestamp: 1742050800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 29",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208307,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-15T15:00:00+00:00",
//         timestamp: 1742050800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 29",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208308,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-15T15:00:00+00:00",
//         timestamp: 1742050800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 29",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208309,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-15T15:00:00+00:00",
//         timestamp: 1742050800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 29",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208310,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-15T15:00:00+00:00",
//         timestamp: 1742050800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 29",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208311,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-15T15:00:00+00:00",
//         timestamp: 1742050800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 29",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208312,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-03-15T15:00:00+00:00",
//         timestamp: 1742050800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 29",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208313,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-01T18:45:00+00:00",
//         timestamp: 1743533100,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 30",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208314,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-01T18:45:00+00:00",
//         timestamp: 1743533100,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 30",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208315,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-01T18:45:00+00:00",
//         timestamp: 1743533100,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 30",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208316,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-01T18:45:00+00:00",
//         timestamp: 1743533100,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 30",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208317,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-01T18:45:00+00:00",
//         timestamp: 1743533100,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 30",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208318,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-02T18:45:00+00:00",
//         timestamp: 1743619500,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 30",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208319,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-02T18:45:00+00:00",
//         timestamp: 1743619500,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 30",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208320,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-02T18:45:00+00:00",
//         timestamp: 1743619500,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 30",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208321,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-02T18:45:00+00:00",
//         timestamp: 1743619500,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 30",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208322,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-02T19:00:00+00:00",
//         timestamp: 1743620400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 30",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208323,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-05T14:00:00+00:00",
//         timestamp: 1743861600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 31",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208324,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-05T14:00:00+00:00",
//         timestamp: 1743861600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 31",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208325,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-05T14:00:00+00:00",
//         timestamp: 1743861600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 31",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208326,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-05T14:00:00+00:00",
//         timestamp: 1743861600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 31",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208327,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-05T14:00:00+00:00",
//         timestamp: 1743861600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 31",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208328,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-05T14:00:00+00:00",
//         timestamp: 1743861600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 31",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208329,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-05T14:00:00+00:00",
//         timestamp: 1743861600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 31",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208330,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-05T14:00:00+00:00",
//         timestamp: 1743861600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 31",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208331,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-05T14:00:00+00:00",
//         timestamp: 1743861600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 31",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208332,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-05T14:00:00+00:00",
//         timestamp: 1743861600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 31",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208333,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-12T14:00:00+00:00",
//         timestamp: 1744466400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 32",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208334,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-12T14:00:00+00:00",
//         timestamp: 1744466400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 32",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208335,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-12T14:00:00+00:00",
//         timestamp: 1744466400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 32",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208336,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-12T14:00:00+00:00",
//         timestamp: 1744466400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 32",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208337,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-12T14:00:00+00:00",
//         timestamp: 1744466400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 32",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208338,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-12T14:00:00+00:00",
//         timestamp: 1744466400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 32",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208339,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-12T14:00:00+00:00",
//         timestamp: 1744466400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 32",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208340,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-12T14:00:00+00:00",
//         timestamp: 1744466400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 32",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208341,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-12T14:00:00+00:00",
//         timestamp: 1744466400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 32",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208342,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-12T14:00:00+00:00",
//         timestamp: 1744466400,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 32",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208343,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-19T14:00:00+00:00",
//         timestamp: 1745071200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 33",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208344,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-19T14:00:00+00:00",
//         timestamp: 1745071200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 33",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208345,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-19T14:00:00+00:00",
//         timestamp: 1745071200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 33",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208346,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-19T14:00:00+00:00",
//         timestamp: 1745071200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 33",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208347,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-19T14:00:00+00:00",
//         timestamp: 1745071200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 33",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208348,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-19T14:00:00+00:00",
//         timestamp: 1745071200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 33",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208349,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-19T14:00:00+00:00",
//         timestamp: 1745071200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 33",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208350,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-19T14:00:00+00:00",
//         timestamp: 1745071200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 33",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208351,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-19T14:00:00+00:00",
//         timestamp: 1745071200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 33",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208352,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-19T14:00:00+00:00",
//         timestamp: 1745071200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 33",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208353,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-26T14:00:00+00:00",
//         timestamp: 1745676000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 34",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208354,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-26T14:00:00+00:00",
//         timestamp: 1745676000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 34",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208355,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-26T14:00:00+00:00",
//         timestamp: 1745676000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 34",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208356,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-26T14:00:00+00:00",
//         timestamp: 1745676000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 34",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208357,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-26T14:00:00+00:00",
//         timestamp: 1745676000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 34",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208358,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-26T14:00:00+00:00",
//         timestamp: 1745676000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 34",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208359,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-26T14:00:00+00:00",
//         timestamp: 1745676000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 34",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208360,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-26T14:00:00+00:00",
//         timestamp: 1745676000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 34",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208361,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-26T14:00:00+00:00",
//         timestamp: 1745676000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 34",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208362,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-04-26T14:00:00+00:00",
//         timestamp: 1745676000,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 34",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208363,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-03T14:00:00+00:00",
//         timestamp: 1746280800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 35",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208364,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-03T14:00:00+00:00",
//         timestamp: 1746280800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 35",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208365,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-03T14:00:00+00:00",
//         timestamp: 1746280800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 35",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208366,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-03T14:00:00+00:00",
//         timestamp: 1746280800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 35",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208367,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-03T14:00:00+00:00",
//         timestamp: 1746280800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 35",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208368,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-03T14:00:00+00:00",
//         timestamp: 1746280800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 35",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208369,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-03T14:00:00+00:00",
//         timestamp: 1746280800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 35",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208370,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-03T14:00:00+00:00",
//         timestamp: 1746280800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 35",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208371,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-03T14:00:00+00:00",
//         timestamp: 1746280800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 35",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208372,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-03T14:00:00+00:00",
//         timestamp: 1746280800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 35",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208373,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-10T14:00:00+00:00",
//         timestamp: 1746885600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 36",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208374,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-10T14:00:00+00:00",
//         timestamp: 1746885600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 36",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208375,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-10T14:00:00+00:00",
//         timestamp: 1746885600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 36",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208376,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-10T14:00:00+00:00",
//         timestamp: 1746885600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 36",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208377,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-10T14:00:00+00:00",
//         timestamp: 1746885600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 36",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208378,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-10T14:00:00+00:00",
//         timestamp: 1746885600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 36",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208379,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-10T14:00:00+00:00",
//         timestamp: 1746885600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 36",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208380,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-10T14:00:00+00:00",
//         timestamp: 1746885600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 36",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208381,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-10T14:00:00+00:00",
//         timestamp: 1746885600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 36",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208382,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-10T14:00:00+00:00",
//         timestamp: 1746885600,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 36",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208383,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-18T14:00:00+00:00",
//         timestamp: 1747576800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 494,
//           name: "Emirates Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 37",
//       },
//       teams: {
//         home: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//         away: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208384,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-18T14:00:00+00:00",
//         timestamp: 1747576800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 495,
//           name: "Villa Park",
//           city: "Birmingham",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 37",
//       },
//       teams: {
//         home: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//         away: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208385,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-18T14:00:00+00:00",
//         timestamp: 1747576800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 10503,
//           name: "Gtech Community Stadium",
//           city: "Brentford, Middlesex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 37",
//       },
//       teams: {
//         home: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//         away: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208386,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-18T14:00:00+00:00",
//         timestamp: 1747576800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: null,
//           name: "American Express Stadium",
//           city: "Falmer, East Sussex",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 37",
//       },
//       teams: {
//         home: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//         away: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208387,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-18T14:00:00+00:00",
//         timestamp: 1747576800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 519,
//           name: "Stamford Bridge",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 37",
//       },
//       teams: {
//         home: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//         away: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208388,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-18T14:00:00+00:00",
//         timestamp: 1747576800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 525,
//           name: "Selhurst Park",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 37",
//       },
//       teams: {
//         home: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//         away: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208389,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-18T14:00:00+00:00",
//         timestamp: 1747576800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 8560,
//           name: "Goodison Park",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 37",
//       },
//       teams: {
//         home: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//         away: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208390,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-18T14:00:00+00:00",
//         timestamp: 1747576800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 547,
//           name: "King Power Stadium",
//           city: "Leicester, Leicestershire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 37",
//       },
//       teams: {
//         home: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//         away: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208391,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-18T14:00:00+00:00",
//         timestamp: 1747576800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 555,
//           name: "Etihad Stadium",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 37",
//       },
//       teams: {
//         home: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//         away: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208392,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-18T14:00:00+00:00",
//         timestamp: 1747576800,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 598,
//           name: "London Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 37",
//       },
//       teams: {
//         home: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//         away: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208393,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-25T15:00:00+00:00",
//         timestamp: 1748185200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 504,
//           name: "Vitality Stadium",
//           city: "Bournemouth, Dorset",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 38",
//       },
//       teams: {
//         home: {
//           id: 35,
//           name: "Bournemouth",
//           logo: "https://media.api-sports.io/football/teams/35.png",
//           winner: null,
//         },
//         away: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208394,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-25T15:00:00+00:00",
//         timestamp: 1748185200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 535,
//           name: "Craven Cottage",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 38",
//       },
//       teams: {
//         home: {
//           id: 36,
//           name: "Fulham",
//           logo: "https://media.api-sports.io/football/teams/36.png",
//           winner: null,
//         },
//         away: {
//           id: 50,
//           name: "Manchester City",
//           logo: "https://media.api-sports.io/football/teams/50.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208395,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-25T15:00:00+00:00",
//         timestamp: 1748185200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 545,
//           name: "Portman Road",
//           city: "Ipswich, Suffolk",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 38",
//       },
//       teams: {
//         home: {
//           id: 57,
//           name: "Ipswich",
//           logo: "https://media.api-sports.io/football/teams/57.png",
//           winner: null,
//         },
//         away: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208396,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-25T15:00:00+00:00",
//         timestamp: 1748185200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 550,
//           name: "Anfield",
//           city: "Liverpool",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 38",
//       },
//       teams: {
//         home: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//           winner: null,
//         },
//         away: {
//           id: 52,
//           name: "Crystal Palace",
//           logo: "https://media.api-sports.io/football/teams/52.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208397,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-25T15:00:00+00:00",
//         timestamp: 1748185200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 556,
//           name: "Old Trafford",
//           city: "Manchester",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 38",
//       },
//       teams: {
//         home: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//           winner: null,
//         },
//         away: {
//           id: 66,
//           name: "Aston Villa",
//           logo: "https://media.api-sports.io/football/teams/66.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208398,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-25T15:00:00+00:00",
//         timestamp: 1748185200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 562,
//           name: "St. James' Park",
//           city: "Newcastle upon Tyne",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 38",
//       },
//       teams: {
//         home: {
//           id: 34,
//           name: "Newcastle",
//           logo: "https://media.api-sports.io/football/teams/34.png",
//           winner: null,
//         },
//         away: {
//           id: 45,
//           name: "Everton",
//           logo: "https://media.api-sports.io/football/teams/45.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208399,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-25T15:00:00+00:00",
//         timestamp: 1748185200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 566,
//           name: "The City Ground",
//           city: "Nottingham, Nottinghamshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 38",
//       },
//       teams: {
//         home: {
//           id: 65,
//           name: "Nottingham Forest",
//           logo: "https://media.api-sports.io/football/teams/65.png",
//           winner: null,
//         },
//         away: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208400,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-25T15:00:00+00:00",
//         timestamp: 1748185200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 585,
//           name: "St. Mary's Stadium",
//           city: "Southampton, Hampshire",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 38",
//       },
//       teams: {
//         home: {
//           id: 41,
//           name: "Southampton",
//           logo: "https://media.api-sports.io/football/teams/41.png",
//           winner: null,
//         },
//         away: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208401,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-25T15:00:00+00:00",
//         timestamp: 1748185200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 593,
//           name: "Tottenham Hotspur Stadium",
//           city: "London",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 38",
//       },
//       teams: {
//         home: {
//           id: 47,
//           name: "Tottenham",
//           logo: "https://media.api-sports.io/football/teams/47.png",
//           winner: null,
//         },
//         away: {
//           id: 51,
//           name: "Brighton",
//           logo: "https://media.api-sports.io/football/teams/51.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//     {
//       fixture: {
//         id: 1208402,
//         referee: null,
//         timezone: "UTC",
//         date: "2025-05-25T15:00:00+00:00",
//         timestamp: 1748185200,
//         periods: {
//           first: null,
//           second: null,
//         },
//         venue: {
//           id: 600,
//           name: "Molineux Stadium",
//           city: "Wolverhampton, West Midlands",
//         },
//         status: {
//           long: "Not Started",
//           short: "NS",
//           elapsed: null,
//         },
//       },
//       league: {
//         id: 39,
//         name: "Premier League",
//         country: "England",
//         logo: "https://media.api-sports.io/football/leagues/39.png",
//         flag: "https://media.api-sports.io/flags/gb.svg",
//         season: 2024,
//         round: "Regular Season - 38",
//       },
//       teams: {
//         home: {
//           id: 39,
//           name: "Wolves",
//           logo: "https://media.api-sports.io/football/teams/39.png",
//           winner: null,
//         },
//         away: {
//           id: 55,
//           name: "Brentford",
//           logo: "https://media.api-sports.io/football/teams/55.png",
//           winner: null,
//         },
//       },
//       goals: {
//         home: null,
//         away: null,
//       },
//       score: {
//         halftime: {
//           home: null,
//           away: null,
//         },
//         fulltime: {
//           home: null,
//           away: null,
//         },
//         extratime: {
//           home: null,
//           away: null,
//         },
//         penalty: {
//           home: null,
//           away: null,
//         },
//       },
//     },
//   ],
// };
//console.log(value);
