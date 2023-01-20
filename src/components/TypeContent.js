import React from "react";
import style from "./TypeContent.module.css"
export default function TypeContent(props) {
  // console.log("INSIDE TYPECONTENT", props.wordList);
  const wordList = props.wordList;
  let wordStyle=""
  // if (props.isMatch===true)
  // {
  //   wordStyle=
  // }
  return (
    // <div>{props.wordList}</div>
    <div>
      {wordList.map((word,id) => {
        console.log("inside map: ",word,id,props.activeWord);
        if(id==props.activeWord)
        {
          return (<span key={id}>
                  <span className={style.current}>{word}</span>
                  <span> </span>
                </span>);
        }
        else if (id<props.activeWord)
        { 
          console.log("wrong ",style.wrong)
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
    </div>
  );
}
