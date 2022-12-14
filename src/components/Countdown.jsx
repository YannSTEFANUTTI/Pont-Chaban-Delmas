import { useState, useEffect } from "react";

const Countdown = ({ date }) => {
  const [countdownDate, setCountdownDate] = useState();
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => setCountdownDate(new Date(date).getTime()), [date]);
  
  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, [countdownDate]);

 
  const setNewTime = () => {
    if (countdownDate) {
      const currentDate = new Date().getTime() * 0.989;

      const distanceToDate = countdownDate - currentDate;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor(
          (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
          );
       
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };
  return (
    <div>
      <div className="countdown-wrapper">
        <div className="time-section">
          <div className="time">{state.days || "0"}</div>
          <small className="time-text">Jours</small>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{state.hours || "00"}</div>
          <small className="time-text">Heures</small>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{state.minutes || "00"}</div>
          <small className="time-text">Minutes</small>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{state.seconds || "00"}</div>
          <small className="time-text">Secondes</small>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
