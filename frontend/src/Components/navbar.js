import React from 'react'
import '../index.css'

const Navbar = () => {
  return (
    <>
     <nav className='bg-slate-500 text-white flex justify-between items-center p-5'> 
     <ul className="flex space-x-6 text-white text-lg">
     <li>Home</li>
           <li>About</li>
           <li>Projects</li>
           <li>Contact</li> 
        </ul>
        <div>
          <img src="./ambika img.jpeg" alt="img" />
        </div>
     </nav> 
    </>
  )
}

export default Navbar
