import React, { useEffect, useState } from 'react';
import RevealButton from './RevealButton';
import Time from './Time';

const TimeBar = () => {
  const [data, setData] = useState('');

  const getip = async () => {
    const response = await fetch(
      'https://api.ipdata.co/?api-key=aaafa88d7d575fee3eb025eac686dc90c1b532edc0e24fadc9ac3619'
    );
    const dt = await response.json();
    setData(dt);
    console.log(dt);
  };
  useEffect(() => {
    //getip();
  }, []);
  return (
    <div className="flex flex-row w-full items-end justify-between msm:flex-col msm:items-start transition-all transform ">
      <Time data={data}></Time>
      <RevealButton></RevealButton>
    </div>
  );
};

export default TimeBar;
