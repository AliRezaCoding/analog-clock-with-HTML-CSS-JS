'use strict';

const hr = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const displayTime = function () {
    let now = new Date();

    // Extracting hour, min & sec from Date
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    
    let hRotation = h * 30 + m / 2;
    let mRotation = m * 6;
    let sRotation = s * 6;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

displayTime();
setInterval(displayTime, 1000);