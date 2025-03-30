import React from 'react';

const FormElement = ({ label, type, name, placeholder }) => {
  return (
    <div className='text-lg text-black p-4 flex items-center gap-4'>
      <label htmlFor={name} className='font-semibold text-gray-700 w-32'>{label}: </label> 
      <div className='relative'>
      <input type={type} name={name} placeholder={placeholder} 
className='border border-gray-300 rounded-lg p-3 outline-none w-72 h-12 focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-300' 
/>
      </div>
    </div>
  );
};

export default FormElement;