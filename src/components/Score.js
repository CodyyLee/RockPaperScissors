import React from 'react'

export default function ({score}) {
  return (
    <div className='flex w-full justify-between m-auto p-2 py-3 border-[3px] border-[#606E85] rounded-2xl items-center max-w-screen-md'>
        <div className='ml-4 md:ml-8'>
            <h1 className='uppercase font-barlow font-bold text-xl leading-none md:text-2xl text-white'>Rock<br/>Paper<br/>Scissors</h1>
        </div>

        <div className=' py-4 bg-slate-100 w-[27%] md:w-[20%] flex flex-col justify-center items-center rounded-lg'>
            <p className='uppercase leading-none text-blue-800 font-bold text-[.5rem] opacity-90 mb-[-.3em] md:text-[.7rem]'>Score</p>
            <h2 className='text-4xl text-zinc-600 font-bold tracking-[-.15em] pr-[.2em] md:text-6xl md:mt-[-.15em] leading-none'>{score}</h2>
        </div>
    </div>
  )
}
