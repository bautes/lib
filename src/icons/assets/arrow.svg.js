import React from 'react';

const Arrow = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 26 26'
  >
    <path
      className='logo-stroke'
      d='M14.0835 22.2083L23.2918 13L14.0835 3.79167'
      stroke='#00BCEB'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      className='logo-stroke'
      d='M23.2918 13H2.7085'
      stroke='#00BCEB'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

export default Arrow;
