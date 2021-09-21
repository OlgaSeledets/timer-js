window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours');
        let timerMinutes = document.querySelector('#timer-minutes');
        let timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime();
            let dateNow = new Date().getTime();
            let timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = Math.floor(timeRemaining % 60);
            let minutes = Math.floor((timeRemaining / 60) % 60);
            let hours = Math.floor(timeRemaining / 60 / 60) % 24;
            //let day = Math.floor(timeRemaining / 60 / 60 / 24);

            if(hours < 0) {
                hours = '00';
                minutes = '00';
                seconds = '00';
            }

            if(hours < 10 && hours != 0) {
                hours = '0'+hours;
            } 
            if(minutes < 10 && minutes != 0) {
                minutes = '0'+minutes;
            } 
            if(seconds < 10 && seconds != 0) {
                seconds = '0'+seconds;
            }

            return {timeRemaining, hours, minutes, seconds,};
        }
        
        function updateClock(){
            let timer = getTimeRemaining();
        
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if (timer.timeRemaining > 0) {
                setInterval(updateClock, 1000);
            }
        }

        updateClock();
    }

    countTimer('22 september 2021');
    //setInterval(countTimer, 1000, '20 september 2021');
});