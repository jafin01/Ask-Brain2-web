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
          <svg
            width="241"
            height="212"
            viewBox="0 0 241 212"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 mx-8 my-4"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M224.678 109.22C226.299 96.3606 220.288 83.1823 208.382 76.2503L157.714 46.7587L175.066 20.9062C179.399 22.4582 184.394 20.9434 187.078 16.9475C190.246 12.2263 188.987 5.83297 184.265 2.6652C179.545 -0.503562 173.151 0.755507 169.983 5.47507C167.301 9.47125 167.792 14.667 170.87 18.0894L153.338 44.2111L92.9324 9.05131C81.4262 2.3548 67.5695 3.32493 57.2819 10.3976C51.5369 7.58708 45.0566 6.81838 38.7278 8.24572C31.377 9.90274 25.1115 14.3235 21.0857 20.6921L17.0175 27.1282C12.9919 33.4972 11.6873 41.0525 13.3436 48.4035C13.4301 48.7811 13.5221 49.1556 13.6217 49.5275C15.1164 55.1056 18.2287 60.004 22.5849 63.6939L4.908 94.0631C-4.34627 109.962 1.04007 130.353 16.9401 139.607L132.387 206.806C148.285 216.061 168.678 210.674 177.932 194.774L194.748 165.884C201.172 169.493 208.614 170.443 215.755 168.556C223.04 166.631 229.139 161.986 232.93 155.474L236.761 148.893C240.551 142.379 241.58 134.783 239.655 127.498L239.628 127.398C237.688 120.157 233.054 114.095 226.572 110.323L224.678 109.22ZM158.156 144.531L58.3647 86.4455C44.9107 78.6147 40.3546 61.3616 48.185 47.9085L50.8722 43.2906C58.7026 29.8376 75.9549 25.2801 89.4089 33.1109L189.2 91.1951C202.652 99.0259 207.211 116.28 199.38 129.732L196.691 134.352C188.86 147.804 171.608 152.36 158.156 144.531Z"
              fill="#AD96D6"
            />
          </svg>
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
