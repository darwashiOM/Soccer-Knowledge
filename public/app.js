// let myData = {};
// document.addEventListener("DOMContentLoaded", function () {
//   fetch("/data")
//     .then((response) => response.json())
//     .then((data) => {
//       myData = data; // Log the data for debugging purposes
//       // You can also update the DOM here based on the data
//       console.log(myData);
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });

let renderedData = new Map();

let firstList = [
  {
    fixture: {
      id: 1035037,
      referee: "C. Pawson",
      timezone: "UTC",
      date: "2023-08-11T19:00:00+00:00",
      timestamp: 1691780400,
      periods: {
        first: 1691780400,
        second: 1691784000,
      },
      venue: {
        id: 512,
        name: "Turf Moor",
        city: "Burnley",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 1",
    },
    teams: {
      home: {
        id: 44,
        name: "Burnley",
        logo: "https://media.api-sports.io/football/teams/44.png",
        winner: false,
      },
      away: {
        id: 50,
        name: "Manchester City",
        logo: "https://media.api-sports.io/football/teams/50.png",
        winner: true,
      },
    },
    goals: {
      home: 0,
      away: 3,
    },
    score: {
      halftime: {
        home: 0,
        away: 2,
      },
      fulltime: {
        home: 0,
        away: 3,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035038,
      referee: "M. Oliver",
      timezone: "UTC",
      date: "2023-08-12T11:30:00+00:00",
      timestamp: 1691839800,
      periods: {
        first: 1691839800,
        second: 1691843400,
      },
      venue: {
        id: 494,
        name: "Emirates Stadium",
        city: "London",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 1",
    },
    teams: {
      home: {
        id: 42,
        name: "Arsenal",
        logo: "https://media.api-sports.io/football/teams/42.png",
        winner: true,
      },
      away: {
        id: 65,
        name: "Nottingham Forest",
        logo: "https://media.api-sports.io/football/teams/65.png",
        winner: false,
      },
    },
    goals: {
      home: 2,
      away: 1,
    },
    score: {
      halftime: {
        home: 2,
        away: 0,
      },
      fulltime: {
        home: 2,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035039,
      referee: "P. Bankes",
      timezone: "UTC",
      date: "2023-08-12T14:00:00+00:00",
      timestamp: 1691848800,
      periods: {
        first: 1691848800,
        second: 1691852400,
      },
      venue: {
        id: 504,
        name: "Vitality Stadium",
        city: "Bournemouth, Dorset",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 1",
    },
    teams: {
      home: {
        id: 35,
        name: "Bournemouth",
        logo: "https://media.api-sports.io/football/teams/35.png",
        winner: null,
      },
      away: {
        id: 48,
        name: "West Ham",
        logo: "https://media.api-sports.io/football/teams/48.png",
        winner: null,
      },
    },
    goals: {
      home: 1,
      away: 1,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 1,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035040,
      referee: "D. Coote",
      timezone: "UTC",
      date: "2023-08-12T14:00:00+00:00",
      timestamp: 1691848800,
      periods: {
        first: 1691848800,
        second: 1691852400,
      },
      venue: {
        id: 508,
        name: "The American Express Community Stadium",
        city: "Falmer, East Sussex",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 1",
    },
    teams: {
      home: {
        id: 51,
        name: "Brighton",
        logo: "https://media.api-sports.io/football/teams/51.png",
        winner: true,
      },
      away: {
        id: 1359,
        name: "Luton",
        logo: "https://media.api-sports.io/football/teams/1359.png",
        winner: false,
      },
    },
    goals: {
      home: 4,
      away: 1,
    },
    score: {
      halftime: {
        home: 1,
        away: 0,
      },
      fulltime: {
        home: 4,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035041,
      referee: "S. Attwell",
      timezone: "UTC",
      date: "2023-08-12T14:00:00+00:00",
      timestamp: 1691848800,
      periods: {
        first: 1691848800,
        second: 1691852400,
      },
      venue: {
        id: 8560,
        name: "Goodison Park",
        city: "Liverpool",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 1",
    },
    teams: {
      home: {
        id: 45,
        name: "Everton",
        logo: "https://media.api-sports.io/football/teams/45.png",
        winner: false,
      },
      away: {
        id: 36,
        name: "Fulham",
        logo: "https://media.api-sports.io/football/teams/36.png",
        winner: true,
      },
    },
    goals: {
      home: 0,
      away: 1,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 0,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035042,
      referee: "J. Brooks",
      timezone: "UTC",
      date: "2023-08-12T14:00:00+00:00",
      timestamp: 1691848800,
      periods: {
        first: 1691848800,
        second: 1691852400,
      },
      venue: {
        id: 581,
        name: "Bramall Lane",
        city: "Sheffield",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 1",
    },
    teams: {
      home: {
        id: 62,
        name: "Sheffield Utd",
        logo: "https://media.api-sports.io/football/teams/62.png",
        winner: false,
      },
      away: {
        id: 52,
        name: "Crystal Palace",
        logo: "https://media.api-sports.io/football/teams/52.png",
        winner: true,
      },
    },
    goals: {
      home: 0,
      away: 1,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 0,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035043,
      referee: "A. Madley",
      timezone: "UTC",
      date: "2023-08-12T16:30:00+00:00",
      timestamp: 1691857800,
      periods: {
        first: 1691857800,
        second: 1691861400,
      },
      venue: {
        id: 562,
        name: "St. James' Park",
        city: "Newcastle upon Tyne",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 1",
    },
    teams: {
      home: {
        id: 34,
        name: "Newcastle",
        logo: "https://media.api-sports.io/football/teams/34.png",
        winner: true,
      },
      away: {
        id: 66,
        name: "Aston Villa",
        logo: "https://media.api-sports.io/football/teams/66.png",
        winner: false,
      },
    },
    goals: {
      home: 5,
      away: 1,
    },
    score: {
      halftime: {
        home: 2,
        away: 1,
      },
      fulltime: {
        home: 5,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035044,
      referee: "R. Jones",
      timezone: "UTC",
      date: "2023-08-13T13:00:00+00:00",
      timestamp: 1691931600,
      periods: {
        first: 1691931600,
        second: 1691935200,
      },
      venue: {
        id: 10503,
        name: "Gtech Community Stadium",
        city: "Brentford, Middlesex",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 1",
    },
    teams: {
      home: {
        id: 55,
        name: "Brentford",
        logo: "https://media.api-sports.io/football/teams/55.png",
        winner: null,
      },
      away: {
        id: 47,
        name: "Tottenham",
        logo: "https://media.api-sports.io/football/teams/47.png",
        winner: null,
      },
    },
    goals: {
      home: 2,
      away: 2,
    },
    score: {
      halftime: {
        home: 2,
        away: 2,
      },
      fulltime: {
        home: 2,
        away: 2,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
];
firstList.forEach((game) => {
  let date = game.fixture.date.slice(0, 10);
  if (renderedData.has(date)) {
    let exitingList = renderedData.get(date);
    exitingList.push(game);
  } else {
    renderedData.set(date, [game]);
  }
});

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
}

function convertUTCToLocal(dateString) {
  const date = new Date(dateString);
  const options = { hour: "2-digit", minute: "2-digit" };
  return date.toLocaleTimeString([], options); // This will display only the local time without seconds
}

/*<div class="match">
      <div class="team">${game.teams.home.name}</div>
      <div class="time">${convertUTCToLocal(game.fixture.date)}</div>
      <div class="team">${game.teams.away.name}</div>
    </div>*/

let renderGame = function (games) {
  let html = `<section class="match-day">
    <h3>${formatDate(games[0].fixture.date)}</h3>`;
  console.log(games[0]);
  games.forEach((game) => {
    html += `<div class="match">
      <div class="team">${game.teams.home.name}</div>
      <img class="team" src="${game.teams.home.logo}" width="50" height="50"/>
      <div class="time">${convertUTCToLocal(game.fixture.date)}</div>
      <img class="team" src="${game.teams.away.logo}" width="50" height="50"/>
      <div class="team">${game.teams.away.name}</div>
    </div>`;
  });
  html += `</section>`;
  document.querySelector(".matches").insertAdjacentHTML("afterend", html);
};
renderedData.forEach((games) => renderGame(games));
