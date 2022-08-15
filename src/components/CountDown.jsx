import { useEffect, useRef, useState } from "react";

export const CountDown = () => {
  const [timerDays, setTimeDays] = useState("00");
  const [timerHours, setTimeHours] = useState("00");
  const [timerMinutes, setTimeMinutes] = useState("00");
  const [timerSeconds, setTimeSeconds] = useState("00");

  let interval = useRef();

  const startTime = () => {
    const countdownDate = new Date("Aug 31, 2022 23:59:59").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimeDays(days);
        setTimeHours(hours);
        setTimeMinutes(minutes);
        setTimeSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTime();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="  items-center flex text-3xl gap-8  text-center">
      <div className="">
        <p className="text-gray-400">
          <small>Days</small>
        </p>
        <p className="text-5xl font-medium">{timerDays}</p>
      </div>
      <div>
        <p className="text-gray-400">
          <small>Hours</small>
        </p>
        <p className="text-5xl font-medium">{timerHours}</p>
      </div>
      <div>
        <p className="text-gray-400">
          <small>Minutes</small>
        </p>
        <p className="text-5xl font-medium">{timerMinutes}</p>
      </div>
      <div>
        <p className="text-gray-400">
          <small>Seconds</small>
        </p>
        <p className="text-5xl font-medium">{timerSeconds}</p>
      </div>
    </div>
  );
};
