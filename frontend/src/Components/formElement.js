import React from 'react';

const FormElement = ({ label, type, name, placeholder }) => {
  return (
    <div className='text-lg text-black p-3'>
      <label htmlFor={name} className='m-2'>{label}: </label>
      <div>
      <input type={type} name={name} placeholder={placeholder} className='border-none p-1 outline-none w-64 h-12'/>
      </div>
    </div>
  );
};

export default FormElement;