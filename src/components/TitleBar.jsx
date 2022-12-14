import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CountdownTitle from './CountdownTitle';


const TitleBar = ({
  setSelectReason,
  setSelectDate,
  allDatesAfterCurrentDay,
}) => {
  const [datas, setDatas] = useState([]);
  const apiURL =
    "https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=previsions_pont_chaban&q=&rows=10000&sort-=date_passage";

  useEffect(() => {
    const url = `${apiURL}`;
    axios.get(url).then((response) => {
      setDatas(response.data.records);
    });
  }, []);

  const reasonSelection = (e) => {
    setSelectReason(e.target.value);
  };
  const DateSelection = (e) => {
    setSelectDate(e.target.value);
  };
  const allReasons = datas.map((el) => el.fields.bateau).sort();
  const allReasonsOnce = Array.from(new Set(allReasons));

  const allDates = allDatesAfterCurrentDay
    .map((el) => el)
    .sort();
    
  const allDatesOnce = Array.from(new Set(allDates));

  return (
    <div className="titleBar">
      <a
        href="src/assets/img/YannStefanutti.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <h1>Pont Chaban Delmas</h1>
        <p>Dates de fermetures</p>
      </a>
      <CountdownTitle
        allDatesAfterCurrentDay={allDatesAfterCurrentDay}
        allDatesOnce={allDatesOnce}
      />
      <form id="formFilter">
        <label>
          Filtrer par Bateau ou événement <br />
          <select onChange={reasonSelection}>
            <option value="">---</option>
            {datas &&
              allReasonsOnce.map((el) => <option value={el}>{el}</option>)}
          </select>
        </label>
      </form>
      <form id="formFilter">
        <label>
          Filtrer par date <br />
          <select onChange={DateSelection}>
            <option value="">---</option>
            {datas &&
              allDatesOnce.map((el) => <option value={el}>{el}</option>)}
          </select>
        </label>
      </form>
    </div>
  );
};

export default TitleBar;
