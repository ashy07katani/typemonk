import React, { useEffect, useState } from "react";
import style from "../css/TypeLeaderBoard.module.css";
import Card from "../../UI/components/Card";
import getCookie from "../../../utilities/cookie-utlitiy";
import TypeLeaderTable from "./TypeLeaderTable";
// curl --location --request GET 'http://localhost:8000/api/users' \
// --header 'Authorization: Bearer aibqjzRoH3HmrRPxaMxW8E5ljPqLVz'
const timeArray = [15, 30, 60, 120, 300, 600];
const TimeSelector = (props) => {
  const [selectedGoatTime, setSelectedGoatTime] = useState();
  const [selectedPersonalTime, setSelectedPersonalTime] = useState();
  const dropdownChangeHandler = (event) => {
    console.log(
      "The value of isGoat is",
      props.isgoat,
      "value is ",
      event.target.value
    );
    if (props.isgoat) {
      setSelectedGoatTime(event.target.value);
      fetch(
        `http://localhost:8000/api/tests_specific_time?time=${event.target.value}`,
        {
          method: "GET",
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("data is :", data);
          props.setAllTest(data);
        });
    } else {
      const accessToken = getCookie("access-token");
      setSelectedPersonalTime(event.target.value);
      fetch(
        `http://localhost:8000/api/user/tests_specific_time?time=${event.target.value}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: "GET",
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("data is :", data);
          props.setUserTest(data);
        });
    }
  };
  console.log("This is a time selector");
  return (
    <Card className={style["timeSelector-filter"]}>
      <div className={style["timeSelector-filter__control"]}>
        <label>Filter by time</label>
        <select
          value={props.isgoat ? selectedGoatTime : selectedPersonalTime}
		  defaultValue={"----"}
          onChange={dropdownChangeHandler}
        >
		<option value={"----"} disabled={true}>----</option>
          {timeArray.map((element, idx) => {
            return (
              <option value={element} key={idx}>
                {element} sec
              </option>
            );
          })}
        </select>
      </div>
    </Card>
  );
};
export default function TypeLeaderBoard(props) {
  console.log("I am inside the TypeLeaderBoard");
  const accessToken = getCookie("access-token");
  console.log("access token:", accessToken);
  const [alltest, setAllTest] = useState(null);
  const [usertest, setUserTest] = useState(null);
  const [testdata, setTestData] = useState({});
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
    fetch("http://localhost:8000/api/user/tests", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data is :", data);
        setUserTest(data);
        console.log("usertest data is set to", usertest);
      });
  }, []);

  return (
    <div className={style["leaderboard-container"]}>
      <h3>LeaderBoard</h3>
      <div className={style["table-container"]}>
        {alltest && (
          <div className={style["table-container-inside"]}>
            <TimeSelector
              isgoat={true}
              setUserTest={setUserTest}
              setAllTest={setAllTest}
            />
            <div className={style["goat"]}>
              <span>g.o.a.t</span>
              {alltest.length > 0 ? <TypeLeaderTable test={alltest} /> : <h3>Data Not Present</h3>}
            </div>
          </div>
        )}
        {accessToken && usertest && (
          <div className={style["table-container-inside"]}>
            <TimeSelector
              isgoat={false}
              setUserTest={setUserTest}
              setAllTest={setAllTest}
            />{" "}
            <div className={style["personal"]}>
              <span>personal best</span>
             { usertest.length > 0 ? <TypeLeaderTable test={usertest} /> : <h3>Data Not Present</h3>}
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
}
