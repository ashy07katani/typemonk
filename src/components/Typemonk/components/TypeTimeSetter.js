import React, { useState } from "react";
import { useContext } from "react";
import Card from "../../UI/components/Card";
import typeContext from "../context/TypeContext";
import style from "../css/TypeTimeSetter.module.css";
export default function TypeTimeSetter(props) {
const contextVariable  = useContext(typeContext)
const [selected,setSelected] = useState(0);
// console.log(contextVariable.startAgain)
const timeArray = [15,30,60,120,300,600]
  const onClickHandler = (event,id)=>{
    setSelected(id)
    console.log("The selected value is ",selected)
    contextVariable.startAgain()
    contextVariable.resetTimer(Number(event.target.textContent))
    // Number(event.target.textContent)
  }
  return (
    <Card className={style.TypeTimeSetter}>
      {
      timeArray.map((element,idx)=>{
        return <div key={element} className={style.duration+(selected === idx? " "+style.active : "")} onClick={(event)=>{onClickHandler(event,idx)}} >{element}</div>
      })
    }
    </Card>
  );
}
