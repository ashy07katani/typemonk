import Card from "../../UI/components/Card";
import style from "../css/TypeLeaderTable.module.css";
import { formatDate, getTestTime } from "../../../utilities/date-utility";
function TypeLeaderTable(props) {
  console.log("values fetched from the json:", props.test);
  return (
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>name</td>
          <td className={style["align-right"]}>wpm</td>
          <td className={style["align-right"]}>raw</td>
          <td className={style["align-right"]}>accuracy</td>
		  <td className={style["align-right"]}>time</td>
          <td className={style["align-right"]}>date</td>
        </tr>
      </thead>
      <tbody>
        {props.test.map((t, idx) => {
          return (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{t.userName}</td>
              <td className={style["align-right"]}>{t.wpm}</td>
              <td className={style["align-right"]}>{t.raw}</td>
              <td className={style["align-right"]}>{t.accuracy}%</td>
			  <td className={style["align-right"]}>{t.time} sec</td>
              <td className={style["align-right"]}>
                <div>
                  {formatDate(t.dateTaken)}
				  <br/>
                  <span style={{ fontSize: "10px" }}>
                    {getTestTime(t.dateTaken)}
                  </span>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TypeLeaderTable;
