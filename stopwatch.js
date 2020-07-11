var interval;
var miliseconds = 0;
var seconds = 0;
var mins = 0;
var hours = 0;
var count=0;

function start(){

    
    interval = setInterval(function () {
        miliseconds++;
        document.getElementById('milliSec').innerHTML = miliseconds;
        if (miliseconds >= 99) {
    
            miliseconds = 0;    
            seconds++;
            document.getElementById('sec').innerHTML = seconds;
            
    
            if (seconds >= 59) {
                seconds=0;
                mins++;
    
    
                document.getElementById('min').innerHTML = mins;
                
        
                if (mins >= 59) {
                    mins = 0;
                    hours++;
                    document.getElementById('hour').innerHTML = hours;
                }
    
    
            }
        }
    }, 10)
    
}

function stop(){
    clearInterval(interval);
}
function reset(){
    clearInterval(interval);
    
    hours=0;seconds=0;mins=0;miliseconds=0;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('min').innerHTML = mins;
    document.getElementById('sec').innerHTML = seconds;
    document.getElementById('milliSec').innerHTML=miliseconds;
    
}
function markLap(){
    
    if(seconds==0||miliseconds==0){

        alert("Sorry No Lap Can generated");
    }else{
        count++;
        
        document.getElementById('paragraph').innerHTML+='<br>'+'Lap No. '+count+'_______________'+hours+' : '+mins+' : '+seconds+' : '+miliseconds;
    }

 
    

}


// setTimeout(function(){
// clearInterval(interval)
// },1000)







