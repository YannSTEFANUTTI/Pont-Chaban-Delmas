import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CardModel from "./components/CardModel";
import data from "./assets/data";
import TitleBar from "./components/TitleBar";

function App() {
  const [selectReason, setSelectReason] = useState("");
    const [datas, setDatas] = useState([]);
  const apiURL =
    "https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=previsions_pont_chaban&q=&rows=10000&sort=date_passage";
  

   useEffect(() => {
     const url = `${apiURL}`;
     axios.get(url).then((response) => {
       setDatas(response.data);
     });
   }, []);

  return (
    <div className="App">
      <TitleBar setSelectReason={setSelectReason} selectReason={selectReason} />
      <div className="allCards">
        {datas.records &&
          datas.records

            .filter((el) => !selectReason || el.fields.bateau === selectReason)

            .map((el) => (
              <CardModel
                id={el.recordid}
                reason={el.fields.bateau}
                date={el.fields.date_passage}
                openHour={el.fields.re_ouverture_a_la_circulation}
                closeHour={el.fields.fermeture_a_la_circulation}
              />
            ))}
      </div>
      <div className="colorsBG"></div>
    </div>
  );
}

export default App;
