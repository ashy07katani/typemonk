import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import Card from "../../UI/components/Card";
import typeContext from "../context/TypeContext";
import style from "../css/TypeContent.module.css";

export default function TypeContent(props) {
  const wordList = props.wordList;
  const contentBoxRef = useRef(null);
  const activeTextRef = useRef(null);
  
  if (contentBoxRef.current != null && activeTextRef.current!=null) {
    contentBoxRef.current.scrollTop = props.topScroll
    let lineHeight = parseInt(window.getComputedStyle(contentBoxRef.current).lineHeight);
    if(activeTextRef.current.offsetTop > contentBoxRef.current.scrollTop+5 && props.activeWord!=0)
    {
      props.setTopScroll( contentBoxRef.current.scrollTop+(lineHeight*1.1) )
    }
  }

  return (
    <Card className={style.TypeContent}>
      <div id={style.typeContent} ref={contentBoxRef}>
        {wordList.map((word, id) => {
          if (id == props.activeWord) {
            return (
              <span key={id} ref={activeTextRef}>
                <span className={style.current}>{word}</span>
                <span> </span>
              </span>
            );
          } else if (id < props.activeWord) {
            return (
              <span key={id}>
                <span className={style.correct}>{word}</span>
                <span> </span>
              </span>
            );
          } else {
            return (
              <span key={id}>
                <span className={style.otherwise}>{word}</span>
                <span> </span>
              </span>
            );
          }
        })}
      </div>
    </Card>
  );
}
