import React from 'react';
import Info from './Info';

const Details = ({ data }) => {
  // console.log(data);
  return (
    <div className="flex flex-row rounded-lg justify-evenly items-center h-full w-full bg-white msm:flex-col">
      <Info data1={[data?.ip, data?.asn?.name]} data2={['IP ADDRESS', 'ISP']} />
      <div className="flex h-[80%] bg-gray-200 w-[2px] m-[20px] msm:hidden"></div>
      <Info
        data1={[data?.country_name, data?.time_zone?.offset]}
        data2={['LOCATION', 'TIMEZONE']}
      />
    </div>
  );
};

export default Details;
