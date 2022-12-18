import React from "react";
import PropTypes from "prop-types";
/* import { useState, useEffect } from "react";
import axios from "axios"; */
import CountdownTimer from "./CountdownTimer";
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
    <div className="titleBar z-20 w-auto h-auto bg-stone-100/[.85] rounded-b-3xl shadow-xl shadow-gray-600 flex items-center flex-col ">
      <a
        className="visited:text-[#323232] hover:text-[#860505] hover:scale-110 active:text-[#323232] "
        href="src/assets/img/YannStefanutti.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="text-2xl font-bold m-0 mt-[1.5vh]">Pont Chaban Delmas</h1>
        <p className="text-[100%] mt-0 mb-[5%] text-[#800303] text-center">
          Dates de fermetures
        </p>
      </a>
      <CountdownTimer allDatesOnce={allDatesOnce} />
      <form
        id="formFilter"
        className="flex flex-col items-center content-center text-center w-[100%] px-[3vh] "
      >
        <label>
          Filtrer par Bateau ou événement <br />
          <select
            className="text-[0.8rem] text-center font-bold"
            onChange={reasonSelection}
          >
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
      <form className="flex">
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
