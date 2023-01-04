let min = 00;
let sec = 00;
let temp = 00;
let totalSec = 00;
let intervalId = '';
let countdownWrapper = document.querySelector('.countdown');

const handleChange = (e,item)=> {
    if(e.target.value > 59){
        temp = 59
    }else{
        temp = e.target.value
    }

    if(item === 'min'){
        min = temp;
        updateCountdownView(item,min);
    }else{
        sec = temp;
        updateCountdownView(item,sec);
    }
}

const updateCountdownView = (item,e) => {
    if(item === 'min'){
        if(e < 10){
            document.querySelector('.timeMin').textContent = "0"+e;
        }else{
            document.querySelector('.timeMin').textContent = e;
        }
    }else{
        if(e < 10){
            document.querySelector('.timeSec').textContent = "0"+e;
        }else{
            document.querySelector('.timeSec').textContent = e;
        }
    }
}

const startCountdown = () => {
    countdownWrapper.classList.remove('borderAni');
    totalSec = (min * 60) + sec;
    intervalId = setInterval(()=>{
        if(min > 0){
            if(totalSec%60 !== 0){
                if(sec > 0){
                    sec = sec - 1;
                }
            updateCountdownView("sec",sec);
            }else{
                min = min-1;
                sec = 59;
            updateCountdownView("sec",sec);
            updateCountdownView("min",min);
            }            
        }else{
            if(sec > 0){
                sec = sec - 1;
                updateCountdownView("sec",sec);
            } 
        }
        if(totalSec === 0){
            countdownWrapper.classList.add('borderAni');
        }
        console.log(sec);
        console.log(min);
        totalSec--;
    },1000)
}

const resetCountdown = () => {
    min = 00;
    sec = 00;
    temp = 00;
    totalSec = 00;
    document.querySelector('.timeMin').textContent = "00";
    document.querySelector('.timeSec').textContent = "00";
    document.querySelectorAll('.input').forEach(inp => {
        inp.value = null;
    });
    countdownWrapper.classList.remove('borderAni');
    clearInterval(intervalId);
}