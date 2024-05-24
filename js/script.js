/* Rotating Banner */
const track = document.querySelectorAll(".banner-class");
const trackContainer = document.getElementById("banner-track");
const bannerButton = document.querySelectorAll(".btn-banner");
const leftButton = document.getElementById("left-btn-banner");
const rightButton = document.getElementById("right-btn-banner");

let bannerShown = 0; // Default image shown is at 0 x 1300(Size of container)
const bannerTimer = 4000; // Change image every 3000ms or 3s    

function animateIn(i) { // For when mouse over
    bannerButton[i].animate({
        opacity: '90%'
    }, {duration: 200, fill: "forwards"})
}

function animateOut(i) { // For when mouse out
    bannerButton[i].animate({
        opacity: '0%'
    }, {duration: 200, fill: "forwards"})
}

trackContainer.onmouseover = () => {
    for(let i = 0; i <= 1; ++i){
        animateIn(i);        
    }
}

trackContainer.onmouseout = () => {
    for(let i = 0; i <= 1; ++i){
        animateOut(i);        
    }
}

// For hovering at the button
leftButton.onmouseover = () => {
    for(let i = 0; i <= 1; ++i){
        animateIn(i);        
    }
}
rightButton.onmouseover = () => {
    for(let i = 0; i <= 1; ++i){
        animateIn(i);        
    }
}
leftButton.onmouseout = () => {
    for(let i = 0; i <= 1; ++i){
        animateOut(i);        
    }
}
rightButton.onmouseout = () => {
    for(let i = 0; i <= 1; ++i){
        animateOut(i);        
    }
}

function rotateBanner() {
    for(let i = 0; i <= 2; ++i){
        track[i].animate({
            transform: `translate(${bannerShown * -100}%, 0%)`
        }, {duration: 600, fill: "forwards"});
    }
}

function autoRotateBanner(){
    bannerShown++;
    if(bannerShown > 2){
        bannerShown = 0;
    }
    rotateBanner();
}

let Timer = setInterval(autoRotateBanner, bannerTimer);

leftButton.onclick = () => {
    bannerShown--;
    if(bannerShown < 0){
        bannerShown = 2;
    }
    rotateBanner();
    clearInterval(Timer);
    Timer = setInterval(autoRotateBanner, bannerTimer);
}

rightButton.onclick = () => {
    bannerShown++;
    if(bannerShown > 2){
        bannerShown = 0;
    }
    rotateBanner(Timer);
    clearInterval(Timer);
    Timer = setInterval(autoRotateBanner, bannerTimer);
}

// Learn More Button
function learnMore() {
    window.open('https://store.steampowered.com/'); // New tab open
    // window.location = url // Change current window   
}