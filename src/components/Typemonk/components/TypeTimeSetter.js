import React from "react";
import { useContext } from "react";
import Card from "../../UI/components/Card";
import typeContext from "../context/TypeContext";
import style from "../css/TypeTimeSetter.module.css";
export default function TypeTimeSetter(props) {

const contextVariable  = useContext(typeContext)
// console.log(contextVariable.startAgain)
const timeArray = [15,30,60,120,300,600]
  const onClickHandler = (event)=>{
    contextVariable.startAgain()
  }
  return (
    <Card className={style.TypeTimeSetter}>
      {
      timeArray.map((element)=>{
        return <div key={element} className={style.duration} onClick={onClickHandler} >{element}</div>
      })
    }
    </Card>
  );
}
