import { useEffect, useState } from 'react';
import './App.css';
import Appm from './components/Appm';
import Loader from './components/Loader';

function App() {
  const [isloading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(!isloading);
    }, 1000);
  }, []);
  return (
    <>
      <Appm></Appm>
      <Loader isloading={isloading}></Loader>
    </>
  );
}

export default App;
