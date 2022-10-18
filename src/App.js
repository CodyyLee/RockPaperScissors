import Score from "./components/Score";
import { useState } from 'react';
import Option from "./components/Option";

//image import
import triangle from './assets/bg-triangle.svg';

function App() {

  const [store, setStore] = useState({
    score: 0,
  });

  return (
    <div className="App w-screen min-h-screen bg-gradient-radial from-light to-dark">
      <div className="w-11/12 m-auto py-5">
        <Score score={store.score}/>
      </div>

      <div className="w-full bg-no-repeat bg-center flex flex-wrap my-16 justify-evenly gap-12 relative p-4">
        <img src={triangle} alt='triangle' className="absolute bottom-6 z-0 w-8/12"/>
        <Option type='rock'/>
        <Option type='paper'/>
        <Option type='scissors'/>
      </div>

      <div className="w-full flex justify-center">
        <button className="border text-white font-barlow px-8 py-1 rounded-lg uppercase tracking-widest font-semibold">Rules</button>
      </div>
    </div>
  );
}

export default App;
