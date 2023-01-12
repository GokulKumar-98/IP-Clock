import React from 'react';

const Loader = ({ isloading }) => {
  //   console.log(isloading);
  return (
    <div
      style={{
        transition: 'all 1.5s ease',
        transform: `${isloading ? 'translateY(-100%)' : 'translateY(00%)'}`,
      }}
      className="loader bg-[#0e0e0e] flex w-[100vw] h-[100vh] items-center justify-center"
    >
      <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
        <circle
          class="pl__ring pl__ring--a"
          cx="120"
          cy="120"
          r="105"
          fill="none"
          stroke="#000"
          stroke-width="20"
          stroke-dasharray="0 660"
          stroke-dashoffset="-330"
          stroke-linecap="round"
        ></circle>
        <circle
          class="pl__ring pl__ring--b"
          cx="120"
          cy="120"
          r="35"
          fill="none"
          stroke="#000"
          stroke-width="20"
          stroke-dasharray="0 220"
          stroke-dashoffset="-110"
          stroke-linecap="round"
        ></circle>
        <circle
          class="pl__ring pl__ring--c"
          cx="85"
          cy="120"
          r="70"
          fill="none"
          stroke="#000"
          stroke-width="20"
          stroke-dasharray="0 440"
          stroke-linecap="round"
        ></circle>
        <circle
          class="pl__ring pl__ring--d"
          cx="155"
          cy="120"
          r="70"
          fill="none"
          stroke="#000"
          stroke-width="20"
          stroke-dasharray="0 440"
          stroke-linecap="round"
        ></circle>
      </svg>
    </div>
  );
};

export default Loader;
