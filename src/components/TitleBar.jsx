import React from "react";
import PropTypes from "prop-types";
/* import { useState, useEffect } from "react";
import axios from "axios"; */
import CountdownTitle from "./CountdownTitle";
import data from "../assets/data";

const TitleBar = ({
  setSelectReason,
  setSelectDate,
  allDatesAfterCurrentDay,
}) => {
  //APPEL D'API NON ACTIVE (Les dates sont modifiées directement dans "data")
  /*   const [datas, setDatas] = useState([]);
  const apiURL =
    "https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=previsions_pont_chaban&q=&rows=10000&sort-=date_passage";

  useEffect(() => {
    const url = `${apiURL}`;
    axios.get(url).then((response) => {
      setDatas(response.data.records);
    });
  }, []); */

  const reasonSelection = (e) => {
    setSelectReason(e.target.value);
  };
  const DateSelection = (e) => {
    setSelectDate(e.target.value);
  };

  const allReasons = data[0].records.map((el) => el.fields.bateau).sort();
  const allReasonsOnce = Array.from(new Set(allReasons));

  const allDates = allDatesAfterCurrentDay.map((el) => el);
  const allDatesOnce = Array.from(new Set(allDates));

  return (
    <div className="titleBar z-20 w-auto h-auto bg-stone-100/[.85] rounded-b-3xl shadow-xl shadow-gray-600 flex items-center flex-col">
      <a
        href="src/assets/img/YannStefanutti.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="text-3xl font-bold">Pont Chaban Delmas</h1>
        <p>Dates de fermetures</p>
      </a>
      <CountdownTitle allDatesOnce={allDatesOnce} />
      <form id="formFilter">
        <label>
          Filtrer par Bateau ou événement <br />
          <select className="font-bold" onChange={reasonSelection}>
            <option value="">---</option>
            {data[0] &&
              allReasonsOnce.map((el) => (
                <option key={el} className="font-bold" value={el}>
                  {el}
                </option>
              ))}
          </select>
        </label>
      </form>
      <form id="formFilter">
        <label className="pb-3">
          Filtrer par date <br />
          <select className="font-bold" onChange={DateSelection}>
            <option value="">---</option>
            {data[0] &&
              allDatesOnce.map((el) => (
                <option key={el} className="font-bold" value={el}>
                  {el}
                </option>
              ))}
          </select>
        </label>
      </form>
    </div>
  );
};

TitleBar.propTypes = {
  allDatesAfterCurrentDay: PropTypes.array.isRequired,
};
export default TitleBar;
