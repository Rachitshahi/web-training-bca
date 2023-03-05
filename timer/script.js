let timerInterval;
const timeleft = document.querySelector('.time-left');
const timeButton = document.querySelectorAll('[data-time]');
const changeTime = document.querySelector('.end-time')


function timer(second){
    const now = Date.now();//Current time
    const then = now + second*1000;//time after 1 min

    displayTimeLeft(second);
    displayComebackTime(then);
    timerInterval = setInterval(function(){
        const secondLeft = Math.round((then - Date.now())/1000);//counter of 1 min Math.round(remove decimal point)
        if(secondLeft<=0){
            clearInterval(timer);
        }
        displayTimeLeft(secondLeft);
    }, 1000);//Every scond interval
    
}
//timer(100);//1min

function displayTimeLeft(secondLeft){
    let minute = Math.floor(secondLeft/60);
    const second = secondLeft%60;
    console.log(minute, second)
    if(minute<10){
        timeleft.textContent = "0" +minute + ":" + second;
    }else{
        timeleft.textContent = minute + ":" + second;

    }
};


timeButton.forEach(function(button){
    button.addEventListener('click', function(event){
        clearInterval(timerInterval);
        const minute = event.target.getAttribute('data-time');
        const second = minute*60;
        console.log(second);
        timer(second);
    });
});


function displayComebackTime(timestamp){
    const date = new Date(timestamp);
    const hour = date.getHours();
    const minute = date.getMinutes();
    console.log(hour, minute);
    changeTime.innerHTML="Be back in "+hour +":"+ minute;
}