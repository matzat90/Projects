       
        /*==================== TIMER =============================*/
       const starter = document.querySelector('.bg3');
        const starDisMin = document.querySelector('.timerMin');
        const starDisSec = document.querySelector('.timerSec');
        const gradAnimT = document.querySelector(".grad1");
        const resetTimer = document.querySelector(".timerReset");
       const timerBg = document.querySelector(".timerBg");
        
        let starState = 0;
        let starMin = 0;
        let starSec = 0;
        let starInt;
        let clickAnimInt;
            
        starter.addEventListener("click", function() {
            timerBg.style.animationName = "Click";
            clickAnimInt = setTimeout(function() {
                timerBg.style.animationName = "none"
            }, 1000)
            
            if(starState == 0){
                // Reset Activator
                resetTimer.style.color = "white";
                resetTimer.style.backgroundColor = "var(--color-active)";
                    
                // State => Active
                starState = 1;
                
                //Start count
                starInt = setInterval(function() {
                        
                    
                        //Second ++
                        starSec++

                        //Minutes ++
                        if(starSec >= 60){
                            starMin++
                            starSec=0;
                        }
                        let curMin = starMin;
                        let curSec = starSec;
                        // Text format
                        if (curMin < 10){
                            curMin = "0" + curMin.toString();
                        }

                        if (curSec < 10){
                            curSec = "0" + curSec.toString();
                        }    
                           // Start animation
                        gradAnimT.style.animationName ="Pulse";
                        //Display time
                        starDisMin.innerText = curMin;
                        starDisSec.innerText = curSec;    



                    }, 1000)
            } else {
                //Stop Animation
                gradAnimT.style.animationName ="None";
                // State => Pause
                starState = 0;
                //Stop count
                clearInterval(starInt);
            }
        })
            
        resetTimer.addEventListener("click", function(){
                // Clear count
                clearInterval(starInt);
                //Reset all
                starState = 0;
                starMin = 0;
                starSec = 0;
                    // Stop Animation Pulse
                    gradAnimT.style.animationName = "none";
                //Reset display
                starDisMin.innerText = "00";
                starDisSec.innerText = "00"; 
                //Reset Reset-button style
                event.target.style.color = "grey";
                resetTimer.style.backgroundColor = "var(--color-pasive)";
            
        }) 