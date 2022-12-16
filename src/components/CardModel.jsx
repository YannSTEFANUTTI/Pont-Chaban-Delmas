import React from "react";
/* import Countdown from "./Countdown"; */

const CardModel = ({ date, openHour, closeHour, reason,}) => {
  return (
    <div
      id="fullCard"
      className="mt-3 mb-2 h-auto bg-stone-100/[.85] rounded-2xl shadow-xl shadow-gray-700 min-w-[400px]"
    >
      <h5 id="cardDate">
        &ensp;&ensp;&ensp; {`__________ ${date} __________`}
      </h5>
      <h4>
        {reason == "MAINTENANCE"
          ? "Fermé pour maintenance"
          : `Bateau de passage : ${reason}`}
      </h4>
      <p>{`Fermeture : ${closeHour}`}</p>
      <p id="ouverture">{`Ouverture : ${openHour}`}</p>
      {/* <Countdown date={date}  /> */}
    </div>
  );
};

export default CardModel;
