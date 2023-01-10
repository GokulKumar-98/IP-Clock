import { useEffect, useState } from 'react';
import './App.css';
import Quotes from './components/Quotes';
import TimeBar from './components/TimeBar';
import mng from './images/mng.jpg';
import eve from './images/evening.jpg';
import { useTransition, animated, config, useSpring } from '@react-spring/web';

const slides = [
  { id: 0, url: mng },
  { id: 1, url: eve },
];

function App() {
  const [bgImage, setBgImage] = useState(mng);

  const [props, set] = useSpring(() => ({
    opacity: 0,
    config: { duration: 1000 },
    onRest: () => {
      if (bgImage === mng) {
        setBgImage(eve);
      } else {
        setBgImage(mng);
      }
    },
  }));
  useEffect(() => {
    set({ opacity: 1 });
  }, [bgImage]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const currentHour = new Date().getHours();
  //     if (currentHour >= 0 && currentHour < 17) {
  //       setIsChanging(true);
  //       setTimeout(() => {
  //         setIsChanging(false);
  //         setBgImage(mng);
  //       }, 1000);
  //     } else {
  //       setIsChanging(true);
  //       setTimeout(() => {
  //         setIsChanging(false);
  //         setBgImage(eve);
  //       }, 1000);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [bgImage]);

  return (
    <animated.div
      className="main"
      style={{
        backgroundImage: `url(${bgImage})`,
        opacity: props.opacity,
        backgroundSize: 'cover',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className="App flex flex-col transition-all items-start justify-between  xl:ml-32 lg:ml-24 md:ml-16 sm:ml-5">
        <Quotes></Quotes>
        <TimeBar></TimeBar>
      </div>
    </animated.div>
  );
}

export default App;
