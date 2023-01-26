import React from "react";
import Card from "../../UI/components/Card";
import style from "../css/TypeTimeSetter.module.css";
export default function TypeTimeSetter() {
  // const moveMouseHandler = ()=>{
  //     console.log("mouse moved")
  // }
//   var timeout;
//   document.onmousemove = function () {
    
//   };

  return (
    <Card className={style.TypeTimeSetter}>
      <div className={style.duration}>15</div>
      <div className={style.duration}>30</div>
      <div className={style.duration}>60</div>
      <div className={style.duration}>120</div>
      <div className={style.duration}>500</div>
      <div className={style.duration}>600</div>
    </Card>
  );
}
