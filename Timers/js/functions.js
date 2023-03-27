         /*==================== SWIPE =============================*/
        
        const hold = document.querySelector(".deskHolder");    
       const screen = document.querySelector(".screen");
        
            
        let distance = 50;
        let allowedTime = 200;
        let tStartPoint;
        let pageYstart;
       let pageYend;
        let time;
        let tEndPoint;
        let prev;
            
        let x = getComputedStyle(screen)
        let y = screen.offsetWidth/3;
            
        window.ontouchstart=function(){
            tStartPoint = event.touches[0].pageX;
            pageYstart = event.touches[0].pageY
            time = new Date().getTime();
            
            
        }
        window.ontouchmove=function(){
            tEndPoint =event.touches[0].pageX;
            pageYend = event.touches[0].pageY
            
        }
        
        window.ontouchend=function(){
            var yvar = Math.abs(pageYend-pageYstart);
            var timeB = new Date().getTime() - time;
            var dir = tStartPoint-tEndPoint;
            if ((dir > 0 && Math.abs(dir)>distance)&&(timeB>=allowedTime)&&(yvar<=50)){
                                
                switch(x.left){
                    case "0px":
                        screen.style.left = "-100vw";
                        
                    break;
                    case -y + "px":
                        screen.style.left = "-200vw";
                    break;
                    }
                
            }else if ((dir < 0 && Math.abs(dir)>distance)&&(timeB>=allowedTime)&&(yvar<=50)){
                switch(x.left){
                    case -y*2+"px":
                        screen.style.left = "-100vw";
                        
                    break;
                    case -y + "px":
                        screen.style.left = "0px";
                    break;
                    }
            } else if (dir == 0){
                
                
            }
            
            prev = setTimeout(function(){
            tEndPoint;
            tStartPoint; 
            }, 1000)
            
            
           
        }