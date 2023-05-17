import React, { useState } from 'react';
// import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-grad-purple m-3 rounded-lg overflow-hidden md:w-1/2 mx-auto bg-gradient-to-r bg-transparent shadow-2xl z-10 outline-none text-white">
      <button
        type="button"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        {isOpen ? (
          // <MinusIcon className="w-6 h-6 text-gray-400" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        ) : (
          // <PlusIcon className="w-6 h-6 text-gray-400" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="p-4">
          <div className="prose">{children}</div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
