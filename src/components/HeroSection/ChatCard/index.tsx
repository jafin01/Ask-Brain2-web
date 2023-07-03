import React from 'react';

export default function ChatCard() {
  return (
    <div className="w-full h-full px-2 flex flex-col pt-8 pb-2 justify-between text-center bg-gray-200 rounded-[40px] border border-app-bg">
      <h1 className="text-left text-[#1e1b4b] font-semibold px-4 text-3xl font-lato leading-9 tracking-tight">
        AI-Powered Chats,{' '}
        <span className="text-gray-400">Your Secret to Success.</span>
      </h1>
      <div>
        <div className="py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            className="w-12 h-12 inline-block"
          >
            <circle cx="6" cy="12" r="2" fill="black" />
            <circle cx="12" cy="12" r="2" fill="gray" />
            <circle cx="18" cy="12" r="2" fill="gray" />
          </svg>
        </div>
        <div className="flex justify-between items-center rounded-full shadow-xl border font-poppins border-gray-400 mx-2 p-4 text-sm text-left text-gray-500">
          <div>Your message</div>
          {/* <div className="flex items-center"> */}
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
          >
            <circle cx="27" cy="27" r="27" fill="#644C8F" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.53 27.7643C17.6814 27.4379 17.6734 26.2402 18.5176 25.9025L35.3106 19.1853C36.1094 18.8658 36.9121 19.6373 36.6244 20.4482L30.4405 37.8755C30.1362 38.7332 28.9375 38.7715 28.5789 37.935L25.5094 30.7727C25.4031 30.5247 25.2011 30.3301 24.9492 30.2333L18.53 27.7643Z"
              stroke="white"
            />
            <path d="M25 30L30 26" stroke="white" strokeLinecap="round" />
          </svg>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
