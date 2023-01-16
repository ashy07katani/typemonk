import React, { useState, useEffect } from "react";

export default function TypeArea(props) {
  const MAX_TIME = 40;
  const allowedKey = [
    32, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 65, 66, 67, 68,
    69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
    88, 89, 90, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198,
    199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213,
    214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 173,
  ];
  const paragraphToType = props.paraContent;
  const wordList = props.wordList;
  const [textAreaDisabled,setTextAreaDisabled]=useState(false);
  const [wordIndex, setwordIndex] = useState(0);
  const [formedCurWord, setFormedCurWord] = useState("");
  const [totalKeysPressed, setTotalKeysPressed] = useState(0);
  const [testInfo, setTestInfo] = useState({
    timeElapsed: 0,
    paragraphFormed: "",
    totalKeysPressed: 0,
    WPM: 0,
    accuracy: 0,
  });

  //FUNCTION TO CALCULATE WPM
  const calculateAccuracy = (totalKeyPressed, correctKeyPressed) => {
    console.log(
      "accuracy calculating",
      totalKeyPressed,
      correctKeyPressed,
      correctKeyPressed / totalKeyPressed,
      Math.round(correctKeyPressed / totalKeyPressed)
    );
    if (totalKeyPressed == 0) {
      return 0;
    }
    return (correctKeyPressed / totalKeyPressed).toFixed(2) * 100;
  };
  const calculateWPM = (content, timeElapsed) => {
    console.log("content: ", content);
    if (content.length == 0) {
      return 0;
    }
    let Total_Keys_Pressed = content.length;
    console.log("Correct keys pressed so far : ", Total_Keys_Pressed);
    let Total_Number_of_Words = Total_Keys_Pressed / 5;
    console.log("Correct words so far : ", Total_Number_of_Words);
    let Time_Elapsed_in_Minutes = timeElapsed / 60;
    console.log("Time Elapsed so far : ", Time_Elapsed_in_Minutes);
    let WPM = Math.ceil(Total_Number_of_Words / Time_Elapsed_in_Minutes);
    console.log("Current WPM : ", WPM);
    return WPM;
  };
  const matchFound = (expected, original) => {
    return expected === original;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTestInfo((preVal) => {
        if (MAX_TIME - preVal.timeElapsed == 0) {
          setTextAreaDisabled(true)
          clearInterval(interval); return preVal;
          // return clearInterval(interval);
        }
        return {
          ...preVal,
          timeElapsed: preVal["timeElapsed"] + 1,
          WPM: calculateWPM(preVal.paragraphFormed, preVal.timeElapsed),
          accuracy: calculateAccuracy(
            preVal.totalKeysPressed,
            preVal.paragraphFormed.length
          ),
        };
      });
    }, 1000);
  }, []);

  //THIS IS A CHANGE HANDLER
  const changeHandler = (event) => {
    console.log(event.target.value);
  };

  //THIS IS A KEY DOWN HANDLER
  const keyDownHandler = (event) => {
    let curLetter = "";
    let curtestInfo = {};
    if (event.keyCode === 32) {
      if (matchFound(formedCurWord, wordList[wordIndex])) {
        curLetter = " ";
        setFormedCurWord("");
        setTestInfo((preVal) => {
          return {
            ...preVal,
            totalKeysPressed: preVal["totalKeysPressed"] + 1,
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
    }
    else if(event.keyCode === 8)
    {
        setFormedCurWord((preVal) => {
          return preVal.slice(0, -1);
        });
        setTestInfo((preVal) => {
          return {
            ...preVal,
            paragraphFormed: preVal["paragraphFormed"].slice(0, -1),
          };
        });
    }

    else if (allowedKey.includes(event.keyCode)) {
          console.log("you know a valid key is pressed");
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
    }
  }

  return (
    <>
      <textarea
        name=""
        id=""
        cols="150"
        rows="10"
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        value={formedCurWord}
        disabled={textAreaDisabled}
      ></textarea>
      <p>
        <span>{testInfo ? testInfo.WPM : 0}</span>
        <span> </span>
        <span>{testInfo ? testInfo.accuracy : 0}</span>
        <span> </span>
        <span>{testInfo ? MAX_TIME - testInfo.timeElapsed : 0}</span>
      </p>
    </>
  );
}
