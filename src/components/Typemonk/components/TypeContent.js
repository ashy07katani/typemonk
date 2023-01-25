import React from "react";
import Card from "../../UI/components/Card";
import style from "../css/TypeContent.module.css"
export default function TypeContent(props) {
  const wordList = props.wordList;
  let wordStyle=""
  return (
    <Card className={style.TypeContent}>
      {wordList.map((word,id) => {
        if(id==props.activeWord)
        {
          return (<span key={id}>
                  <span className={style.current}>{word}</span>
                  <span> </span>
                </span>);
        }
        else if (id<props.activeWord)
        { 
          return (
          <span key={id}>
                  <span className={style.correct}>{word}</span>
                  <span> </span>
          </span>
        );
        }
        else
        {
          return(
          <span key={id}>
                  <span className={style.otherwise}>{word}</span>
                  <span> </span>
          </span>
          );
        }
        // return (
        //   <span key={id}>
        //     <span className={style.current}>{word}</span>
        //     <span> </span>
        //   </span>
        // );
      })}
    </Card>
  );
}
