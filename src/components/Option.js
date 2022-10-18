import React from 'react';

export default function Option({ type }) {
  return (
    <button className={`w-[120px] h-[120px] rounded-[50%] flex justify-center items-center shadow-outer bg-gradient-to-b from-${type} to-${type}To shadow-${type}Dark z-10 mx-3`}>
        <div className='w-[75%] h-[75%] bg-slate-100 rounded-[50%] flex justify-center items-center shadow-inner shadow-slate-300'>
            <img className='w-10' src={process.env.PUBLIC_URL + `/images/icon-${type}.svg`} alt='icon'/>
        </div>
    </button>
  )
}
