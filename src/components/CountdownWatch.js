import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faPause,faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'


function CountdownWatch() { 
    const [time, setTime] = useState({s:0, m:0, h:0, d:0})
    const [buttonState, setButtonState] = useState(false)
    const [enabled, setEnabled] = useState(false)
    const [timeInput, SetTimeInp] = useState({s:0, m:0, h:0, d:0}) 


//Function to run the Countdown
    var countdownSeconds = time.s;
    var countdownMinutes = time.m;
    var countdownHours = time.h;
    var countdownDays = time.d;

    function run(){
      if(countdownSeconds === 0 && countdownMinutes >= 0){
        countdownSeconds = 60
        countdownMinutes--
      }if( countdownMinutes ===-1 && countdownHours > 0){
        countdownMinutes= 59
        countdownHours--
      }
      if (countdownSeconds===60 && countdownMinutes===-1 && countdownHours === 0 && countdownDays >0){
        countdownHours= 23
        countdownMinutes=59
        countdownDays--

      }else if (countdownSeconds===60 && countdownMinutes ===-1 && countdownDays === 0){
        countdownSeconds = 1
        countdownMinutes = 0
        setButtonState(false)
        alert("time up!")
      }

        countdownSeconds--
        return (setTime({s:countdownSeconds, m:countdownMinutes, h:countdownHours, d:countdownDays}))
   
    }
  

    useEffect(() => {
        let interval= null;
      
          if (buttonState === true) { 
            interval = setInterval(run, 1000) 
      
          }  else {
            clearInterval(interval)}
      
            return() => clearInterval(interval)
      
      
        }, [buttonState])

//function to set the countdown

function valueInput (e){
  const {value, name} = e.target;
  if (name === "days"){
    SetTimeInp(prevValue => ({...prevValue, d:value}))
  } if (name === "hours") {
    SetTimeInp(prevValue => ({...prevValue, h:value}))
  }  if (name === "minutes") {
    SetTimeInp(prevValue => ({...prevValue, m:value}))
  } if (name === "seconds") {
    var seconds = (value%60)
    SetTimeInp(prevValue => ({...prevValue, s:value}))
  } 

}

var countdownSecondsIn = timeInput.s;
var countdownMinutesIn = timeInput.m;
var countdownHoursIn = timeInput.h;
var countdownDaysIn = timeInput.d;


function timeSetter(){
  var hours = (countdownHoursIn%24)
  var minutes = (countdownMinutesIn%60)
  var seconds = (countdownSecondsIn%60)
  
  countdownDaysIn === ""? countdownDaysIn = 0 : countdownDaysIn= timeInput.d
  countdownHoursIn > 23? countdownDaysIn = countdownDaysIn + (Math.floor(countdownHoursIn/24)) : countdownHoursIn = hours; 
  countdownHoursIn = hours;
  countdownMinutesIn> 59? countdownHoursIn = countdownHoursIn + (Math.floor(countdownMinutesIn/60)) : countdownMinutesIn = minutes; 
  countdownMinutesIn = minutes;
  countdownSecondsIn > 59? countdownMinutesIn = countdownMinutesIn + (Math.floor(countdownSecondsIn/60)) : countdownSecondsIn = seconds; 
  countdownSecondsIn = seconds;
  return (setTime({s:countdownSecondsIn, m:countdownMinutesIn, h:countdownHoursIn, d:countdownDaysIn}))
  
}



// function to stringify single digits numbers onto "0x" numbers
    function cloker(number){
      if (number<10){return ("0"+number)}
      else{return (number)}
    }


    var clokedSeconds = cloker(time.s)
    var clokedMinutes = cloker(time.m)
    var clokedHours = cloker(time.h)
    var clokedDays = cloker(time.d)

//onClick
 function handleClick(){
  timeSetter()
  setEnabled(true)
  setButtonState(true)
  SetTimeInp({s:0, m:0, h:0, d:0})
 }
 
 function handleResetClick() {
   setButtonState(false)
  setEnabled(false)
  setTime({s:0, m:0, h:0, d:0})
 } 

 
  
   return (
    <div className="flex flex-col items-center ">
       {enabled ? (<h1 className="text-4xl lg:text-9xl"> {clokedDays} : {clokedHours} : {clokedMinutes} : {clokedSeconds} </h1>):(
        <div className="text-xl lg:text-9xl">
          <input className="bg-grey-blue max-w-[3rem] text-4xl lg:text-9xl lg:max-w-[9rem] text-right ml-4  focus:outline-none " onChange={valueInput} value={timeInput.d} name="days" min="00"  placeholder="00d" />d : 
          <input className="bg-grey-blue max-w-[3rem] text-4xl lg:text-9xl lg:max-w-[9rem] text-right ml-4  focus:outline-none " onChange={valueInput} value={timeInput.h} name="hours"  placeholder="00" maxLength="2"/>h : 
          <input className="bg-grey-blue max-w-[3rem] text-4xl lg:text-9xl lg:max-w-[9rem] text-right ml-4  focus:outline-none " onChange={valueInput} value={timeInput.m} name="minutes"  placeholder="00" maxLength="2"/>m : 
          <input className="bg-grey-blue max-w-[3rem] text-4xl lg:text-9xl lg:max-w-[9rem] text-right ml-4  focus:outline-none " onChange={valueInput} value={timeInput.s} name="seconds"   placeholder="00" maxLength="2"/>s
        </div>
       )}

    
      {enabled ? (
      <div className="grid grid-cols-2 gap-4 lg:gap-60 w-2/4 mt-5 text-xl">
        <button className="bg-dark-teal rounded-full shadow-[#094240]  shadow-md hover:shadow-none hover:bg-[#37a6a2]" type="button" onClick={() => setButtonState(!buttonState)}>{buttonState === true? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}</button>
        <button className="bg-ligth-green rounded-full shadow-[#094240]  shadow-md hover:shadow-none" type="button" onClick={handleResetClick}><FontAwesomeIcon icon={faArrowRotateLeft}/></button>
      </div>
      ) : (<button className="text-xl mt-3 w-28 bg-dark-teal rounded-full shadow-[#094240]  shadow-md hover:shadow-none hover:bg-[#37a6a2]" type="button" onClick={handleClick}><FontAwesomeIcon icon={faPlay}/></button>) }
       

       
      
     </div>
   )
 
}

export default CountdownWatch;