import React from 'react';

const Mail = ({ className }) => (
  <svg
    className={className}
    viewBox='0 0 36 36'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      className='logo-stroke'
      d='M10 10H26C27.1 10 28 10.9 28 12V24C28 25.1 27.1 26 26 26H10C8.9 26 8 25.1 8 24V12C8 10.9 8.9 10 10 10Z'
      stroke='inherit'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      className='logo-stroke'
      d='M28 12L18 19L8 12'
      stroke='inherit'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

export default Mail;
