import React from 'react'
import FormElement from '../formElement.js'

const Login = () => {
  return (
    <>
      <div className='m-auto p-3 bg-blue-200 flex justify-center items-center max-w-xl'>
          <div>
            <form action="submit" className='grid grid-auto-flow: column; gap: 10px;'>
                <FormElement label="Email" type="email" name="Email" placeholder="Enter your email here"/>
                <FormElement label="Password" type="password" name="Password" placeholder="Enter your password here"/>
                <button>Submit</button> 
                <button>New user?</button>
            
            </form>
          </div>
      </div>
    </>
  )
}

export default Login
