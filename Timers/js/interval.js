        /*==================== INTERVAL =============================*/
        const intS = document.querySelector('.startInt');
        const intSC = document.querySelector('.startIntColor');
        const intDisM = document.querySelector('.IntTimerMin');
       const intDisS = document.querySelector('.IntTimerSec');
        const intGrad = document.querySelector('.grad3');
        const intProg = document.querySelector('.Progress2');
        const intInMin1 = document.querySelector('.inIntMin');
        const intInSec1 = document.querySelector('.inIntSec');
        let intMin1 = 0;
        let intSec1 = 0;
        const intInMin2 = document.querySelector('.inBrMin');
        const intInSec2 = document.querySelector('.inBrSec');
        let intMin2 = 0;
        let intSec2 = 0;
         
        let intAudio;    
        let intState = 0;    
        let intInt;
        let intBrInt;
        let intAni;
        let intIntTimeOut;
        
        let intTimeSet1;
        let intTimeSet2;
            /*========================= INTERVAL Input calibartion ==============*/
        
        let workArr = [intInMin1, intInSec1,intInMin2, intInSec2,];
        
        workArr.forEach(function(){
            this.addEventListener('focusout', inputCheck);
            //this.addEventListener('focus', inputFocus); - Doeasnt work in forEach. Don't know why xD
        })
        // Works here fine:
        intInMin1.addEventListener("focus", inputFocus);
        intInSec1.addEventListener("focus", inputFocus);
        intInMin2.addEventListener("focus", inputFocus);
        intInSec2.addEventListener("focus", inputFocus);
            
            /*========================= INTERVAL Start ==============*/
            
        intS.addEventListener('click', function(){
            if (intState == 0){
                //If input is 0 break
                if ((intInMin1.value == 0 && intInSec1.value == 0) && (intInMin2.value == 0 && intInSec2.value == 0)){
                    alert("Set Interval and Break");
                    return
                }
                if (intInMin1.value == 0 && intInSec1.value == 0){
                    console.log("Int")
                    alert("Set Interval Section");
                    return
                }
                
                if (intInMin2.value == 0 && intInSec2.value == 0){
                   console.log("BR")
                    alert("Set Break Section");
                    return
                }
                //Stat Animation
                intGrad.style.animationName = "Pulse";
                event.target.style.animationName = "Click";
                intAni = setInterval (function(){
                    intS.style.animationName ="none";
                }, 1000);
                //Set State on Active
                intState = 1;
                //Prepere data for setInterval;
                preparData();
                // Active ProgressBar METHOD 2 with animation time (CSS style)
               let Min1 = Number(intInMin1.value);
               let Sec1 = Number(intInSec1.value);
               let Min2 = Number(intInMin2.value);
               let Sec2 = Number(intInSec2.value);
                
                intTimeSet1 = Min1*60+Sec1
                intTimeSet2 = Min2*60+Sec2
                console.log(intInMin1.value)
                console.log(intTimeSet1);
                intProg.style.display = "block";
                intProg.style.animationDuration = intTimeSet1+"s";
                intProg.style.animationName = "Bar"
                
                // Prepere input to display (only Interbal section);
                intDisM.innerText = intInMin1.value;
                intDisS.innerText = intInSec1.value;
                
                
                //Start countdown interval
                intInt = setInterval(startInterval,1000);
            } else {
                //Click when coutndown is running
                    //Animation stop
                    intGrad.style.animationName = "none";
                    intSC.style.animationName ="none";
                    intS.style.animationName = "Click";
                    intAni = setInterval (function(){
                    intS.style.animationName = "none";
                    
                    },500)
                    intProg.style.display = "none";
                    intProg.style.animationName = "none";
                    //Reset All
                    
                    intState = 0;
                    intMin1 = 0;
                    intSec1 = 0;
                    intMin2 = 0;
                    intSec2 = 0;
                    intInt = clearInterval(intInt);
                    intBrInt = clearInterval (intBrInt);
                    intInMin1.value = "00";
                    intInSec1.value = "00";
                    intInMin2.value = "00";
                    intInSec2.value = "00";
                    intProg.style.display = "none";
                    intProg.style.width = "100%";    
                    intDisM.innerText = "00";
                    intDisS.innerText = "00";
            }
            
        })
            
        function startInterval() {
            intAudio = null;
             intSec1--;
                    if (intSec1 < 0){
                        if (intMin1 != 0){
                            intMin1 --;
                            
                        }
                        intSec1 = 59; 
                    }
                               
                    if (intSec1 <= 5 && intMin1 == 0){
                        intSC.style.animationDuration = "1s";
                        intSC.style.animationName = "Count";
                        if (intSec1 >= 1){
                        intAudio = new Audio("audio/Beep.mp3");
                        intAudio.play()
                        }
                    }
                    
                    if (intSec1 == 0){intS.style.animationName = "none";}
            
                    if (intSec1 == 0 && intMin1 == 0){
                        intDisS.innerText = "00";
                        intDisM.innerText = "00";
                        console.log("doszło");
                        intSC.style.animationName = "none";
                        intAudio = null;
                        intAudio = new Audio("audio/Final.mp3");
                        intAudio.play()
                        intProg.style.width = "100%";
                        intProg.style.animationName = "none"
                        intIntTimeOut = setTimeout (function(){
                            console.log("start int Time");
                            intSC.style.animationName = "none";
                            intDisM.innerText = intInMin2.value;
                            intDisS.innerText = intInSec2.value;
                            intProg.style.animationName = "Bar"
                            intProg.style.animationDuration = intTimeSet2+"s";
                            console.log(intTimeSet2);
                                                
                            clearInterval(intInt);
                            clearInterval(intBrInt);
                            preparData()
                            intBrInt = setInterval (startBreak, 1000);
                        }, 1000) ;
                        
                    }
                    
                     
                    
                    if(intMin1 <= 9 && intMin1 >= 0){
                            intDisM.innerText = "0" +intMin1;
                        } else {
                            intDisM.innerText = intMin1;
                        }   

                        if(intSec1 <= 9 && intSec1 >= 0){
                            intDisS.innerText = "0" + intSec1;
                        } else {
                            intDisS.innerText = intSec1;
                        }
        }
            
        function startBreak(){
            intAudio = null;    
            console.log("start break");
                intSec2--;
                     if (intSec2 < 0){
                        if (intMin2 != 0){
                            intMin2 --;
                        }
                        intSec2 = 59;
                    }
            
                    if (intSec2 <= 5 && intMin2 == 0){
                        intSC.style.animationDuration = "1s";
                        intSC.style.animationName = "Count";
                        
                        if (intSec2 >= 1){
                            
                        intAudio = new Audio("audio/Beep.mp3");
                        intAudio.play()
                        }
                        
                        
                    }        
            
                    if (intSec2 == 0){intSC.style.animationName = "none";}
            
                    if (intSec2 == 0 && intMin2 == 0){
                        
                         intAudio = null;
                        intAudio = new Audio("audio/Final.mp3");
                        intAudio.play()
                        intProg.style.width = "100%";
                        intProg.style.animationName = "none";
                        intIntTimeOut = setTimeout (function(){
                            console.log("start int Break");
                            intSC.style.animationName = "none";
                            intDisM.innerText = intInMin1.value;
                            intDisS.innerText = intInSec1.value;
                            intProg.style.animationName = "Bar";
                            intProg.style.animationDuration = intTimeSet1+"s";
                            console.log(intTimeSet1);
                            
                            clearInterval(intBrInt);
                            clearInterval(intInt);
                            preparData()
                            intInt = setInterval (startInterval, 1000);
                        }, 1000) ;
                       
                        
                        
                    }
                    if(intMin2 <= 9 && intMin2 >= 0){
                            intDisM.innerText = "0" +intMin2;
                        } else {
                            intDisM.innerText = intMin2;
                        }   

                        if(intSec2 <= 9 && intSec2 >= 0){
                            intDisS.innerText = "0" + intSec2;
                        } else {
                            intDisS.innerText = intSec2;
                        }
        }
        
        function preparData(){    
                intMin1 = intInMin1.value;
                intSec1 = intInSec1.value;
                intMin2 = intInMin2.value;
                intSec2 = intInSec2.value;
                
                let strInput = intMin1.toString();
                let myArr = Array.from(strInput);
                if (intMin1 < 9 && myArr.length>1){
                    intMin1=myArr[myArr.length-1];
                }
               let strInput2 = intSec1.toString();
                let myArr2 = Array.from(strInput2);
                if (intSec1 < 9 && myArr2.length>1){
                    intSec1=myArr2[myArr.length-1];
                }
                
                let strInput3 = intMin2.toString();
                let myArr3 = Array.from(strInput3);
                if (intMin2 < 9 && myArr3.length>1){
                    intMin2=myArr3[myArr.length-1];
                }
                
                let strInput4 = intSec2.toString();
                let myArr4 = Array.from(strInput4);
                if (intSec2 < 9 && myArr4.length>1){
                    intSec2=myArr4[myArr.length-1];
                }
        }