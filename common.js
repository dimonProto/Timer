
let newYear = "1 Jan 2022";

let dayElement = document.getElementById('day');
let hourElement = document.getElementById('hour');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');

function timerforNewYear(){
    let newYearDate = new Date(newYear);
    let dateToDay = new Date();

    let totalSeconds = (newYearDate - dateToDay) / 1000;
   
    let days = Math.floor((totalSeconds / 3600) / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds % 60);

    dayElement.innerHTML = days;
    hourElement.innerHTML = zero(hours);
    minutesElement.innerHTML = zero(minutes);
    secondsElement.innerHTML = zero(seconds);

}
timerforNewYear()

function zero(time){
    return time < 10 ? `0${time}` : time
}

setInterval(timerforNewYear, 1000)