import React from 'react';

const Info = ({ data1, data2 }) => {
  //console.log(data1);
  return (
    <div className="flex flex-col h-full justify-evenly boxxx">
      <div className="flex flex-col gap-y-[20px] msm:gap-y-[10px]">
        <h1 className="font-semibold text-[#aeaeae] text-[24px] msm:text-[14px]">
          {data2[0]}
        </h1>
        <div className="font-semibold text-black text-[50px] mlg:text-[40px] mmd:text-[32px] msm:text-[24px]">
          {data1[0]}
        </div>
      </div>
      <div className="flex flex-col gap-y-[20px] msm:gap-y-[10px]">
        <h1 className="font-semibold text-[#aeaeae] text-[24px] msm:text-[14px]">
          {data2[1]}
        </h1>
        <div className="font-semibold text-black text-[50px] mlg:text-[40px] mmd:text-[32px] msm:text-[24px]">
          {data1[1]}
        </div>
      </div>
    </div>
  );
};

export default Info;
