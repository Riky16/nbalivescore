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

  }
  