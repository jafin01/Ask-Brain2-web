import React from 'react';
import { motion } from 'framer-motion';
import { FeatureData } from '..';

export default function FeatureDescription({
  className = '',
  data,
  onClose,
}: {
  className?: string;
  data: FeatureData;
  onClose: () => void;
}) {
  return (
    <div className={`absolute w-1/4 h-full flex items-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full h-1/2 rounded-2xl bg-gradient-to-b from-bg-gray-900 to-bg-black shadow-[0_0_30px_theme('colors.cyan.400')]"
      >
        <div className="w-full flex justify-end p-4">
          <button type="button" onClick={onClose} className="cursor-pointer ">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="h-full pb-4 m-auto">
          {data.icon}
          <h1 className="font-poppins text-lg px-8 text-gray-400">
            {data.description}
          </h1>
        </div>
      </motion.div>
    </div>
  );
}

FeatureDescription.defaultProps = {
  className: String,
};
