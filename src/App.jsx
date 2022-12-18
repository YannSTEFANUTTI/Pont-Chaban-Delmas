import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CardModel from "./components/CardModel";
import TitleBar from "./components/TitleBar";
import data from "./assets/data";

function App() {
  const [selectReason, setSelectReason] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [datas, setDatas] = useState();
  const [allDatesAfterCurrentDay, setAllDatesAfterCurrentDay] = useState([]);
  const apiURL =
    "https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=previsions_pont_chaban&q=&rows=10000&sort";

  useEffect(() => {
    const url = `${apiURL}`;
    axios.get(url).then((response) => {
      setDatas(response.data);
    });
  }, []);

  const dateFormated = new Date().toISOString();
console.log(dateFormated);



  useEffect(() => {
    if (data[0]) {
      setAllDatesAfterCurrentDay(
        data[0].records
          .map((el) => el.fields.date_passage)
          .filter((el) => el >= dateFormated)
      );
    }
  }, [data[0]]);

  return (
    <div className="App flex items-center flex-col bg-cover bg-fixed">
      <TitleBar
        setSelectReason={setSelectReason}
        setSelectDate={setSelectDate}
        allDatesAfterCurrentDay={allDatesAfterCurrentDay}
      />
      <div className="allCards z-[2]">
        {data[0] &&
          data[0].records
            .filter((el) => el.fields.date_passage >= dateFormated)
            .filter((el) => !selectReason || el.fields.bateau === selectReason)
            .filter(
              (el) => !selectDate || el.fields.date_passage === selectDate
            )
            .map((el) => (
              <CardModel
                key={el.recordid}
                reason={el.fields.bateau}
                date={el.fields.date_passage}
                openHour={el.fields.re_ouverture_a_la_circulation}
                closeHour={el.fields.fermeture_a_la_circulation}
              />
            ))}
      </div>
      <div className="colorsBG fixed z-[0] h-full w-full opacity-20 bg-[size:300%_300%] "></div>
    </div>
  );
}

export default App;
