import React from 'react'

function Temprature() {
    const handleCityChange = (e)=>{
        console.log(e.target.value);
        
    }


  return (
    <>
    <div className='flex justify-between'>
        <input type="text" onChange={handleCityChange} placeholder='Enter your city' className='bg-slate-600 border border-slate-500 text-slate-200 placeholder-slate-400 text-md w-60 p-2 focus:outline-none focus:border-slate-400' />
    </div>
    
    </>
  )
}

export default Temprature
