import { useState } from "react";
import "./App.css";
import TypeContainer from "./components/Typemonk/components/TypeContainer";
import TypeTimeSetter from "./components/Typemonk/components/TypeTimeSetter";
import Navbar from "./components/UI/components/Navbar";
import Footer from "./components/UI/components/Footer";
function App() {
  const [maxTime, setMaxTime] = useState(0);
  const [IsMouseMove, setIsMouseMove] = useState(true);
  const [timeout,setTimeOut] = useState(null)
  const moveMouseHandler = () => {
    setIsMouseMove(true);
    clearTimeout(timeout);
    setTimeOut(setTimeout(function(){setIsMouseMove(false)}, 3000));
  };
  return (
    <div className="AppContainer" onMouseMove={moveMouseHandler}>
      <div className="navbar-container">{IsMouseMove && <Navbar />}</div>
      <div className="mid">
        <div className="timesetter-container">{IsMouseMove && <TypeTimeSetter/>}</div>
        <TypeContainer />
      </div>
      <div className="footer">
        {IsMouseMove && <Footer/>}
      </div>
    </div>
  );
}

export default App;
