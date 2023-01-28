import { createContext, useState } from "react";
import "./App.css";
import TypeContainer from "./components/Typemonk/components/TypeContainer";
import TypeTimeSetter from "./components/Typemonk/components/TypeTimeSetter";
import Navbar from "./components/UI/components/Navbar";
import Footer from "./components/UI/components/Footer";
import typeContext from "./components/Typemonk/context/TypeContext";
function App() {
  const [maxTime, setMaxTime] = useState(15);
  const [IsMouseMove, setIsMouseMove] = useState(true);
  const [timeout,setTimeOut] = useState(null)

  const moveMouseHandler = () => {
    setIsMouseMove(true);
    clearTimeout(timeout);
    setTimeOut(setTimeout(function(){setIsMouseMove(true)}, 3000));
  };
  //this is a trial

  return (
    <typeContext.Provider value={{startAgain: null,resetTimer:setMaxTime}}>
    <div className="AppContainer" onMouseMove={moveMouseHandler}>
      <div className="navbar-container">{IsMouseMove && <Navbar />}</div>
      <div className="mid">
        <div className="timesetter-container">{IsMouseMove && <TypeTimeSetter/>}</div>
        <TypeContainer maxTime={maxTime}/>
      </div>
      <div className="footer">
        {IsMouseMove && <Footer/>}
      </div>
    </div>
    </typeContext.Provider>
  );
}

export default App;
