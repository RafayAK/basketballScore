let homeScoreCard = document.getElementById("home-score");
let awayScoreCard = document.getElementById("away-score");
let homeScore = 0; // starting score
let awayScore = 0; // starting score


function add(num, team) {
    // console.log(num, team)
    if (team === "home") {
        homeScore += Number(num);
        console.log("Home score; ", homeScore);
        homeScoreCard.textContent = homeScore;
        
    } 

    if (team == "away") {
        
        awayScore += Number(num);
        console.log("away Score: ", awayScore);
        awayScoreCard.textContent = awayScore;
    }

}

function reset(team) {

    if (team === "home") {
        homeScore = 0;
        homeScoreCard.textContent = homeScore;
    }

    if (team == "away") {
        awayScore = 0;
        awayScoreCard.textContent = awayScore;
    }


}