import "./App.css";
import CardModel from "./components/CardModel";
import data from "./assets/data";
import TitleBar from "./components/TitleBar";

function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className="allCards">
        {data.map((el) => (
          <CardModel
            id={el.recordid}
            reason={el.fields.bateau}
            date={el.fields.date_passage}
            openHour={el.fields.re_ouverture_a_la_circulation}
            closeHour={el.fields.fermeture_a_la_circulation}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
