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
    rules: false,
    computer: '',
    player: ''
  });

  return (
    <AppContext.Provider value={{store, setStore}}>
    <div className="App w-screen min-h-screen bg-gradient-radial from-light to-dark">
      <div className="w-11/12 m-auto py-5">
        <Score score={store.score}/>
      </div>

      {!store.status ? <div className="max-w-screen-md w-full bg-no-repeat bg-center flex flex-wrap my-16 justify-evenly gap-12 md:gap-16 relative p-4 md:w-10/12 md:mx-auto md:h-[30em]">
        <img src={triangle} alt='triangle' className="absolute max-w-screen-md bottom-6 z-0 w-8/12"/>
        <Option type='rock'/>
        <Option type='paper'/>
        <Option type='scissors'/>
      </div> : 
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="flex justify-between w-11/12">
          <div className="flex flex-col justify-center items-center">
            <Option type={store.player} display={true} />
            <p className="text-white uppercase mt-7">You picked</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Option type={store.computer} display={true} />
            <p className="text-white uppercase mt-7">The House Picked</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center py-10">
          <h2 className="text-white text-5xl uppercase font-bold py-4">
          {store.result === 'Win' ? 'You Win' : null}
          {store.result === 'Lose' ? 'You Lose' : null}
          {store.result === 'Tie' ? "It's a Tie" : null}
          </h2>
          <button className="bg-white rounded-md p-2 px-16 uppercase" onClick={() => {
            setStore({...store, status: false})
          }}>Play Again</button>
        </div>
      </div>}

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
