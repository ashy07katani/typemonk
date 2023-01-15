import React, { useState } from "react";
import TypeContent from "./TypeContent";
import TypeArea from "./TypeArea";
import paraList from "./ParagraphList";
export default function TypeContainer() {
  const MAX_TIME = 60;
  const index = Math.floor(Math.random() * (paraList.length + 1));
  const paragraphToType = paraList[index];
  const wordList = paragraphToType.split(" ");
  const [timeElapsed, setTimeElapsed] = useState(MAX_TIME);
  return (
    <>
      <TypeContent paraContent={paragraphToType}></TypeContent>
      <TypeArea
        paraContent={paragraphToType}
        timeElapsed={timeElapsed}
        wordList={wordList}
      ></TypeArea>
    </>
  );
}
