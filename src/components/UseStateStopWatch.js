import { useState } from "react";


function  UseStateStopWatch() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0})

  
  

  function play(){
    setInterval (run, 10)

  }

  
  var updatedMs = time.ms;
  var updatedS = time.s;
  var updatedM = time.m;
  var updatedH = time.h;
  
  var run = () => {
    if (updatedMs === 99){
      updatedS++;
      updatedMs = 0; 
    } if (updatedS === 60){
      updatedM++;
      updatedS=0;
    } if (updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    updatedMs++
    return (setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH}))
  }

  // function to stringify single digits numbers onto "0x" numbers
  function cloker(number){
    if (number<10){return ("0"+number)}
    else{return (number)}
  }
  var clokedMseconds = cloker(time.ms)
  var clokedSeconds = cloker(time.s)
  var clokedMinutes = cloker(time.m)
  var clokedHours = cloker(time.h)



 return (
   <div>
     <h1> {clokedHours} : {clokedMinutes} : {clokedSeconds} : {clokedMseconds} </h1>
     <button type="button" onClick={play}>play</button>
     <button type="button" >stop</button>
   </div>
 )
}

export default UseStateStopWatch;
