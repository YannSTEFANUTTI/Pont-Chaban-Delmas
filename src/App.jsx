import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CardModel from "./components/CardModel";
import TitleBar from "./components/TitleBar";

function App() {
  const [selectReason, setSelectReason] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [datas, setDatas] = useState();
  const [allDatesAfterCurrentDay, setAllDatesAfterCurrentDay] = useState([]);
  const apiURL =
    "https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=previsions_pont_chaban&q=&rows=10000&sort-=date_passage";

  useEffect(() => {
    const url = `${apiURL}`;
    axios.get(url).then((response) => {
      setDatas(response.data);
    });
  }, []);

  const dateToFormat = new Date().toISOString().slice(0, 10).split("");
  dateToFormat[5] = "0";
  dateToFormat[6] = "5";
  /*   dateToFormat[8] = "1";
  dateToFormat[9] = "3"; */
  const dateFormated = dateToFormat.join("");

  useEffect(() => {
    if (datas) {
      setAllDatesAfterCurrentDay(
        datas.records
          .map((el) => el.fields.date_passage)
          .filter((el) => el >= dateFormated)
      );
    }
  }, [datas]);

  console.log(allDatesAfterCurrentDay);
  return (
    <div className="App flex items-center flex-col bg-cover bg-fixed">
      <TitleBar
        setSelectReason={setSelectReason}
        setSelectDate={setSelectDate}
        allDatesAfterCurrentDay={allDatesAfterCurrentDay}
      />
      <div className="allCards z-[2]">
        {datas &&
          datas.records
            .filter((el) => el.fields.date_passage >= dateFormated)
            .filter((el) => !selectReason || el.fields.bateau === selectReason)
            .filter(
              (el) => !selectDate || el.fields.date_passage === selectDate
            )
            .map((el) => (
              <CardModel
                reason={el.fields.bateau}
                date={el.fields.date_passage}
                openHour={el.fields.re_ouverture_a_la_circulation}
                closeHour={el.fields.fermeture_a_la_circulation}
                selectDate={selectDate}
              />
            ))}
      </div>
      <div className="colorsBG fixed z-[0] h-full w-full opacity-20 bg-[size:300%_300%] "></div>
    </div>
  );
}

export default App;
