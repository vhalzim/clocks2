import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faPause,faArrowRotateLeft,faStopwatch } from '@fortawesome/free-solid-svg-icons'



function StopWatch() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
  const [buttonState, setButtonState] = useState(false)
  const [resetButton, setResetButton] = useState(false)
  const [laps, setLaps] = useState ([])


// Stopwatch
  var updatedMs = time.ms;
  var updatedS = time.s;
  var updatedM = time.m;
  var updatedH = time.h;


//the updatedMs variable has lower limit than 100 in order to compensate the 0.05sec(round) that the scripts takes to run.
//to avoid a constant delay of the stopwatch is sacrificed acuracy in the time of lap.
//changing the interval time was tried, but rounding the limit of the updatedMs variable has proveen to be more acurate.  
  var run = () => {
    if (updatedMs === 95){
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


  useEffect(() => {
  let interval= null;

    if (buttonState === true) { 
      interval = setInterval(run, 10) 

    }  else {
      clearInterval(interval)}

      return() => clearInterval(interval)


  }, [buttonState])

//buttons


  function HandleResetButton(){
    setButtonState(false)
    setTime({ms:0, s:0, m:0, h:0})
    setResetButton(false)
    setLaps([])
  }


  function handlePlayClick(){
    setButtonState (!buttonState)
    setResetButton(true)
  }


function handleLapClick(){
  setLaps(
    (prevValue)=>{
    return ([...prevValue, time])
     }
   )
 }






// function to stringify single digits numbers onto "0x" numbers
  function cloker(number){
    if (number<10){return ("0"+number)}
    else{return (number)}
  }

  var clokedMseconds = cloker (time.ms)
  var clokedSeconds = cloker(time.s)
  var clokedMinutes = cloker(time.m)
  var clokedHours = cloker(time.h)



  return (
    <div className="flex flex-col items-center ">
          <h1 className="text-4xl lg:text-9xl" > {clokedHours} : {clokedMinutes} : {clokedSeconds} : {clokedMseconds} </h1>
         
          <div className="grid grid-cols-3  gap-2 lg:gap-44 w-2/3 mt-5 text-xl">
            {resetButton === true && (<button className=" bg-ligth-green rounded-full shadow-[#094240]  shadow-md hover:shadow-none" onClick={HandleResetButton}><FontAwesomeIcon icon={faArrowRotateLeft}/></button>) } 
            <button className="col-start-2 col-end-3 bg-dark-teal rounded-full shadow-[#094240]  shadow-md hover:shadow-none hover:bg-[#37a6a2]" onClick={handlePlayClick}>{buttonState === true? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}</button> 
            {buttonState === true && (<button type="button" className=" bg-ligth-green rounded-full shadow-[#094240]  shadow-md hover:shadow-none " onClick={handleLapClick}><FontAwesomeIcon icon={faStopwatch}/></button>)}
          </div>

          <div className="flex  w-48  max-h-[8rem] my-5 text-clip overflow-hidden overflow-y-auto justify-center">
            <ul className="text-xl lg:text-2xl ">
                {laps.map(lap => {
                   var clokedLapMseconds = cloker (lap.ms)
                   var clokedLapSeconds = cloker(lap.s)
                   var clokedLapMinutes = cloker(lap.m)
                   var clokedLapHours = cloker(lap.h)
                return <li> {clokedLapHours} : {clokedLapMinutes} : {clokedLapSeconds} : {clokedLapMseconds}</li>
                  }
                )}
            </ul>
          </div>


  
    </div>

  )
}

export default StopWatch;