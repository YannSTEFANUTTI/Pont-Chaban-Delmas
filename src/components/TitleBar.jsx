import React from "react";
import { useState, useEffect } from "react";
import data from "../assets/data";

const TitleBar = ({ selectReason, setSelectReason }) => {
  const allReasons = data.map((el) => el.fields.bateau).sort();
  const allReasonsOnce = Array.from(new Set(allReasons));

  const [reasonFilter, setReasonFilter] = useState([]);

  /*  useEffect(() => {
   //const url = `${apiURL}/cupcakes`;
   axios.get(data).then((response) => {
    
     setReasonFilter(response.data);
   });
 }, []); */

  const reasonSelection = (e) => {
    setSelectReason(e.target.value);
  };

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
            {data &&
              allReasonsOnce.map((el) => <option value={el}>{el}</option>)}
          </select>
        </label>
      </form>
    </div>
  );
};

export default TitleBar;
