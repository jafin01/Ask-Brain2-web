import React from 'react';

function TermsBanner({ heading }: { heading: string }) {
  return (
    <div className="w-full h-1/2 bg-gradient-to-br from-black via-grad-purple to-grad-green text-gray-300 flex justify-center items-center">
      <h1 className="text-6xl font-poppins font-bold">{heading}</h1>
    </div>
  );
}

export default TermsBanner;
