import React from 'react'
import '../index.css'
import myImage from './assets/profile.jpeg';

const Navbar = () => {
  return (
    <>
     <nav className='bg-blue-500 text-white flex justify-between items-center p-3'> 
     <ul className="flex space-x-6 text-white text-lg font-bold font-serif">
          <li>Home</li>
           <li>About</li>
           <li>Projects</li>
           <li>Contact</li> 
        </ul>
        <div>
          <img src={myImage} alt="img" className='w-16 h-16 rounded-full object-cover'/>
        </div>
     </nav> 
    </>
  )
}

export default Navbar
