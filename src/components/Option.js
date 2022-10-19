import React, { useContext } from 'react';
import { AppContext } from '../context';

export default function Option({ type }) {

    const {store, setStore} = useContext(AppContext);

    const options = ['rock', 'paper', 'scissors'];

    const result = () => {
        let computerChoice = options[Math.floor(Math.random() * options.length)];
        console.log(computerChoice)
        console.log('type', type)

        switch(type) {
            case 'rock':
                if(computerChoice === 'scissors') {
                    setStore({...store, result: true, status: true})
                } else {
                    if(computerChoice === 'paper') {
                        setStore({...store, result: false, status: true})
                    } else {
                        setStore({...store, result: null, status: true})
                    }
                }
                break;
            case 'paper':
                if(computerChoice === 'rock') {
                    setStore({...store, result: true, status: true})
                } else {
                    if(computerChoice === 'scissors') {
                        setStore({...store, result: false, status: true})
                    } else {
                        setStore({...store, result: null, status: true})
                    }
                }
                break;
            case 'scissors':
                if(computerChoice === 'paper') {
                    setStore({...store, result: true, status: true})
                } else {
                    if(computerChoice === 'rock') {
                        setStore({...store, result: false, status: true})
                    } else {
                        setStore({...store, result: null, status: true})
                    }
                }
                break;
            default:
                console.log('hit')
                break;
        }
    }

  return (
    <button onClick={() => {
        result();
        console.log(store.result);
    }} 
    className={`w-[120px] h-[120px] rounded-[50%] flex justify-center items-center shadow-outer bg-gradient-to-b from-${type} to-${type}To shadow-${type}Dark z-10 mx-3`}>
        <div className='w-[75%] h-[75%] bg-slate-100 rounded-[50%] flex justify-center items-center shadow-inner shadow-slate-300'>
            <img className='w-10' src={process.env.PUBLIC_URL + `/images/icon-${type}.svg`} alt='icon'/>
        </div>
    </button>
  )
}
