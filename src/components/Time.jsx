import React, { useEffect, useState } from 'react';
import Greetings from './Greetings';

const Time = ({ data }) => {
  const { city, country_name } = data;
  //console.log(data);
  const [time, setTime] = useState(
    `${new Date().getHours() % 12 || 12}:${new Date()
      .getMinutes()
      .toString()
      .padStart(2, '0')} ${new Date().getHours() >= 12 ? 'PM' : 'AM'}`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        `${new Date().getHours() % 12 || 12}:${new Date()
          .getMinutes()
          .toString()
          .padStart(2, '0')} ${new Date().getHours() >= 12 ? 'PM' : 'AM'}`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-start drop-shadow-lg text-left msm:gap-[10px]">
      <Greetings time={time}></Greetings>
      {/* <div>Gokul</div> */}
      <div className="flex leading-none items-end m-0">
        <span className="text-[200px] m-0 font-semibold mlg:text-[160px]  mmd:text-[100px]  msm:text-[70px]">
          {time.slice(0, -2)}
        </span>
        <span className=" text-[60px] mb-[25px] font-normal mmd:mb-[10px] msm:mb-[5px] msm:text-[44px] ">
          {time.slice(-2).toUpperCase()}
        </span>{' '}
      </div>
      {data ? (
        <div className="flex text-[20px] xl:text-[32px] drop-shadow-lg tracking-[2px] text-left mmd:text-[16px] msm:text-[12px]">
          {`In ${city}, ${country_name}`.toUpperCase()}
        </div>
      ) : (
        <div className="flex text-[20px] xl:text-[32px] drop-shadow-lg tracking-[2px] text-left mmd:text-[16px] msm:text-[14px] ">
          IN CHENNAI, INDIA
        </div>
      )}
    </div>
    // <div className="flex">
    //   <Greetings time={time}></Greetings>
    //   <div className="flex text-[60px] xl:text-[32px] tracking-[2px] ">
    //     IN CHENNAI, INDIA
    //   </div>
    // </div>
  );
};

export default Time;
