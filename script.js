let homeScoreCard = document.getElementById("home-score");
let guestScoreCard = document.getElementById("guest-score");
let homeScore = 0; // starting score
let guestScore = 0; // starting score


function add(num, team) {
    // console.log(num, team)
    if (team === "home") {
        homeScore += Number(num);
        console.log("Home score; ", homeScore);
        homeScoreCard.textContent = homeScore;
        
    } 

    if (team == "guest") {
        
        guestScore += Number(num);
        console.log("Guest Score: ", guestScore);
        guestScoreCard.textContent = guestScore;
    }

}

function reset(team) {

    if (team === "home") {
        homeScore = 0;
        homeScoreCard.textContent = homeScore;
    }

    if (team == "guest") {
        guestScore = 0;
        guestScoreCard.textContent = guestScore;
    }


}