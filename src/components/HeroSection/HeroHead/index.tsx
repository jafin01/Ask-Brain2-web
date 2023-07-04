import React from 'react';

export default function HeroHead() {
  return (
    <div className="w-full lg:w-1/2 md:flex md:flex-col md:justify-center m-auto">
      <div className="text-5xl text-center py-8 md:py-2 font-poppins font-bold md:text-7xl text-blue-300 md:tracking-tight">
        <p className="md:py-5 leading-tight">
          Experience the{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-yellow-500 text-6xl lg:text-8xl to-purple-500 select-none selection:text-ellipsis">
            AI
          </span>{' '}
          Difference
        </p>
      </div>

      <div className="text-xl md:text-2xl lg:text-3xl text-center text-transparent bg-clip-text bg-gray-200 font-poppins leading-snug tracking-widest">
        <p className="">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-lime-300 ">
            Seamlessly
          </span>{' '}
          Connect.
        </p>
        <p className="">
          Innovatively{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-lime-300">
            Communicate
          </span>
          .
        </p>
      </div>
    </div>
  );
}
