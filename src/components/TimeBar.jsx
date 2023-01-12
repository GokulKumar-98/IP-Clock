import React, { useEffect, useState } from 'react';
import RevealButton from './RevealButton';
import Time from './Time';

const TimeBar = ({ change, click, data }) => {
  // const [data, setData] = useState('');

  // const getip = async () => {
  //   const response = await fetch(
  //     'https://api.ipdata.co/?api-key=aaafa88d7d575fee3eb025eac686dc90c1b532edc0e24fadc9ac3619'
  //   );
  //   const dt = await response.json();
  //   setData(dt);
  //   console.log(dt);
  // };
  useEffect(() => {
    //getip();
  }, []);
  return (
    <div
      style={{ transition: 'transform 0.8s ease-out' }}
      className={`${
        change ? 'timebar' : ''
      } flex flex-row w-full h-[50%] items-end justify-between msm:flex-col msm:items-start msm:justify-end msm:gap-[10px] transition-all`}
    >
      <Time data={data}></Time>
      <RevealButton click={click} change={change}></RevealButton>
    </div>
  );
};

export default TimeBar;
