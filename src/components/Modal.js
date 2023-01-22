import React from "react";
import style from "./Modal.module.css";
import Card from "./Card";
import restartButton from "../Images/icons8-restart.svg";
import backButton from "../Images/Back.svg";
import { ReactSVG } from "react-svg";
export default function Modal(props) {
  const tryAgainHandler = () => {
    props.tryAgain();
  };
  return (
    <>
      <div className={style.backdrop}>This is good</div>
      <Card className={style.modal}>
        <div className="graph">I am graph</div>
        <div className="description">I am description</div>
        <div>
          <div className={style["button-container"]}>
            <button onClick={tryAgainHandler}>
              <ReactSVG src={restartButton} />
              
            </button>
            <button onClick={tryAgainHandler}>
              <ReactSVG src={backButton} />
              
            </button>
          </div>
        </div>
      </Card>
    </>
  );
}
