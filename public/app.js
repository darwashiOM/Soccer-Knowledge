class App {
  #gamesData = {};
  #gamesSliceStart = 0;
  #gamesSliceEnd = 5;

  constructor() {
    this._premierLeagueData(this.#gamesSliceStart, this.#gamesSliceEnd);
    document.getElementById("prev-button").addEventListener("click", () => {
      if (this.#gamesSliceStart < 6) return;
      this.#gamesSliceStart -= 5;
      this.#gamesSliceEnd -= 5;
      this._premierLeagueData(this.#gamesSliceStart, this.#gamesSliceEnd);
    });
    document.getElementById("next-button").addEventListener("click", () => {
      if (this.#gamesSliceStart > 60) return;
      this.#gamesSliceStart += 5;
      this.#gamesSliceEnd += 5;
      this._premierLeagueData(this.#gamesSliceStart, this.#gamesSliceEnd);
    });
  }

  _premierLeagueData = function (matchesFrom, matchesTo) {
    fetch(`/data?matchesFrom=${matchesFrom}&matchesTo=${matchesTo}`)
      .then((response) => response.json())
      .then((data) => {
        this.#gamesData = data; // Log the data for debugging purposes
        // You can also update the DOM here based on the data
        console.log(this.#gamesData);
        document.querySelector(".matches").innerHTML = "";
        this.#gamesData.forEach((games) =>
          this._renderHeadingDate(games.fixture.date)
        );
        this.#gamesData.forEach((game) => this._renderGame(game));
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  _renderHeadingDate = function (headingDate) {
    let gameDateFormated = this._formatDate(headingDate);
    let gameDate = headingDate.slice(0, 10);
    if (document.getElementById(gameDate)) return;
    let html = `<section class="match-day" id="${gameDate}">
          <h3>${gameDateFormated}</h3>
          </section>`;
    document.querySelector(".matches").insertAdjacentHTML("beforeend", html);
  };

  _renderGame = function (game) {
    let gameDate = game.fixture.date.slice(0, 10);
    let html = `<div class="match">
            <div class="team">${game.teams.home.name}</div>
            <img class="team" src="${
              game.teams.home.logo
            }" width="50" height="50"/>
            <div class="time">${this._convertUTCToLocal(
              game.fixture.date
            )}</div>
            <img class="team" src="${
              game.teams.away.logo
            }" width="50" height="50"/>
            <div class="team">${game.teams.away.name}</div>
          </div>`;

    document.getElementById(gameDate).insertAdjacentHTML("beforeend", html);
  };

  _convertUTCToLocal(dateString) {
    const date = new Date(dateString);
    const options = { hour: "2-digit", minute: "2-digit" };
    return date.toLocaleTimeString([], options); // This will display only the local time without seconds
  }

  _formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  }
}
let app = new App();
