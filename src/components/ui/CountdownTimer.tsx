"use client";
import { useEffect, useState } from "react";

const CountdownTimer = ({ initialTime }: { initialTime: number }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []);

  // const days = String(Math.floor(timeRemaining / (3600 * 24))).padStart(2, "0");
  const hours = String(
    Math.floor((timeRemaining % (3600 * 24)) / 3600)
  ).padStart(2, "0");
  const minutes = String(Math.floor((timeRemaining % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(timeRemaining % 60).padStart(2, "0");

  return (
    <div className="flex gap-[2px] items-center h-6">
      <div className="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-sm">
        <div className="flex justify-center items-center text-sm text-neutral-800 text-center w-[20px] h-[20px]">
          {seconds}
        </div>
      </div>
      <div className="text-sm text-white w-1">:</div>
      <div className="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-sm">
        <div className="flex justify-center items-center text-sm text-neutral-800 text-center w-[20px] h-[20px]">
          {minutes}
        </div>
      </div>
      <div className="text-sm text-white w-1">:</div>
      <div className="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-sm">
        <div className="flex justify-center items-center text-sm text-neutral-800 text-center w-[20px] h-[20px]">
          {hours}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
