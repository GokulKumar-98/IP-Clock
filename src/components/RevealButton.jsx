import React from 'react';

const RevealButton = ({ click, change }) => {
  return (
    <div
      onClick={click}
      className="button cursor-pointer ml-[5px] flex items-center drop-shadow-lg bg-white rounded-full justify-evenly h-[40px] w-[120px] gap-x-[20px] transition-all"
    >
      <div className="font-semibold text-[14px] text-[#8d8d8d] ml-[10px] tracking-[2px]">
        {change ? 'LESS' : 'MORE'}
      </div>
      <div
        style={{
          transition: 'all 1s ease-out',
          transform: `${change ? 'rotate(180deg)' : ''}`,
        }}
        className="flex items-center justify-center bg-[#2f2f2f] w-[30px] h-[30px] rounded-[50%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default RevealButton;
