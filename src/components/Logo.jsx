import React from 'react';

const TuklasLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16">
    <circle cx="50" cy="50" r="45" fill="#2A9D8F" />
    <path d="M50 20 L50 65 M35 30 L65 30" 
          stroke="#E9C46A" 
          stroke-width="8" 
          stroke-linecap="round"
          fill="none" />
    <path d="M30 55 A20 20 0 0 1 70 55" 
          stroke="#F4A261" 
          stroke-width="4" 
          stroke-linecap="round"
          fill="none" />
    <circle cx="30" cy="55" r="3" fill="#E76F51" />
    <circle cx="50" cy="60" r="3" fill="#E76F51" />
    <circle cx="70" cy="55" r="3" fill="#E76F51" />
  </svg>
);

export default TuklasLogo;