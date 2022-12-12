import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const TitleBar = ({ selectReason, setSelectReason, setSelectDate }) => {
  const [reasonFilter, setReasonFilter] = useState([]);
  const [datas, setDatas] = useState([]);
  const apiURL =
    "https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=previsions_pont_chaban&q=&rows=10000&sort=date_passage";

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

  const allDates = datas.map((el) => el.fields.date_passage).sort();
  const allDatesOnce = Array.from(new Set(allDates));

  return (
    <div className="titleBar">
      <div className="logos">
        <img src="src/assets/img/logo03.png" alt="Github" />
      </div>
      <a
        href="src/assets/img/YannStefanutti.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <h1>Pont Chaban Delmas</h1>
        <p>Dates de fermetures</p>
      </a>
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
