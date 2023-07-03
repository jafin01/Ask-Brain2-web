import React from 'react';

const customShapeStyle = {
  clipPath: 'polygon(50% 14%, 100% 0, 100% 100%, 50% 85%, 0 100%, 0 0)',
};

export default function CallToAction() {
  return (
    <div className="flex items-center w-64 cursor-pointer py-10">
      <button
        type="button"
        className="select-none block w-full h-12 md:h-16 mb-5 md:mb-0 lg:mb-0 rounded-full bg-gray-200 text-app-bg border border-blue-800 text-xl font-poppins font-light shadow-lg"
      >
        <span>Get Started</span>
      </button>
      <div
        style={customShapeStyle}
        className="h-3 w-6 md:h-4 md:w-8 -ml-[2px] -mr-1 -mt-5 md:-mt-0 bg-white"
      />

      <div className="-mt-5 md:-mt-0">
        <div className="h-12 w-12 md:h-20 md:w-20 rounded-full bg-white flex justify-center items-center">
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-pink-600 via-violet-500 to-white transform" />
        </div>
      </div>
    </div>
  );
}
