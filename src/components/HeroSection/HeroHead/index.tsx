import React from 'react';
import { motion } from 'framer-motion';

export default function HeroHead() {
  const divVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 1, delayChildren: 1 },
    },
  };

  return (
    <div className="w-full lg:w-1/2 md:flex md:flex-col md:justify-center m-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={divVariants}
        // transition={{ duration: 1, delayChildren: 1 }}
        className="text-5xl text-center py-8 md:py-2 font-poppins font-bold md:text-7xl text-blue-300 md:tracking-tight"
      >
        <p className="md:py-5 leading-tight">
          Experience the{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-yellow-500 text-6xl lg:text-8xl to-purple-500 select-none selection:text-ellipsis">
            AI
          </span>{' '}
          Difference
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={divVariants}
        className="text-xl md:text-2xl lg:text-3xl text-center text-transparent bg-clip-text bg-gray-200 font-poppins leading-snug tracking-widest"
      >
        <p className="">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-lime-300 ">
            Seamlessly
          </span>{' '}
          Connect.
        </p>
        <p className="">
          Innovatively{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-lime-300">
            Communicate
          </span>
          .
        </p>
      </motion.div>
    </div>
  );
}
