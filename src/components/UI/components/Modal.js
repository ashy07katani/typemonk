import React from "react";
import style from "../css/Modal.module.css";
import Card from "./Card";
import restartButton from "../../../Images/icons8-restart.svg"
import { ReactSVG } from "react-svg";
import TypeChart from "../../Typemonk/components/TypeChart";
export default function Modal(props) {
  const tryAgainHandler = () => {
    props.tryAgain();
  };
  console.log("Inside Modal",props.wpmArray)
  return (
    <>
      <div className={style.backdrop}></div>
      <Card className={style.modal}>
        {/* <div className="graph">I am graph</div> */}
        <div className={style["typeChart-container"]}>
          <TypeChart wpmArray={props.wpmArray} rawArray={props.rawArray}/>
          <Card className={style["description"]}>
            <Card className={style["description-content"]}>
              <span className={style["number"]}>{props.wpm}</span>
              <span className={style["label"]}>WPM</span>
            </Card>
            <Card className={style["description-content"]}>
              <span className={style["number"]}>{props.accuracy}%</span>
              <span className={style["label"]}>Accuracy</span>
            </Card>
          </Card>
        </div>
        <div>
          <Card className={style["button-container"]}>
            <button onClick={tryAgainHandler}>
              <ReactSVG src={restartButton} />
            </button>
          </Card>
        </div>
      </Card>
    </>
  );
}
