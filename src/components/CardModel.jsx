import React from "react";
import PropTypes from "prop-types";

const CardModel = ({ date, openHour, closeHour, reason,}) => {
  return (
    <div
      id="fullCard"
      className="mt-3 mb-2 h-auto bg-stone-100/[.85] rounded-2xl shadow-xl shadow-gray-700 min-w-[400px] w-[30vw]"
    >
      <h5
        id="cardDate"
        className=" text-[#800303] text-[110%] m-0 pt-5 text-left tracking-[-.07vw] "
      >
        &ensp;&ensp;&ensp; {`__________ ${date} __________`}
      </h5>
      <h4 className="text-[#323232] text-[100%] m-0 text-left px-[10%] mt-[2%]">
        {reason == "MAINTENANCE"
          ? "Fermé pour maintenance"
          : `Bateau de passage : ${reason}`}
      </h4>
      <p className="h-[100%] text-[100%] m-0 text-left px-[10%]">{`Fermeture : ${closeHour}`}</p>
      <p className="h-[100%] pb-[5%] px-[10%]">{`Ouverture : ${openHour}`}</p>
    </div>
  );
};


CardModel.propTypes = {
  date: PropTypes.string.isRequired,
  openHour: PropTypes.string.isRequired,
  closeHour: PropTypes.string.isRequired,
  reason: PropTypes.string.isRequired,
};

export default CardModel;
