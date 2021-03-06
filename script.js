let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.minute-hand');
let hourHand = document.querySelector('.hour-hand');
    
//Fixes the flicker as the clock resets transformation location
function checkFlicker(ele, deg) {  
    if (deg === 90) {
      ele.style.transition = 'all 0.0s'
    }
}

function setDate(){
    let now = new Date();

    let seconds = now.getSeconds();
    let secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    let minutes = now.getMinutes();
    let minutesDegrees = ((minutes/60) * 360) + 90;
    minuteHand.style.transform  = `rotate(${minutesDegrees}deg)`;

    let hours = now.getHours();
    let hoursDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    checkFlicker(secondHand, secondsDegrees);
    checkFlicker(minuteHand, minutesDegrees);
    checkFlicker(hourHand, hoursDegrees);
}    
   
setInterval(setDate, 1000);
