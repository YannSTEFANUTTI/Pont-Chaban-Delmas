import React from "react";


const CardModel = ({ id, date, openHour, closeHour, reason}) => {
  return (
    <div id="fullCard">
      <h5 id="projetID">&ensp;&ensp;&ensp; {`_________ ${date} _________`}</h5>
      <h4>{reason == "MAINTENANCE" ? "Fermé pour maintenance" : `Bateau de passage : ${reason}`}</h4>
      <p>{`Fermeture : ${closeHour}`}</p>
      <p>{`Ouverture : ${openHour}`}</p>
      <p>COUNTDOWN</p>
    </div>
  );
};

export default CardModel;
