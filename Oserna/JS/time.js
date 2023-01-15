const timeText = document.querySelector('.timeText');
const titleNotPageH2 = document.querySelector('.titleNotPageH2');

function time(){
    let time = new Date();
    let hours = time.getHours();

    timeText.textContent = time.toLocaleTimeString();

    if(hours >= 18 || hours < 6){
        titleNotPageH2.textContent = '¡Buenas noches!';
    }
    if(hours >= 6 && hours < 13){
        titleNotPageH2.textContent = '¡Buenos dias!';
    }
    if(hours >= 13 && hours < 18){
        titleNotPageH2.textContent = '¡Buenas tardes!';
    }   
}

setInterval(() => {    
    time();    
}, 1000);

addEventListener('DOMContentLoaded', time());
