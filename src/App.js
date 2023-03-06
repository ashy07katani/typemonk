import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TypeContainer from "./components/Typemonk/components/TypeContainer";
import TypeTimeSetter from "./components/Typemonk/components/TypeTimeSetter";
import Navbar from "./components/UI/components/Navbar";
import Footer from "./components/UI/components/Footer";
import TypeLogin from "./components/Typemonk/components/TypeLogin";
import typeContext from "./components/Typemonk/context/TypeContext";
import TypeLeaderBoard from "./components/Typemonk/components/TypeLeaderBoard";
import TypeUserProfile from "./components/Typemonk/components/TypeUserProfile";
const getUserNameCookie = ()=>{
	let cook = decodeURIComponent(document.cookie)
	let ca = cook.split(";")
	let username=""
	ca.forEach((item)=>{
		if(item.indexOf("username=")>0)
			username = item.slice(item.indexOf("username=")+"username=".length)
	}
	)
	console.log("inside getcookie function",username)
	return username
}
function App() {
  
  const cookieFetchedUsername = getUserNameCookie()
  
  const [maxTime, setMaxTime] = useState(15);
  const [IsMouseMove, setIsMouseMove] = useState(true);
  const [timeout, setTimeOut] = useState(null);
  const [selected, setSelected] = useState(0);
  const [user,setUser] = useState(cookieFetchedUsername)
  const moveMouseHandler = () => {
    setIsMouseMove(true);
    clearTimeout(timeout);
    setTimeOut(
      setTimeout(function () {
        setIsMouseMove(true);
      }, 5000)
    );
  };
  const onLogoutClearUserName = ()=>{
	  setUser("")
  }
  //this is a trial
  const setCurUser = (username)=>{
	  setUser(username)
  }
  const selectHandler = (value) => {
    setSelected(value);
  };
  return (
    <Router>
      <typeContext.Provider
        value={{ startAgain: null, resetTimer: setMaxTime }}
      >
        <div className="AppContainer" onMouseMove={moveMouseHandler}>
          <div className="navbar-container">{IsMouseMove && <Navbar user={user}  onLogoutClearUserName={onLogoutClearUserName}/>}</div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="mid">
                  <div className="timesetter-container">
                    {IsMouseMove && (
                      <TypeTimeSetter
                        selectHandler={selectHandler}
                        selectedIndex={selected}
                      />
                    )}
                  </div>
                  <TypeContainer maxTime={maxTime} />
                </div>
              }
            ></Route>
            <Route exact path="/login" element={<TypeLogin setCurUser={setCurUser}/>}></Route>
            <Route
              exact
              path="/leaderboard"
              element={<TypeLeaderBoard />}
            ></Route>
            <Route exact path="/profile" element={<TypeUserProfile />}></Route>
          </Routes>

          <div className="footer">{IsMouseMove && <Footer />}</div>
        </div>
      </typeContext.Provider>
    </Router>
  );
}
{
  /* <Route exact path='/' element={< Home />}></Route>
<Route exact path='/about' element={< About />}></Route>
<Route exact path='/contact' element={< Contact />}></Route> */
}
export default App;
