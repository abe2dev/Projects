let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let trigger = "STOPPED";

function stopWatch(){
  seconds++;
  if (seconds / 60 === 1){
    seconds = 0;
    minutes++;

    if(minutes / 60 === 1){
      minutes = 0;
      hours++
    }
  }

  // ternary operator
  (seconds < 10) ? displaySeconds = 0 + '' + seconds : displaySeconds = seconds;
  (minutes < 10) ? displayMinutes = 0 + '' + minutes : displayMinutes = minutes;
  (hours < 10) ? displayHours = 0 + '' + hours : displayHours = hours;
  document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop(){ // to start/stop the counter for stop watch
  if(trigger === "STOPPED"){
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerHTML = "Stop";
    trigger = "STARTED"; // setting start value to the trigger
  } else{
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    trigger = "STOPPED"; // setting stop value to the trigger
  }

} 
function reset(){
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
}
