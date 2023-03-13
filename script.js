let hr = document.getElementById('hour')
let min = document.getElementById('minute')
let sec = document.getElementById('second')

//we will create function called display time which called by set interval in every second, inside which we provide transform degree
function displayTime(){
    
    let time = new Date();
    //time has all time format information , we now extract hour, min and sec time
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();
    //console.log(hh,mm,ss)
    //now after getting time  we need to raotate them 

    let hrRotation = 30*hh + mm/2;
    let mmRotation = 6*mm;
    let ssRotation = 6*ss;
    //console.log(hrRotation,mmRotation,ssRotation)

    hr.style.transform = `rotate(${hrRotation}deg)`;
    min.style.transform = `rotate(${mmRotation}deg)`;
    sec.style.transform = `rotate(${ssRotation}deg)`;
} 

setInterval(displayTime,1000)