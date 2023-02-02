import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/"><ReactSVG src={keyBoardIcon} /></Link>
            <h2><Link to="/" className={style["h2-link"]}>TypeMonk</Link></h2>
          </div>
          <ul>
            <li>
            <Link to="/">   <div><ReactSVG src={keyBoardIcon} /></div></Link>
            </li>
            <li>
            <Link to="/leaderboard"> <div><ReactSVG src={leaderBoardIcon} /></div></Link>
            </li>
          </ul>
        </div>
        <div className={style["right-menu-items"]}>
          <Link to="/profile"><ReactSVG src={profileIcon} /></Link>
          <Link to="/login"><ReactSVG src={logout} /></Link>
        </div>
      </nav>
    </div>
  );
}
