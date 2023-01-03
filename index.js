let homeEl = document.getElementById("home-score");
let homeScore = 0;
let guestEl = document.getElementById("guest-score");
let guestScore = 0;

function add1(){
    console.log("1 button clicked");
    homeScore += 1;
    homeEl.textContent = homeScore;
   
}

function add2(){
    console.log("1 button clicked");
    homeScore += 2;
    homeEl.textContent = homeScore;
   
}

function add3(){
    console.log("1 button clicked");
    homeScore += 3;
    homeEl.textContent = homeScore;
   
}

function sub1 () {
    guestScore += 1 ;
    guestEl.textContent = guestScore;
}

function sub2 () {
    guestScore += 2 ;
    guestEl.textContent = guestScore;
}

function sub3 () {
    guestScore += 3 ;
    guestEl.textContent = guestScore;
}