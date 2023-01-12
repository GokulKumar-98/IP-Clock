import React, { useEffect, useState } from 'react';

const Quotes = ({ change }) => {
  const [state, setstate] = useState('');

  const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();

    setstate(data);
  };
  useEffect(() => {
    getQuote();
    return () => {};
  }, []);

  return (
    <div
      key={state.id}
      style={{
        transition: 'transform 0.8s ease-out',
        transform:
          state && change == false ? 'translateY(00%)' : 'translateY(-110%)',
      }}
      className="flex flex-row gap-3 items-center bg-[rgba(0,0,0,0.25)] backdrop-blur-[2px] p-5 border-[1px solid rgba(0,0,0,0.175)] rounded-[7px] max-w-2xl"
    >
      {state ? (
        <div
          key={state.id}
          className="quote-box flex flex-col items-start gap-3 text-xl container  sm:text-xl"
        >
          <p className="quote-text text-left drop-shadow-2xl">
            "{state.content}"
          </p>
          <p className="text-left drop-shadow-2xl ">{state.author}</p>
        </div>
      ) : (
        ''
      )}
      <button
        className="transition-transform drop-shadow-2xl hover:rotate-90 "
        onClick={getQuote}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 gray-500 drop-shadow-2xl"
        >
          <path
            fillRule="evenodd"
            d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Quotes;
