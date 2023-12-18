import './App.css';
import { createContext, useState } from 'react';
import GrandFather from './components/GrandFather/grandFather';

export const RingContest = createContext();

function App() {
  const [house, setHouse] = useState(1);
  const asset = 'Diamond Ring';
  return (
    <RingContest.Provider value={['silver ring', house]} >
      <div className="App">
        <button onClick={() => setHouse(house + 1)}>Buy a new house</button>
        <GrandFather house={house} asset={asset}></GrandFather>
      </div>
    </RingContest.Provider >
  );
}

export default App;
