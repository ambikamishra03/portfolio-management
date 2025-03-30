// import React from 'react'
// import FormElement from '../formElement.js'

// const Login = () => {
//   return (
//     <>
//       <div className='m-auto p-3 bg-blue-200 flex justify-center items-center max-w-2xl h-[50vh]'>
//           <div>
//             <form action="submit" className='grid grid-auto-flow: column; gap: 10px;'>
//                 <FormElement label="Email" type="email" name="Email" placeholder="Enter your email here"/>
//                 <FormElement label="Password" type="password" name="Password" placeholder="Enter your password here"/>
//                 <button>Submit</button> 
//                 <button>New user?</button>
            
//             </form>
//           </div>
//       </div>
//     </>
//   )
// }

// export default Login

import React from 'react';
import FormElement from '../formElement.js';

const Login = () => {
  return (
    <div className='m-auto p-6 bg-blue-100 flex justify-center items-center min-h-screen'>
      <div className='bg-white shadow-lg rounded-xl p-8 w-full max-w-lg'>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form className='grid gap-6'>
          <FormElement label="Email" type="email" name="Email" placeholder="Enter your email here" />
          <FormElement label="Password" type="password" name="Password" placeholder="Enter your password here" />
          <div className="flex flex-col gap-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Submit
            </button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300">
              New User?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

