import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { TypeChartBar } from './TypeChart';
import TypeLeaderTable from "./TypeLeaderTable";
import Card from "../../UI/components/Card";
import Mario from "../../../Images/mario.png"
import style from "../css/TypeUserProfile.module.css"

const NameImageHolder = ()=>{
	return (
	<Card className={style.nameImgHolder}>
		   <div className={style.imageContainer}>
		   <img src={Mario}/>
		   </div>
		   <div className={style.nameContainer}>
		   <h2 className={style.UserProfileh2}>AshyKatani</h2>
		   <span>Novice</span>
		   </div>
		   <div>
		   </div>
		   <div className={style.infoContainerTop}>
				<div className={style.infoContainerContent}>
					<span>test taken</span>
					<h2 className={style.UserProfileh2}>30</h2>
				</div>
				<div className = {style.infoContainerContent}>
					<span>time practiced</span>
					<h2 className={style.UserProfileh2}>900 seconds</h2>
				</div>
		   </div>
	   </Card>
	);
}
const PbsTime = ()=>{
	return(
	<Card className={style.pbsTime}>
	   <div className={style.groupContainer}>
		<div className={style.group}><span className={style.UserProfilespan}>15 seconds</span><h2 className={style.UserProfileh2}>30</h2></div>
		<div className={style.group}><span className={style.UserProfilespan}>30 seconds</span><h2 className={style.UserProfileh2}>30</h2></div>
		<div className={style.group}><span className={style.UserProfilespan}>60 seconds</span><h2 className={style.UserProfileh2}>30</h2></div>
	   </div>
	   <div className={style.groupContainer}>
		<div className={style.group}><span className={style.UserProfilespan}>120 seconds</span><h2 className={style.UserProfileh2}>30</h2></div>
		<div className={style.group}><span className={style.UserProfilespan}>300 seconds</span><h2 className={style.UserProfileh2}>30</h2></div>
		<div className={style.group}><span className={style.UserProfilespan}>600 seconds</span><h2 className={style.UserProfileh2}>30</h2></div>
	   </div>
	</Card>
	);
}

const MoreDetails = ()=>{
	return (
	<Card className={style.moreDetails}>
		<div className={style.groupContainer}>
		<div className={style.moredetailsgroup}><span className={style.UserProfilespan}>best wpm combined</span><h2 className={style.UserProfileh2}>30</h2></div>
		<div className={style.moredetailsgroup}><span className={style.UserProfilespan}>average wpm (all time)</span><h2 className={style.UserProfileh2}>30</h2></div>
		<div className={style.moredetailsgroup}><span className={style.UserProfilespan}>average wpm (last 10)</span><h2 className={style.UserProfileh2}>30</h2></div>
		</div>
	</Card>
	)
}
const ProfileTable = ()=>{
	const [alltest, setAllTest] = useState(null);
	 useEffect(() => {
    console.log("inisde useEffect trying to get the test details");
    fetch("http://localhost:8000/api/tests", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data is :", data);
        setAllTest(data);
        console.log("allTest is set to", alltest);
      });
	  }, []);
	return (
		
	<Card className={style.profileTable}>
		{alltest && (
          <div className={style["table-container-inside"]}>
            <div className={style["goat"]}>
              <span>g.o.a.t</span>
              {alltest.length > 0 ? <TypeLeaderTable test={alltest} /> : <h3>Data Not Present</h3>}
            </div>
          </div>
        )}
	</Card>
	
	)
}
export default function TypeUserProfile() {
const [userChartData,setUserChartData] = useState({
		labels: ["20-29","30-39","40-49","50-59","60-69","70-79","80-89","90-99","100-109","120-129","130-139","140-149","150-59","160-169","170-179","180-189","190-199"],
		datasets:[
		{label:"Number of Tests",
		data:[2,3,4,5,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
		],
		backgroundColor: "rgba(75,192,192,0.2)"
}
)
  return (
    <div className={style.profileContainer}>
       <NameImageHolder/>
	   <PbsTime/>
      <TypeChartBar className={style.TypeChartBar} userChartData={userChartData}/>
	  <MoreDetails/>
	  <ProfileTable/>
    </div>
  )
}
