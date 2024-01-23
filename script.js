let timer;
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

const hourDisplay = document.getElementById('hour');
const minuteDisplay = document.getElementById('minute');
const secondDisplay = document.getElementById('second');
const countDisplay = document.getElementById('count');
const startBtn = document.getElementById('button-start');
const stopBtn = document.getElementById('button-stop');
const resetBtn = document.getElementById('button-reset');
const lapbtn = document.querySelector("#button-lap");

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    hourDisplay.innerHTML = "00";
    minuteDisplay.innerHTML = "00";
    secondDisplay.innerHTML = "00";
    countDisplay.innerHTML = "00";
//    lapbtn.innerText =" ";
});

const rec = document.querySelector(".laps");


lapbtn.addEventListener('click', function(){

    let p = document.createElement("p");
    p.innerText = ` ${minute}:${second} :${count}`;
    p.classList.add("p_css");
    rec.appendChild(p);

})

function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
        hourDisplay.innerHTML = `${hour < 10 ? '0' + hour : hour}`;
        minuteDisplay.innerHTML = `${minute < 10 ? '0' + minute : minute}`;
        secondDisplay.innerHTML = `${second < 10 ? '0' + second : second}`;
        countDisplay.innerHTML = `${count < 10 ? '0' + count : count}`;
        setTimeout(stopWatch, 10);
    }
}