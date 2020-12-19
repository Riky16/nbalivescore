// $(document).ready(() => {

// });

let date = "&date=20201225"
let apiUrl = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard";

console.log(apiUrl);
$.ajax({
    url: apiUrl,
    data: "",
    success: function () {
      console.log("Request Completed - Update Information [" + date + "]");
    },
    statusCode: {
      400: function () {
        alert("Richiesta non valida");
      },
      404: function () {
        alert("Nome della città errato");
      },
    },
});

$.getJSON(apiUrl, getEventsByDate);

function getEventsByDate(data) {
    let homeAway = data.events[0].competitions[0].competitors[0].homeAway
    let homeTeam = homeAway == "home" ? data.events[0].competitions[0].competitors[0].team.displayName : ""
    let homeTeamLogo = homeAway == "home" ? data.events[0].competitions[0].competitors[0].team.logo : ""    
    homeAway = data.events[0].competitions[0].competitors[1].homeAway
    let awayTeam = homeAway == "away" ? data.events[0].competitions[0].competitors[1].team.displayName : ""
    let awayTeamLogo = homeAway == "away" ? data.events[0].competitions[0].competitors[1].team.logo : ""
    
    $(nameHome).text(homeTeam)
    $(nameAway).text(awayTeam)
    $(imgHome).attr('src', homeTeamLogo);
    $(imgAway).attr('src', awayTeamLogo);

    // document.getElementById("test").innerHTML = data.events[0].shortName;

    $(casa).text(data.events[0].competitions[0].competitors[0].score)
    // document.getElementById("casa").innerHTML = data.events[0].competitions[0].competitors[0].score;
    // document.getElementById("trasferta").innerHTML = data.events[0].competitions[0].competitors[1].score;
    $(trasferta).text(data.events[0].competitions[0].competitors[1].score)
}
