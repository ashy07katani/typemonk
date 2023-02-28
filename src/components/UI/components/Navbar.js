import React from "react";
import { Link } from "react-router-dom";
import style from "../css/Navbar.module.css";
import { ReactSVG } from "react-svg";
import profileIcon from "../../../Images/profile.svg"
import leaderBoardIcon from "../../../Images/crown.svg"
import keyBoardIcon from "../../../Images/keyboard.svg"
import logout from "../../../Images/logout.svg"
import { FaCrown,FaKeyboard} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
export default function Navbar(props) {
	console.log("currentuser is: ",props.username)
  return (
    <div className={style.Navbar}>
      <nav>
        <div className={style["left-menu-items"]}>
          <div className={style["logo"]}>
          <Link to="/"><FaKeyboard className={`${style.navicon}`}/></Link>
            <h2><Link to="/" className={style["h2-link"]}>TypeMonk</Link></h2>
          </div>
          <ul>
            <li>
            <Link to="/"><div><FaKeyboard className={`${style.navicon}`}/></div></Link>
            </li>
            <li>
            <Link to="/leaderboard"> <div><FaCrown className={`${style.navicon}`}/></div></Link>
            </li>
          </ul>
        </div>
        <div className={style["right-menu-items"]}>
          <Link to="/profile"><div className={style["profile-container"]}><CgProfile className={`${style.navicon} ${props.user==="" ?"":style["userpresent"]}`}/><span className={style.username}>{props.user}</span></div></Link>
          <Link to="/login" style={{transform:'translateY(1.5px)'}} setCurUser={props.setCurUser}>{props.user==="" ? <AiOutlineLogin className={`${style.navicon}`}/>:<RiLogoutCircleLine className={`${style.navicon}`}/>}</Link>
        </div>
      </nav>
    </div>
  );
}
