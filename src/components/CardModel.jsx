import React from "react";
import { useEffect, useState } from "react";
import Countdown from "./Countdown";

const CardModel = ({ id, date, openHour, closeHour, reason}) => {

  return (
    <div id="fullCard">
      <h5 id="projetID">&ensp;&ensp;&ensp; {`__________ ${date} __________`}</h5>
      <h4>
        {reason == "MAINTENANCE"
          ? "Fermé pour maintenance"
          : `Bateau de passage : ${reason}`}
      </h4>
      <p>{`Fermeture : ${closeHour}`}</p>
      <p>{`Ouverture : ${openHour}`}</p>
      <Countdown date = {date}/>
    </div>
  );
};

export default CardModel;
