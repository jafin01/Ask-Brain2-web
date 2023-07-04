import React from 'react';

export default function MetricsList() {
  return (
    <>
      {/* <hr className="h-px border-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-60" /> */}
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-around items-center text-center gap-32 md:gap-20 lg:gap-0 py-20">
        <div className="flex flex-col gap-3 justify-center items-center w-1/4">
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 rounded-full bg-transparent flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </div>
            <div className="text-left">
              <p className="text-lg font-thin tracking-widest text-gray-400">
                Download&apos;s
              </p>
              <p className="text-5xl font-poppins font-light text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-purple-500">
                100K+
              </p>
            </div>
          </div>
        </div>
        <hr className="hidden lg:flex w-full md:w-52 h-px rotate-90 border-0 bg-gradient-to-br from-purple-500 to-cyan-500" />
        <div className="flex flex-col gap-3 justify-center items-center w-1/3">
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 rounded-full bg-transparent flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </div>
            <div className="text-left w-full">
              <p className="w-full text-lg font-thin tracking-widest text-gray-400">
                Question&apos;s Answered
              </p>
              <p className="text-5xl font-poppins font-light text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-purple-500">
                100K+
              </p>
            </div>
          </div>
        </div>
        <hr className="hidden lg:flex w-52 h-px rotate-90 border-0 bg-gradient-to-br from-purple-500 to-cyan-500" />
        <div className="flex flex-col gap-3 justify-center items-center w-1/3">
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 rounded-full bg-transparent flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-lg font-thin tracking-widest text-gray-400">
                Character&apos;s created
              </p>
              <p className="text-5xl font-poppins font-light text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-purple-500">
                800+
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="h-px border-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-60" /> */}
    </>
  );
}
