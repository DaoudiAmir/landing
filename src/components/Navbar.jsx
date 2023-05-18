
import { Link,animateScroll as scroll} from 'react-scroll'

import {Bars3Icon,XCircleIcon}from '@heroicons/react/24/solid'
import React from "react";
import { useState } from 'react';


const Navbar = () => {

        const [nav,setNav] = useState(false);
        const handleClick = () => setNav(!nav) ;
    

    return (  
<div className="Navbar">
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>ProMan.</h1>
                    <ul className='hidden md:flex '>
                    <li><Link to="home" smooth={true} offset={50} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} offset={50} duration={500}>About</Link></li>
                    <li><Link to="support" smooth={true} offset={50} duration={500}>Support</Link></li>
                    <li><Link to="platforms" smooth={true} offset={50} duration={500}>Platforms</Link></li>
                        
                        
                    </ul>
                </div>
                <div className='hidden md:flex pr-4 my-6'>
                    <button className='border-none bg-transparent text-black mr-5'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                      </div>
                   <div className='md:hidden mr-4' onClick={()=>handleClick()}>
                        {!nav ? <Bars3Icon className="w-5"/> : <XCircleIcon className='w-5'/>}
                    </div>    
            </div>

        
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 '}>
                        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                        <li className='border-b-2 border-zinc-300 w-full'>About</li>
                        <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                        <li className='border-b-2 border-zinc-300 w-full'>Plateforms</li>
                        
                        <div className='flex flex-col my-4'>
                        <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign in</button>
                        <button className='px-8 py-3'>Sign up</button>
                    </div>
                    </ul>
                    

                    </div>
    
</div>
);
}

export default Navbar;


