import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'




function CurrenTime() {
  let hour = new Date().toLocaleTimeString();
  const [time, setTime] = useState(hour)
  const [timeList, setTimelist] = useState ([])
  const [buttonState,setButtonState] = useState(false)

  function handleClick(){
   setTimelist(
     (prevValue)=>{
     return ([...prevValue, time])
      }
    )
    setButtonState(true)
  }
  function handleClearButton(){
    setTimelist ([])
    setButtonState(false)
  }
  

 var clock = ()=>{
  let newHour = new Date().toLocaleTimeString();
   setTime(newHour)
 }

setInterval(clock, 1000)


  return (
    <div className="flex flex-col items-center pb-40">
 
      <h1  className="text-9xl" >{time}</h1> 
  
      <button className="flex bg-dark-teal mt-5 w-7 h-7 justify-center items-center text-2xl rounded-full shadow-[#094240]  shadow-md hover:shadow-none hover:bg-[#37a6a2]" type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={faPlus}/>
    
      </button>
      <div className="flex  w-40  max-h-[8rem] my-5 text-clip overflow-hidden overflow-y-auto ">
        <ul className="text-2xl">
          {timeList.map(timeItem => {
              return <li>{timeItem}</li>
            }
            )}
        </ul> 
      </div>
      {buttonState === true && (<button className="flex bg-dark-teal font-bold px-2 justify-center items-center text-lg rounded-full shadow-[#094240]  shadow-md hover:shadow-none hover:bg-[#37a6a2]" type="button" onClick={handleClearButton}>Clear</button>)}

    </div>
  );
}

export default CurrenTime