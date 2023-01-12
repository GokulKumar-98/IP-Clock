import React from 'react';

const Greetings = ({ time }) => {
  const hour =
    Number(time.split(':')[0]) +
    (time.split(' ')[1] === 'PM' && time.split(':')[0] !== '12'
      ? 12
      : 0 +
        (time.split(' ')[1] === 'AM' && time.split(':')[0] == '12' ? -12 : 0));

  let message = '';

  if (hour > 5 && hour < 12) {
    message = 'Good Morning';
  } else if (hour >= 12 && hour < 16) {
    message = 'Good Afternoon';
  } else if (hour > 16 || hour <= 5) {
    message = 'Good Evening';
  }
  message += `, it's currently`;

  return (
    <div className="flex text-[24px] drop-shadow-lg tracking-[2px] text-left mmd:text-[16px] msm:text-[14px]">
      {message.toUpperCase()}
    </div>
  );
};

export default Greetings;
