setInterval(
  function(){ 
    $.getJSON(apiUrl, getEventsByDate);
    
   }, 10000);


// Update this with the numer of events
let gameEvents = 1;

let date = "?date=20201225"
let apiUrl = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard";

console.log(apiUrl);
$.ajax({
    url: apiUrl,
    data: "",
    success: function () {
      console.log("Request Completed - Update Information ");
    },
    statusCode: {
      400: function () {
        alert("Richiesta non valida");
      },
      404: function () {
        alert("Dati non corretti");
      },
    },
});


function getEventsByDate(data) {
    let homeAway = data.events[gameEvents].competitions[0].competitors[0].homeAway
    let homeTeam = homeAway == "home" ? data.events[gameEvents].competitions[0].competitors[0].team.displayName : ""
    let homeTeamLogo = homeAway == "home" ? data.events[gameEvents].competitions[0].competitors[0].team.logo : ""    
    homeAway = data.events[gameEvents].competitions[0].competitors[1].homeAway
    let awayTeam = homeAway == "away" ? data.events[gameEvents].competitions[0].competitors[1].team.displayName : ""
    let awayTeamLogo = homeAway == "away" ? data.events[gameEvents].competitions[0].competitors[1].team.logo : ""
    
    $(nameHome).text(homeTeam)
    $(nameAway).text(awayTeam)
    $(imgHome).attr('src', homeTeamLogo);
    $(imgAway).attr('src', awayTeamLogo);

    let period = data.events[gameEvents].status.period
    let displayClock = data.events[gameEvents].status.displayClock
    $(dPeriod).text(period + " Q")
    $(dClock).text(displayClock)

    $(scoreHome).text(data.events[gameEvents].competitions[0].competitors[0].score)
    $(scoreAway).text(data.events[gameEvents].competitions[0].competitors[1].score)

    // Stats
    // Points Home
    let topscorePnameHome = data.events[gameEvents].competitions[0].competitors[1].leaders[0].leaders[0].athlete.fullName
    let topscorePHome = data.events[gameEvents].competitions[0].competitors[1].leaders[0].leaders[0].value
    let topscorePphotoHome = data.events[gameEvents].competitions[0].competitors[1].leaders[0].leaders[0].athlete.headshot
    // console.log(topscorePnameHome)
    $(pNameHome).text(topscorePnameHome)
    $(pScoreHome).text(topscorePHome)
    $(pPhotoHome).attr('src', topscorePphotoHome)
    // Points Away
    let topscorePnameAway = data.events[gameEvents].competitions[0].competitors[0].leaders[0].leaders[0].athlete.fullName
    let topscorePAway = data.events[gameEvents].competitions[0].competitors[0].leaders[0].leaders[0].value
    let topscorePphotoAway = data.events[gameEvents].competitions[0].competitors[0].leaders[0].leaders[0].athlete.headshot
    // console.log(topscorePnameAway)
    $(pNameAway).text(topscorePnameAway)
    $(pScoreAway).text(topscorePAway)
    $(pPhotoAway).attr('src', topscorePphotoAway)

  // Rebounds Home
    let topscoreRnameHome = data.events[gameEvents].competitions[0].competitors[1].leaders[1].leaders[0].athlete.fullName
    let topscoreRHome = data.events[gameEvents].competitions[0].competitors[1].leaders[1].leaders[0].value
    let topscoreRphotoHome = data.events[gameEvents].competitions[0].competitors[1].leaders[1].leaders[0].athlete.headshot
    // console.log(topscoreRnameHome)
    $(rNameHome).text(topscoreRnameHome)
    $(rScoreHome).text(topscoreRHome)
    $(rPhotoHome).attr('src', topscoreRphotoHome)
    // Rebounds Away
    let topscoreRnameAway = data.events[gameEvents].competitions[0].competitors[0].leaders[1].leaders[0].athlete.fullName
    let topscoreRAway = data.events[gameEvents].competitions[0].competitors[0].leaders[1].leaders[0].value
    let topscoreRphotoAway = data.events[gameEvents].competitions[0].competitors[0].leaders[1].leaders[0].athlete.headshot
    // console.log(topscoreRnameAway)
    $(rNameAway).text(topscoreRnameAway)
    $(rScoreAway).text(topscoreRAway)
    $(rPhotoAway).attr('src', topscoreRphotoAway)

  // Assist Home
  let topscoreAnameHome = data.events[gameEvents].competitions[0].competitors[1].leaders[2].leaders[0].athlete.fullName
  let topscoreAHome = data.events[gameEvents].competitions[0].competitors[1].leaders[2].leaders[0].value
  let topscoreAphotoHome = data.events[gameEvents].competitions[0].competitors[1].leaders[2].leaders[0].athlete.headshot
  // console.log(topscoreAnameHome)
  $(aNameHome).text(topscoreAnameHome)
  $(aScoreHome).text(topscoreAHome)
  $(aPhotoHome).attr('src', topscoreAphotoHome)
  // Assist Away
  let topscoreAnameAway = data.events[gameEvents].competitions[0].competitors[0].leaders[2].leaders[0].athlete.fullName
  let topscoreAAway = data.events[gameEvents].competitions[0].competitors[0].leaders[2].leaders[0].value
  let topscoreAphotoAway = data.events[gameEvents].competitions[0].competitors[0].leaders[2].leaders[0].athlete.headshot
  // console.log(topscoreRnameAway)
  $(aNameAway).text(topscoreAnameAway)
  $(aScoreAway).text(topscoreAAway)
  $(aPhotoAway).attr('src', topscoreAphotoAway)

}
