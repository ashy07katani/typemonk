import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Modal from "../../UI/components/Modal";
import style from "../css/TypeArea.module.css";
import typeContext from "../context/TypeContext";
export default function TypeArea(props) {
  const MAX_TIME = 10;
  const allowedKey = [
    32, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 65, 66, 67, 68,
    69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
    88, 89, 90, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198,
    199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213,
    214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 173,
  ];
  //this is a trial
  let resetTimer = useContext(typeContext);
  const wordList = props.wordList;
  // let interval = null
  const [textAreaDisabled, setTextAreaDisabled] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [wordIndex, setwordIndex] = useState(0);
  const [formedCurWord, setFormedCurWord] = useState("");
  const [totalKeysPressed, setTotalKeysPressed] = useState(0);
  const [wrongClass, setWrongClass] = useState("");
  //this is a trail
  const [myInterval,setMyInterval] = useState(null)
  const [testInfo, setTestInfo] = useState({
    timeElapsed: 0,
    paragraphFormed: "",
    totalKeysPressed: 0,
    WPM: 0,
    accuracy: 0,
    wpmArray: [],
    rawArray: [],
    curWordIndex: 0,
  });

  //FUNCTION TO CALCULATE WPM
  const calculateAccuracy = (totalKeyPressed, correctKeyPressed) => {
    if (totalKeyPressed == 0) {
      return 0;
    }
    return (correctKeyPressed / totalKeyPressed).toFixed(2) * 100;
  };
  const calculateWPM = (content, timeElapsed) => {
    if (content.length === 0 || timeElapsed === 0) {
      return 0;
    }
    let Total_Keys_Pressed = content.length;
    let Total_Number_of_Words = Total_Keys_Pressed / 5;
    let Time_Elapsed_in_Minutes = timeElapsed / 60;
    let WPM = Math.ceil(Total_Number_of_Words / Time_Elapsed_in_Minutes);
    return WPM;
  };
  const calculateRAW = (Total_Keys_Pressed, timeElapsed) => {
    if (timeElapsed === 0) {
      return 0;
    }
    let Total_Number_of_Words = Total_Keys_Pressed / 5;
    let Time_Elapsed_in_Minutes = timeElapsed / 60;
    let RAW = Math.ceil(Total_Number_of_Words / Time_Elapsed_in_Minutes);
    return RAW;
  };
  const matchFound = (expected, original) => {
    if (expected === original) setFormedCurWord("");
    else {
      setWrongClass(style.wrong);
    }
    return expected === original;
  };

  const startTimer = () => {
    clearInterval(myInterval);
     setMyInterval(setInterval(() => {
      setTestInfo((preVal) => {
        console.log("total keys pressed",preVal.totalKeysPressed)
        //condition for timer change.
        //clearInterval(interval);
        if (
          MAX_TIME - preVal.timeElapsed == 0 ||
          preVal.curWordIndex === wordList.length
        ) {
          setIsOver(true);
          setTextAreaDisabled(true);
          setWrongClass("");
          clearInterval(myInterval);
          return preVal;
          // return clearInterval(interval);
        }
        return {
          ...preVal,
          timeElapsed: preVal["timeElapsed"] + 1,
          WPM: calculateWPM(preVal.paragraphFormed, preVal.timeElapsed),
          wpmArray: [
            ...preVal["wpmArray"],
            calculateWPM(preVal.paragraphFormed, preVal.timeElapsed),
          ],
          rawArray: [
            ...preVal["rawArray"],
            calculateRAW(preVal.totalKeysPressed, preVal.timeElapsed),
          ],
          accuracy: calculateAccuracy(
            preVal.totalKeysPressed,
            preVal.paragraphFormed.length
          ),
        };
      });
    }, 1000)
     )
  };
  const stopTimer = ()=>{
    return clearInterval(myInterval);
  }

  const tryAgain = () => {
    console.log("Try again is called")
    props.tryAgain();
    setTestInfo({
      timeElapsed: 0,
      paragraphFormed: "",
      totalKeysPressed: 0,
      WPM: 0,
      accuracy: 0,
      wpmArray: [],
      rawArray: [],
      curWordIndex: 0,
    });
    setWrongClass("");
    setTextAreaDisabled(false);
    setIsOver(false);
    setwordIndex(0);
    setFormedCurWord("");
    setTotalKeysPressed(0);
    stopTimer();
  };

  //this is a trail
  const tryAgainTA = ()=>{
    tryAgain();
  }
  resetTimer.startAgain = tryAgainTA
  console.log(resetTimer.startAgain)
  // resetTimer.startAgain=tryAgain
  //THIS IS A CHANGE HANDLER
  const changeHandler = (event) => {
    console.log(event.target.value);
  };

  //THIS IS A KEY DOWN HANDLER
  const keyDownHandler = (event) => {
    let curLetter = "";
    if (event.keyCode === 32) {
      if (matchFound(formedCurWord, wordList[wordIndex])) {
        setWrongClass("");
        curLetter = " ";
        props.incWordIndex();
        setTestInfo((preVal) => {
          return {
            ...preVal,
            totalKeysPressed: preVal["totalKeysPressed"] + 1,
            curWordIndex: preVal["curWordIndex"] + 1,
          };
        });
        setwordIndex((preVal) => {
          return preVal + 1;
        });
        setTestInfo((preVal) => {
          return {
            ...preVal,
            paragraphFormed: preVal["paragraphFormed"].concat(curLetter),
          };
        });
      }
    } else if (event.keyCode === 8) {
      if (wrongClass !== "") {
        setWrongClass("");
      }
      setFormedCurWord((preVal) => {
        return preVal.slice(0, -1);
      });
      setTestInfo((preVal) => {
        return {
          ...preVal,
          paragraphFormed: preVal["paragraphFormed"].slice(0, -1),
        };
      });
    } else if (allowedKey.includes(event.keyCode)) {
      setTestInfo((preVal) => {
        return {
          ...preVal,
          totalKeysPressed: preVal["totalKeysPressed"] + 1,
        };
      });
      setTotalKeysPressed((preVal) => {
        return preVal + 1;
      });
      curLetter = event.key;
      setFormedCurWord((preVal) => {
        return preVal.concat(curLetter);
      });
      setTestInfo((preVal) => {
        return {
          ...preVal,
          paragraphFormed: preVal["paragraphFormed"].concat(curLetter),
        };
      });
      //CHECK IF THIS IS THE FIRST KEY PRESSED. IF YES START THE TIMER.
      if (testInfo.totalKeysPressed === 0) {
         startTimer();
      }
    }
    
  };
  return (
    <>
      {isOver && (
        <Modal
          tryAgain={tryAgain}
          wpmArray={testInfo.wpmArray}
          rawArray={testInfo.rawArray}
          accuracy={testInfo.accuracy}
          wpm={testInfo.WPM}
        />
      )}
      <textarea
        name=""
        id=""
        cols="150"
        rows="2"
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        value={formedCurWord}
        disabled={textAreaDisabled}
        className={wrongClass + " " + style.TypeArea}
      ></textarea>
      <p>
        <span>WPM: {testInfo ? testInfo.WPM : 0}</span>
        <span> </span>
        <span>Accuracy: {testInfo ? testInfo.accuracy : 0}</span>
        <span> </span>
        <span>
          Time Elaspsed: {testInfo ? MAX_TIME - testInfo.timeElapsed : 0}
        </span>
      </p>
    </>
  );
}
