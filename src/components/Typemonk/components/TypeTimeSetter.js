import React from "react";
import Card from "../../UI/components/Card";
import style from "../css/TypeTimeSetter.module.css";
export default function TypeTimeSetter(props) {

const timeArray = [15,30,60,120,300,600]
  const onClickHandler = (event)=>{
    props.timeSetterHandler(Number(event.target.textContent))
  }
  return (
    <Card className={style.TypeTimeSetter}>
      {
      timeArray.map((element)=>{
        return <div key={element} className={style.duration} onClick={onClickHandler}>{element}</div>
      })
    }
    </Card>
  );
}
