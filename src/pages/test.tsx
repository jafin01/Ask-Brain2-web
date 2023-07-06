import React from 'react';

export default function test() {
  return (
    <div>
      <div className="relative bg-black w-full h-screen flex justify-around">
        <div className=" absolute flex flex-col justify-around">
          <div className="bg-violet-400 w-36 h-36" />
          <div className="bg-indigo-400 w-36 h-36" />
          <div className="bg-blue-400 w-36 h-36" />
        </div>
        <h1 className="font-extrabold text-white text-7xl font-poppins flex items-center justify-center">
          Hello
        </h1>
        <div className="flex flex-col justify-around">
          <div className="bg-green-400 w-36 h-36" />
          <div className="bg-yellow-400 w-36 h-36" />
          <div className="bg-orange-400 w-36 h-36" />
        </div>
      </div>
    </div>
  );
}
