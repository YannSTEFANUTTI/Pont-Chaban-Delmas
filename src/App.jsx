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

  const currentDate = new Date();
  const dateFormated = `${currentDate.getFullYear()}-0${
    currentDate.getMonth()-5
  }-${currentDate.getDate()}`;


  useEffect(() => {
    if (datas) {
      setAllDatesAfterCurrentDay(
        datas.records
          .map((el) => el.fields.date_passage)
          .filter((el) => el >= dateFormated)
      );
    }
  }, [datas]);


  return (
    <div className="App">
      <TitleBar
        setSelectReason={setSelectReason}
        setSelectDate={setSelectDate}
        allDatesAfterCurrentDay={allDatesAfterCurrentDay}
      />
      <div className="allCards">
        {datas &&
          datas.records
            .filter((el) => el.fields.date_passage >= dateFormated)
            .filter((el) => !selectReason || el.fields.bateau === selectReason)
            .filter(
              (el) => !selectDate || el.fields.date_passage === selectDate
            )
            .map((el) => (
              <CardModel
                id={el.recordid}
                reason={el.fields.bateau}
                date={el.fields.date_passage}
                openHour={el.fields.re_ouverture_a_la_circulation}
                closeHour={el.fields.fermeture_a_la_circulation}
                selectDate={selectDate}
                dateFormated={dateFormated}
              />
            ))}
      </div>
      <div className="colorsBG"></div>
    </div>
  );
}

export default App;
