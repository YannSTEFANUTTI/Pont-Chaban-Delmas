import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CountdownTimer = ({ allDatesOnce }) => {
  const [countdownDate, setCountdownDate] = useState();

  useEffect(() => {
    setCountdownDate(new Date(allDatesOnce[0]).getTime());
  }, [allDatesOnce]);

  const [timeLeft, setTimeLeft] = useState(countdownDate - Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(countdownDate - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownDate]);

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return (
    countdownDate && (
      <div>
        <h4 className="font-bold">Prochaine fermeture dans</h4>
        <div className="countdown-wrapper font-bold flex flex-row justify-center ">
          <div className="p-[.2vw] flex flex-col content-start items-center text-[#343434]">
            <div className="m-0 text-[100%] font-extrabold ">{days || "-"}</div>
            <small className="text-[70%]">Jours</small>
          </div>
          <div className="p-[.2vw] flex flex-col content-start items-center text-[#343434]">
            <div className="m-0 text-[100%] font-extrabold "> {hours || "-"}</div>
            <small className="text-[70%]">Heures</small>
          </div>
          <div className="p-[.2vw] flex flex-col content-start items-center text-[#343434]">
            <div className="m-0 text-[100%] font-extrabold "> {minutes || "-"}</div>
            <small className="text-[70%]">minutes</small>
          </div>
          <div className="p-[.2vw] flex flex-col content-start items-center text-[#343434]">
            <div className="m-0 text-[100%] font-extrabold ">{seconds || "-"}</div>
            <small className="text-[70%]">secondes</small>
          </div>
        </div>
      </div>
    )
  );
};

CountdownTimer.propTypes = {
  allDatesOnce: PropTypes.array.isRequired,
};
export default CountdownTimer;
