import React from 'react';

const Greetings = () => {
  const hour = new Date().toLocaleTimeString().slice(0, 2);
  //console.log(hour);
  let message;

  if (hour >= 6 && hour < 12) {
    message = 'Good Morning';
  } else if (hour >= 12 && hour < 16) {
    message = 'Good Afternoon';
  } else {
    message = 'Good Evening';
  }
  message += `, it's currently`;

  return (
    <div className="text-[24px] tracking-[2px] text-left">
      {message.toUpperCase()}
    </div>
  );
};

export default Greetings;
