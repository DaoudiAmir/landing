import React from 'react'


import manImg from '../assets/man-bg.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p data-aos="fade-right" data-aos-duration="800" className='text-2xl'>Welcome to</p>
                <h1 data-aos="fade-left" data-aos-duration="500" className='py-3 text-5xl md:text-7xl font-bold'>DS-DB platform </h1>
                <p data-aos="fade-right" data-aos-duration="800" className='text-2xl'>Caring About Your Future </p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div> 
                <img className='w-full'src={manImg} alt='/' /> 
            </div>
            {/* <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p className='text-indigo-600'>Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500 h-6 '>create</p>
                    <p className='flex px-4 py-2 text-slate-500 h-6 '> Add</p>
                    <p className='flex px-4 py-2 text-slate-500 h-6 '> Modify</p>
                    <p className='flex px-4 py-2 text-slate-500 h-6 '>Tracking</p>
                    
                </div>
            </div> */}
           
            </div>
        </div>
    
  )
}

export default Hero