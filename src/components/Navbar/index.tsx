import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="font-poppins text-white bg-red-300 h-16 flex justify-between px-10 items-center">
      <div className="w-full flex justify-between items-center">
        <aside className="bg-black w-full md:w-1/4">
          <h1 className="cursor-pointer">Ask Brain 2</h1>
        </aside>
        <aside className="hidden md:flex bg-yellow-300 w-3/4 justify-around">
          <Link href="/faq">FAQ</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/faq">FAQ</Link>
        </aside>
        <aside className="flex md:hidden">
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={handleOpen}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={handleOpen}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </aside>
      </div>
      <div className="flex items-center justify-between">
        {/* <div className="hidden lg:flex lg:justify-between bg-red-500">
          <Link href="/faq">FAQ</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/faq">FAQ</Link>
        </div> */}

        {isOpen && (
          <div className="lg:hidden">
            <div className="absolute top-16 left-0 w-full h-1/2 bg-red-300">
              <div className="flex flex-col gap-10 items-center justify-center h-full">
                <Link href="/faq">FAQ</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/faq">FAQ</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
