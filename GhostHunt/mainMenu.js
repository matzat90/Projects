//============ MAIN MENU ================ //

const menu = document.querySelector(".popup--menu");
        const countdown = document.querySelector(".popup--countdown");
        const scoreBoard = document.querySelector(".popup--score");
         
       const startBt = document.querySelector('.popup--menu--start');
        const scoreBt = document.querySelector('.popup--menu-score');
       const scoreBtBack = document.querySelector('.popup--score--back');
        const exitBt = document.querySelector('.popup--menu-exit');
        const finalRetryBt = document.querySelector('.play--screen--retry');
        const finalBackBt = document.querySelector('.play--screen--back');
        
        
        let timeNum = 1200; 
        let timeOut;
         
        let countDownTimes = 2;
        let timeOutCountdown;
        
         function closeMenu(x,y) {
           x.style.display = "none";
           y.style.display = "flex";
           y.style.opacity = "100%"; 
           
           } 
         
         function countDownTimer(){
             if (countDownTimes == 1){
                 document.querySelector(".play--screen").style.filter = "blur(0px)";
             }
             if (countDownTimes>0) {
                 countdown.innerHTML = countDownTimes;
                 countDownTimes --;
                 timeOutCountdown = setTimeout (countDownTimer, 990);
             } else {
                 timeOut = setTimeout (function(){
                     countdown.style.display = "none";
                     document.querySelector(".popup").style.display = "none";
                     
                     document.querySelector('.text').style.display = "flex";
                     countDownTimes = 2;
                     playCountDown = setInterval(countDownPlayTime,1000)
                     playMachine = setTimeout (ghostPopUp, 200)
                     music = new Audio("audio/music.mp3");
                     music.volume = 0.5;
            music.play();
                 },1);
                 
             }
         }
        
        function everyButton() {
            soundEff = new Audio ("audio/click.mp3");
            soundEff.play();
           event.target.parentElement.style.opacity = "0";
        }


        startBt.addEventListener ("click",  function() {
            everyButton();
         
           timeOut = setTimeout (closeMenu, timeNum,menu,countdown);
            timeOutCountdown = setTimeout (countDownTimer,2200);
        })
        
        scoreBt.addEventListener ("click",  function() {
           everyButton();
           timeOut = setTimeout (closeMenu, timeNum,menu,scoreBoard);
        })
         
        scoreBtBack.addEventListener ("click",  function() {
           everyButton();
           timeOut = setTimeout (closeMenu, timeNum,scoreBoard,menu);
        })
         
        exitBt.addEventListener ("click",  function() {
           everyButton();
            window.close();
        })

        finalRetryBt.addEventListener ("click",  function() {
        everyButton();
        playCountDownTime = 59;
        playScoreNum = 0;
        countDownTimes = 2;
        document.querySelector('.score--change').innerText = playScoreNum;
        document.querySelector('.popup--countdown').innerText = "3";
        timeOut = setTimeout (closeMenu, timeNum,document.querySelector('.popup--finScreen'),countdown);
        timeOutCountdown = setTimeout (countDownTimer,2200);
        })

        finalBackBt.addEventListener ("click",  function() {
        everyButton();
        playCountDownTime = 59;
        playScoreNum = 0;
        countDownTimes = 2;
        document.querySelector('.score--change').innerText = playScoreNum;
        document.querySelector('.popup--countdown').innerText = "3";
           timeOut = setTimeout (closeMenu, timeNum,document.querySelector('.popup--finScreen'),menu);
        })