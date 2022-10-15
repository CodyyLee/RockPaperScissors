import React from 'react'

export default function ({score}) {
  return (
    <div className=' h-[16vh] flex w-full justify-between m-auto p-[1.1rem] border-[3px] border-[#606E85] rounded-2xl items-center max-w-screen-md'>
        <div className='ml-4 md:ml-8'>
            <h1 className='uppercase font-barlow font-semibold text-3xl md:text-5xl leading-none'>Rock<br/>Paper<br/>Scissors</h1>
        </div>

        <div className='h-[90%] bg-slate-100 w-[27%] md:w-[20%] flex flex-col justify-center items-center rounded-lg'>
            <p className='uppercase leading-none text-blue-800 font-bold opacity-90 md:text-xl'>Score</p>
            <h2 className='text-6xl text-zinc-600 font-bold tracking-[-.15em] pr-[.2em] md:text-8xl md:mt-[-.15em]'>{score}</h2>
        </div>
    </div>
  )
}
