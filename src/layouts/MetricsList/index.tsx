import React from 'react';

export default function MetricsList() {
  return (
    <>
      <hr className="h-px border-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-60" />
      <div className="flex flex-col md:flex-row justify-around items-center text-center gap-32 md:gap-0 py-20">
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-grad-green">
            2000+
          </p>
          <p className="text-xl font-medium">DOWNLOADS</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-grad-green">
            1000+
          </p>
          <p className="text-xl font-medium">ACTIVE USERS</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-grad-green">
            100K+
          </p>
          <p className="text-xl font-medium">QUESTIONS ANSWERED</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-grad-green">
            800+
          </p>
          <p className="text-xl font-medium">PREMIUM USERS</p>
        </div>
      </div>
      <hr className="h-px border-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-60" />
    </>
  );
}