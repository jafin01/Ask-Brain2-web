import Link from 'next/link';
import React from 'react';

type Props = {
  isOpen: boolean;
  handleOpen: () => void;
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  isScrolling: boolean;
};

function Navbar({ isOpen, isScrolling, handleOpen, handleScroll }: Props) {
  return (
    <nav
      className={`fixed w-full font-poppins ${
        isScrolling ? 'bg-app-bg' : 'bg-transparent'
      } text-white h-16 flex justify-between px-10 items-center z-50`}
    >
      <div className="w-full flex justify-between items-center">
        <aside className="w-full md:w-1/4">
          <div className="flex items-center gap-4 cursor-pointer font-poppins text-xl">
            <svg
              width="30"
              height="30"
              viewBox="0 0 370 359"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M222.036 0.834961C293.304 0.834961 354.736 50.9731 369.019 120.795C371.812 134.453 363.006 147.789 349.348 150.582C335.691 153.376 322.355 144.569 319.561 130.912C310.085 84.584 269.323 51.3166 222.036 51.3166H174.65C106.173 51.3166 50.6608 106.828 50.6608 175.306V179.835C50.6608 250.814 108.2 308.353 179.179 308.353H287.498C304.923 308.353 319.049 294.228 319.049 276.802V216.17C319.049 202.23 330.35 190.929 344.29 190.929C358.23 190.929 369.531 202.23 369.531 216.17V276.802C369.531 322.108 332.804 358.835 287.498 358.835H179.179C80.3202 358.835 0.179199 278.694 0.179199 179.835V175.306C0.179199 78.9482 78.2924 0.834961 174.65 0.834961H222.036Z"
                fill="#644C8F"
              />
              <path
                d="M140.05 121.318C153.99 121.318 165.291 132.619 165.291 146.559V178.11C165.291 192.05 153.99 203.351 140.05 203.351C126.11 203.351 114.809 192.05 114.809 178.11V146.559C114.809 132.619 126.11 121.318 140.05 121.318ZM247.323 121.318C261.263 121.318 272.564 132.619 272.564 146.559V178.11C272.564 192.05 261.263 203.351 247.323 203.351C233.383 203.351 222.082 192.05 222.082 178.11V146.559C222.082 132.619 233.383 121.318 247.323 121.318Z"
                fill="#644C8F"
              />
            </svg>
            Ask Brain 2
          </div>
        </aside>
        <aside className="hidden md:flex w-3/4 justify-around">
          <Link href="#about" onClick={handleScroll}>
            About
          </Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#features">Features</Link>
          <Link href="#resources">Resources</Link>
          <Link href="#pricing">Pricing</Link>
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
        {isOpen && (
          <div className="md:hidden">
            <div className="absolute top-16 left-0 w-full py-20 bg-gradient-to-br from-bg-app-bg to-bg-grad-purple shadow-lg z-10">
              <div className="flex flex-col gap-10 items-center justify-center h-full">
                <Link href="#about" onClick={handleScroll}>
                  About
                </Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/features">Features</Link>
                <Link href="/resources">Resources</Link>
                <Link href="/pricing">Pricing</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
