        /*==================== COUNSTDOWN =============================*/
        
        const countStarter = document.querySelector('.countdownPress');
       const countDisMin = document.querySelector('.time2Min');
        const countDisSec = document.querySelector('.time2Sec');
        const countGradAnim = document.querySelector('.grad2');
        const countProgress = document.querySelector('.Progress');
       const countInMin = document.querySelector('.inMin');
        const countInSec = document.querySelector('.inSec');
        const progWidth = document.querySelector('.Progress').offsetWidth;
        let countState =0;
        let countMin;
        let countSec;
        let countInt;
        let countAni;
        let countProg;
        let progFullTime;
            let progPer;
        let countAudio;
        
        
            
            /*========================= Input calibartion ==============*/
        countInMin.addEventListener("focusout", inputCheck)
        countInMin.addEventListener("focus", function(){
            event.target.value = "";
        })
            
            
        countInSec.addEventListener("focusout", inputCheck)
            countInSec.addEventListener("focus", function(){
            event.target.value = "";
        })
            
        function inputCheck(){
            let input = event.target.value;
            
           //Make sure it has two digits
                if(input == 0){
                event.target.value = "00";
                }
            //Make sure it has two digits version with one digit number like 1 - 9
                if(input > 0 && input < 10){
                event.target.value = "0" + input;
                }
            //Make sure its not bigger than 59
                if (input > 59) {
                event.target.value = 59;
                }
            //Make sure it has only two digits, not like 00000002;
                let strInput = event.target.value.toString();
                let myArr = Array.from(strInput);
                
                if (myArr.length >= 3){
                     
                    let last = myArr[myArr.length-1];
                    let prelast = myArr[myArr.length-2];
                    if (isNaN(prelast) || isNaN(last)){
                       
                        event.target.value = "00";
                        return;
                    }
                    var hold = prelast+last;
                    event.target.value= hold;
                }
            
                
                
            
            }
        function inputFocus(){
            event.target.value = "";
        }
        
                /*========================= Start Countdown ==============*/
                
        countStarter.addEventListener("click", function(){
            
            
            if (countState==0){
            //If input = 0 than dont even start coundown
            if (countInSec.value==0 && countInMin.value==0 ){
                countGradAnim.style.animationName = "none"; //Break animation too
                alert("Set Time");
                return;
                }
                
            //Active animations
            countGradAnim.style.animationName = "Pulse";
            countStarter.style.animationName = "Click";
            countAni = setTimeout(function(){
                countStarter.style.animationName = "none";
            },500)
            //Active progress bar OMG! Siiiick! Poor method bad it works as far.
            // WARNING!!! Dont use transition style. It will blow this up.
            countProgress.style.display = "block"
            let sec = Number(countInSec.value);
            let min = Number(countInMin.value);
            progFullTime =  sec + (min*60);
            progPer = (progFullTime*1000)/300;
             console.log(progPer);   
            
            countProg = setInterval (function(){
                countProgress.style.width = (countProgress.offsetWidth - 1).toString() + "px";
                
            },progPer)
            
            //Set state on active
            countState = 1;
            //Prepere input to display and countdown
            countDisSec.innerText = countInSec.value;
            countDisMin.innerText = countInMin.value;
             countMin = countInMin.value;
                let strInput = countMin.toString();
                let myArr = Array.from(strInput);
                if (countMin < 9 && myArr.length>1){
                    countMin=myArr[myArr.length-1];
                }
            countSec = countInSec.value; 
            
            
            // Start Countdown
                    countInt = setInterval (function(){

                        countSec--;
                        if(countSec < 0){
                           if(countMin != 0){ 
                            countSec = 59;
                            countMin--;
                           }
                        }
                        
                        if((countSec <= 5 && countSec > 0) && countMin == 0){
                            countStarter.style.animationName = "Count";
                            countAudio = new Audio("audio/Beep.mp3")
                            countAudio.play()
                            
                        }
                        
                        if (countMin==0 && countSec==0){
                            countAudio = new Audio ("audio/Final.mp3")
                            countAudio.play()
                            countStarter.style.animationName = "none";
                            countDisMin.innerText = "00";
                            countDisSec.innerText = "00";
                            countGradAnim.style.animationName = "none";
                            countProgress.style.display = "none";
                            countProgress.style.width = "100%";
                            countState = 0;
                            clearInterval(countProg);
                            clearInterval(countInt);
                        }

                        if(countMin <= 9){
                            countDisMin.innerText = "0" +countMin;
                        } else {
                            countDisMin.innerText = countMin;
                        }   

                        if(countSec <= 9){
                            countDisSec.innerText = "0" + countSec;
                        } else {
                            countDisSec.innerText = countSec;
                        }



                      },1000)
            } else {
            countState = 0;
               
            //If countdown is running
                    //Animation on Click:
                    countGradAnim.style.animationName = "none";
                countStarter.style.animationName = "Click";
            countAni = setTimeout(function(){
                countStarter.style.animationName = "none";
            },500)
                
            //Reset all:
            countMin = 0;
            countSec = 0;
            clearInterval(countInt);
            clearInterval(countProg);    
            countInMin.value = 0;
            countInSec.value = 0;
            countProgress.style.display = "none";
            countProgress.style.width = "100%";    
            countDisMin.innerText = "00";
            countDisSec.innerText = "00";
            countInMin.value = "00";
            countInSec.value = "00";
            }
        })