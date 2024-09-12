import React from 'react'

export const Card = ({name,date,country,temperature,src,weatherText}) => {
  return (
    <div className=' bg-white border-gray-800 shadow-lg ring-gray-700 ring-opacity-50 w-[auto] mx-auto mt-5 rounded-lg p-[1rem] mb-5'>
    <h1 className='text-2xl'>City:{name}</h1>
    <p className='text-gray-500'> Date :{date} , {country}</p>
    <div className='mt-5 flex justify-between items-center mx-5 pb-[1rem]'>
        <p className='text-2xl md:text-3xl lg:text-5xl '>{temperature}°C</p>
        <img className='w-[10rem]' src={src} alt='weatherImg' />
    </div>
    <p className='text-1xl'>Weather Condition :{weatherText}</p>
</div>
  )
}
