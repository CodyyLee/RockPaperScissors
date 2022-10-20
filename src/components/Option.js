import React, { useContext } from 'react';
import { AppContext } from '../context';

export default function Option({ type, display = false }) {

    const {store, setStore} = useContext(AppContext);

    const options = ['rock', 'paper', 'scissors'];

    const result = (computerChoice) => {
        switch(type) {
            case 'rock':
                if(computerChoice === 'scissors') {
                    setStore({...store, player: type, result: 'Win', status: true, score: store.score + 1, computer: computerChoice})
                } else {
                    if(computerChoice === 'paper') {
                        if(store.score !== 0) {
                            setStore({...store, player: type, result: 'Lose', status: true, score: store.score - 1, computer: computerChoice})
                        } else {
                            setStore({...store, player: type, result: 'Lose', status: true, computer: computerChoice})
                        }
                        
                    } else {
                        setStore({...store, player: type, result: 'Tie', status: true, computer: computerChoice})
                    }
                }
                break;
            case 'paper':
                if(computerChoice === 'rock') {
                    setStore({...store, player: type, result: 'Win', status: true, score: store.score + 1, computer: computerChoice})
                } else {
                    if(computerChoice === 'scissors') {
                        if(store.score !== 0) {
                            setStore({...store, player: type, result: 'Lose', status: true, score: store.score - 1, computer: computerChoice})
                        } else {
                            setStore({...store, player: type, result: 'Lose', status: true, computer: computerChoice})
                        }
                        
                    } else {
                        setStore({...store, player: type, result: 'Tie', status: true, computer: computerChoice})
                    }
                }
                break;
            case 'scissors':
                if(computerChoice === 'paper') {
                    setStore({...store, player: type, result: 'Win', status: true, score: store.score + 1, computer: computerChoice})
                } else {
                    if(computerChoice === 'rock') {
                        if(store.score !== 0) {
                            setStore({...store, player: type, result: 'Lose', status: true, score: store.score - 1, computer: computerChoice})
                        } else {
                            setStore({...store, player: type, result: 'Lose', status: true, computer: computerChoice})
                        }
                        
                    } else {
                        setStore({...store, player: type, result: 'Tie', status: true, computer: computerChoice})
                    }
                }
                break;
            default:
                break;
        }
    }

  return (
    <button onClick={() => {
        if(display === false) {
            let computerChoice = options[Math.floor(Math.random() * options.length)];

            result(computerChoice);
        }
    }} 
    className={`w-[120px] h-[120px] rounded-[50%] flex justify-center items-center shadow-outer bg-gradient-to-b from-${type} to-${type}To shadow-${type}Dark z-10 mx-3 md:mx-10 md:w-[150px] md:h-[150px]`}>
        <div className='w-[75%] h-[75%] bg-slate-100 rounded-[50%] flex justify-center items-center shadow-inner shadow-slate-300'>
            <img className='w-10' src={process.env.PUBLIC_URL + `/images/icon-${type}.svg`} alt='icon'/>
        </div>
    </button>
  )
}
