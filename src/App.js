import Score from "./components/Score";
import { useState } from 'react';
import Option from "./components/Option";
import {AppContext } from './context';

//image import
import triangle from './assets/bg-triangle.svg';
import rules from './assets/image-rules.svg';

function App() {

  const [store, setStore] = useState({
    score: 0,
    result: null,
    status: false,
    rules: true
  });

  return (
    <AppContext.Provider value={{store, setStore}}>
    <div className="App w-screen min-h-screen bg-gradient-radial from-light to-dark">
      <div className="w-11/12 m-auto py-5">
        <Score score={store.score}/>
      </div>

      {!store.status ? <div className="w-full bg-no-repeat bg-center flex flex-wrap my-16 justify-evenly gap-12 relative p-4">
        <img src={triangle} alt='triangle' className="absolute bottom-6 z-0 w-8/12"/>
        <Option type='rock'/>
        <Option type='paper'/>
        <Option type='scissors'/>
      </div> : <p>{store.result ? 'Win' : 'False'}</p>}

      <div className="w-full flex justify-center">
        <button className="border text-white font-barlow px-8 py-1 rounded-lg uppercase tracking-widest font-semibold" style={{zIndex: store.rules ? '40' : '0'}} onClick={() => {
          setStore({...store, rules: !store.rules})
        }}>{store.rules ? 'Close' : 'Rules'}</button>
      </div>

      {store.rules ? <div className="absolute top-0 w-screen h-screen flex justify-center items-center z-20 bg-overlay-black flex-col">
        <img className="" src={rules} alt='rules' />
      </div> : null}
    </div>
    </AppContext.Provider>
  );
}

export default App;
