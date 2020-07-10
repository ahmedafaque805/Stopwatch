//                         Stop Watch
var min = 0;
var sec = 0;
var mili = 0;

var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var miliheading = document.getElementById("mili" );

var interval;
function timer(){
    mili++
    miliheading.innerHTML = mili;
    if(mili >= 100){
        sec++ 
        secheading.innerHTML = sec
        mili = 0;
    }else if (sec >= 60){
        min++
        minheading.innerHTML = min
        sec = 0
    }
}

function start(){
    if(!interval){
        interval = setInterval(timer,10)
    }
    
}

function pause(){
    clearInterval(interval)
    interval = false
}

function reset(){
    min = 0;
    sec = 0;
    mili = 0;
    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    miliheading.innerHTML = mili;
    pause()
}