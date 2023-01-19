import React, { useState } from "react";
import TypeContent from "./TypeContent";
import TypeArea from "./TypeArea";
import paraList from "./ParagraphList";
export default function TypeContainer() {
  const MAX_TIME = 60;
  const index = Math.floor(Math.random() * (paraList.length + 1));
  const [paragraphToType,setParagraphToType] = useState(paraList[index]);
  const wordList = paragraphToType.split(" ");
  const [timeElapsed, setTimeElapsed] = useState(MAX_TIME);
  const [activeWord,setActiveWord] = useState(0)
  const wordChecker=(value)=>
  {
      setIsWordCorrect(value)
  }
  const incWordIndex = ()=>{
    setActiveWord((prev)=>
    {
      return prev+1;
    }
    )
  }
  return (
    <>
      <TypeContent paraContent={paragraphToType} wordList={wordList} activeWord={activeWord}></TypeContent>
      <TypeArea
        paraContent={paragraphToType}
        timeElapsed={timeElapsed}
        wordList={wordList}
        wordChecker={wordChecker}
        incWordIndex={incWordIndex}
      ></TypeArea>
    </>
  );
}
