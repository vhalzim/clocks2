import react from "react";
import CountdownWatch from "./components/CountdownWatch";
import StopWatch from "./components/Stopwach";
import CurrenTime from "./components/currentTime";
import "./index.css"
import Slider from "infinite-react-carousel/lib/carousel/slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'



function App() { return(
  <div className=" relative flex  items-start justify-center w-screen h-screen bg-grey-blue text-lime font-sans">

    <Slider prevArrow={<FontAwesomeIcon icon={faArrowRight}/>} nextArrow={<FontAwesomeIcon icon={faArrowLeft}/>} dots className=" mt-52 overflow-y-visible  w-screen h-1/2 bg-grey-blue text-lime font-sans">
      <div>

      <CurrenTime />
      </div>
      <div>
      <StopWatch />
      </div>
      <div>
      <CountdownWatch />
      </div>
    </Slider>

    <button type="button" className="absolute right-3 text-xl lg:text-3xl top-1/2 bg-dark-teal rounded-full shadow-[#094240]  shadow-md px-1"><FontAwesomeIcon icon={faArrowRight}/></button>
    <button type="button" className="absolute left-3 text-xl lg:text-3xl top-1/2 bg-dark-teal rounded-full shadow-[#094240]  shadow-md  px-1 " ><FontAwesomeIcon icon={faArrowLeft}/></button>
 
  

 



  </div>

)
 
}

export default App;
