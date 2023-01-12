import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Quotes from './components/Quotes';
import TimeBar from './components/TimeBar';
import mng from './images/mng.jpg';

import eve from './images/evening.jpg';

import { useTransition, animated, config, useSpring } from '@react-spring/web';
import Details from './components/Details';

const slides = [
  { id: 0, url: mng },
  { id: 1, url: eve },
];

function App() {
  const [change, setChange] = useState(false);
  const [bgImage, setBgImage] = useState(
    new Date().getHours() >= 6 && new Date().getHours() <= 17 ? mng : eve
  );
  const [data, setData] = useState({});
  const [props, set] = useSpring(() => ({
    opacity: 1,
    config: { duration: 1000 },
  }));

  const handClick = () => {
    setChange((prev) => !prev);
  };
  const getip = useCallback(async () => {
    const response = await fetch(
      'https://api.ipdata.co/?api-key=aaafa88d7d575fee3eb025eac686dc90c1b532edc0e24fadc9ac3619'
    );
    const dt = await response.json();
    setData(dt);
  }, []);

  useEffect(() => {
    getip();
  }, [getip]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentHour = new Date().getHours();
      if (currentHour >= 6 && currentHour < 17) {
        setTimeout(() => {
          setBgImage(mng);
        }, 1000);
      } else {
        setTimeout(() => {
          setBgImage(eve);
        }, 1000);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [bgImage]);

  return (
    <>
      <animated.div
        className="main"
        style={{
          backgroundImage: `url(${bgImage})`,

          backgroundSize: 'cover',
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <div className="App flex flex-col justify-between transition-all items-start xl:ml-32 lg:ml-24 md:ml-16 sm:ml-5">
          <Quotes change={change}></Quotes>

          <TimeBar data={data} click={handClick} change={change}></TimeBar>
        </div>
        <div
          style={{
            transition: 'all 1s ease',
            transform: `translateY(calc(${
              change ? '50vh' : '150vh'
            } - (100vh)))`,
          }}
          className=" h-[50vh]  px-[20px] "
        >
          <Details data={data}></Details>
        </div>
      </animated.div>
    </>
  );
}

export default App;
