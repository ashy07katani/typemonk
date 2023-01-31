import React, { useState } from "react";
import TypeContent from "./TypeContent";
import TypeArea from "./TypeArea";
import paraList from "./ParagraphList";
import Card from "../../UI/components/Card";
import style from "../css/TypeContainer.module.css";
export default function TypeContainer(props) {
  const MAX_TIME = 60;
  const index = Math.floor(Math.random() * (paraList.length + 1));
  const [paragraphToType, setParagraphToType] = useState(paraList[index]);
  const wordList = paragraphToType.split(" ");
  const [timeElapsed, setTimeElapsed] = useState(MAX_TIME);
  const [activeWord, setActiveWord] = useState(0);
  const [spacePressed, setSpacePressed] = useState(false);
  const [topScroll, setTopScroll] = useState(0);
  const setInitialTopScroll = (value) => {
    setTopScroll(value);
  };
  const isSpacePressed = (value) => {
    setSpacePressed(value);
  };
  const wordChecker = (value) => {
    setIsWordCorrect(value);
  };
  const incWordIndex = () => {
    setActiveWord((prev) => {
      return prev + 1;
    });
  };
  const tryAgain = () => {
    const newIndex = Math.floor(Math.random() * (paraList.length + 1));
    setParagraphToType(paraList[newIndex]);
    setActiveWord(0);
    setTopScroll(0);
  };
  return (
    <Card className={style.TypeContainer}>
      <TypeContent
        paraContent={paragraphToType}
        wordList={wordList}
        activeWord={activeWord}
        spacePressed={spacePressed}
        topScroll={topScroll}
        setTopScroll = {setInitialTopScroll}
      ></TypeContent>
      <TypeArea
        paraContent={paragraphToType}
        timeElapsed={timeElapsed}
        wordList={wordList}
        wordChecker={wordChecker}
        incWordIndex={incWordIndex}
        tryAgain={tryAgain}
        maxTime={props.maxTime}
        isSpacePressed={isSpacePressed}
        setInitialTopScroll={setInitialTopScroll}
      ></TypeArea>
    </Card>
  );
}
