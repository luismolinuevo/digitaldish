import React, {useState, useEffect} from 'react'

export default function Countdown({startDate, endDate}) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const calculateTimeLeft = () => {
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();
      const totalSeconds = (end - start) / 1000;
  
      if (totalSeconds <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }
  
      const daysLeft = Math.floor(totalSeconds / 86400);
      const hoursLeft = Math.floor((totalSeconds % 86400) / 3600);
      const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
      const secondsLeft = Math.floor(totalSeconds % 60);
  
      setDays(daysLeft);
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

    </div>
  )
}
