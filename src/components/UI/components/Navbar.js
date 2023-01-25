import React from "react";
import style from "../css/Navbar.module.css";
import { ReactSVG } from "react-svg";
import profileIcon from "../../../Images/profile.svg"
import leaderBoardIcon from "../../../Images/crown.svg"
import keyBoardIcon from "../../../Images/keyboard.svg"
import logout from "../../../Images/logout.svg"
export default function Navbar() {
  return (
    <div className={style.Navbar}>
      <nav>
        <div className={style["left-menu-items"]}>
          <div className={style["logo"]}>
          <ReactSVG src={keyBoardIcon} />
            <h2>TypeMonk</h2>
          </div>
          <ul>
            <li>
              <div><ReactSVG src={keyBoardIcon} /></div>
            </li>
            <li>
              <div><ReactSVG src={leaderBoardIcon} /></div>
            </li>
          </ul>
        </div>
        <div className={style["right-menu-items"]}>
          <a><ReactSVG src={profileIcon} /></a>
          <a><ReactSVG src={logout} /></a>
        </div>
      </nav>
    </div>
  );
}
