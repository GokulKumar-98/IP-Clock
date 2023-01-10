import React, { useEffect, useState } from 'react';
import Greetings from './Greetings';

const Time = ({ data }) => {
  const { city, country_name } = data;
  //console.log(data);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col align-center items-start gap-[10px] drop-shadow-lg text-left">
      <Greetings time={time}></Greetings>
      <div className="text-[200px] text-center font-semibold leading-[200px] mlg:text-[160px] mlg:leading-[170px] mmd:text-[100px] mmd:leading-[100px] msm:text-[50px] msm:leading-[50px]">
        {time.slice(0, -2)}
        <span className="text-[60px] leading-[60px] font-normal msm:text-[24px] msm:leading-[24px]">
          {time.slice(-2).toUpperCase()}
        </span>{' '}
      </div>
      {data ? (
        <div className="text-[20px] xl:text-[32px] tracking-[2px] leading-[42px]">
          {`In ${city}, ${country_name}`.toUpperCase()}
        </div>
      ) : (
        <div className="text-[20px] xl:text-[32px] tracking-[2px] leading-[42px]">
          IN CHENNAI, INDIA
        </div>
      )}
    </div>
  );
};

export default Time;
