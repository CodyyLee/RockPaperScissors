import Score from "./components/Score";
import { useState } from 'react';
import Option from "./components/Option";

function App() {

  const [store, setStore] = useState({
    score: 0,
  })

  return (
    <div className="App w-screen h-screen ">
      <div className="w-11/12 m-auto py-5">
        <Score score={store.score}/>
      </div>
      <div>
        <Option />
      </div>
    </div>
  );
}

export default App;
