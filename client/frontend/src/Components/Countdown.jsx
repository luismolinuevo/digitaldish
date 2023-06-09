import React, { useState, useEffect } from "react";

const Countdown = ({ startDate, endDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTimeLeft = () => {
    const [startYear, startMonth, startDay] = startDate.split("-");  //this adds a 0 before year, month, and day. It would not work without that
    const [endYear, endMonth, endDay] = endDate.split("-");

    const formattedStartDate = `${startYear.padStart(5, "0")}-${startMonth.padStart(
      3,
      "0"
    )}-${startDay.padStart(3, "0")}`;

    const formattedEndDate = `${endYear.padStart(5, "0")}-${endMonth.padStart(
      3,
      "0"
    )}-${endDay.padStart(3, "0")}`;

    console.log(formattedStartDate)

    const start = new Date(formattedStartDate).getTime();
    const end = new Date(formattedEndDate).getTime();
    const totalSeconds = Math.floor((end - Date.now()) / 1000);

    if (totalSeconds <= 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      return;
    }

    const daysLeft = Math.floor(totalSeconds / (24 * 60 * 60));
    const hoursLeft = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
    const secondsLeft = Math.floor(totalSeconds % 60);

    setDays(daysLeft);
    // setDays(daysLeft.toString().padStart(2, "0"));
    setHours(hoursLeft);
    setMinutes(minutesLeft);
    setSeconds(secondsLeft);
  };

  useEffect(() => {
    const timer = setInterval(() => calculateTimeLeft(), 1000);
    return () => clearInterval(timer);
  }, [startDate, endDate]);


  return (
    <div>
      <div>
        <p className="text-[18px]">
          {days}d:{hours}h:{minutes}m:{seconds}s
        </p>
      </div>
    </div>
  );
};

export default Countdown;
