import React from 'react'
import FormElement from '../formElement.js'

const Signup = () => {
  return (
    <div className='m-auto p-6 bg-blue-100 flex justify-center items-center min-h-screen'>
      <div className='bg-white shadow-lg rounded-xl p-8 w-full max-w-lg'>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign-Up</h2>
        <form className='grid gap-6'>
        <FormElement label="Name" type="text" name="Name" placeholder="Enter your full name here"/>
       <FormElement label="Email" type="email" name="Email" placeholder="Enter your email here"/>
        <FormElement label="Mobile" type="number" name="Number" placeholder="Enter your contact number here"/>
       <FormElement label="Password" type="password" name="Password" placeholder="Enter your password here"/>
          
          <div className="flex flex-col gap-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Submit
            </button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300">
              Already a user?
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
