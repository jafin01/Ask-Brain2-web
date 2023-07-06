import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import FeatureCard from './FeatureCard';
import ThreeSphere from '../ThreeModel';
import FeatureDescription from './FeatureDescription';
// import FeatureDescription from './FeatureDescription';

const featureData = [
  {
    id: 1,
    title: 'Ask AI Anything',
    description:
      "Get instant answers to any question with Ask Brain 2's AI-powered platform. No more endless searching, just fast and accurate insights at your fingertips.",
  },
  {
    id: 2,
    title: 'Get help with School Work',
    description:
      "Get ahead in your studies with Ask Brain 2's AI-powered platform. From math equations to essay writing, get personalized guidance and instant feedback for all your academic needs.",
  },
  {
    id: 3,
    title: 'Texting tips for Relationships',
    description:
      'Get AI-powered tips for navigating difficult conversations with your partner. Improve your texting skills and build stronger bonds with Ask Brain 2.',
  },
  {
    id: 4,
    title: 'Chat about Any Topic',
    description:
      'Chat with Ask Brain 2 about anything that interests you. Our AI-powered platform is always ready to engage in intelligent conversations and provide you with expert insights on a wide range of topics.',
  },
  {
    id: 5,
    title: 'Chat about Any Topic',
    description:
      'Chat with Ask Brain 2 about anything that interests you. Our AI-powered platform is always ready to engage in intelligent conversations and provide you with expert insights on a wide range of topics.',
  },
  {
    id: 6,
    title: 'Chat about Any Topic',
    description:
      'Chat with Ask Brain 2 about anything that interests you. Our AI-powered platform is always ready to engage in intelligent conversations and provide you with expert insights on a wide range of topics.',
  },
];

export interface FeatureData {
  id: number;
  title: string;
  description: string;
}

export default function Features() {
  const [selectedData, setSelectedData] = useState<FeatureData | null>(null);

  const handleClick = (data: FeatureData) => {
    if (selectedData && selectedData.id === data.id) {
      // Same feature is clicked again, deselect it
      setSelectedData(null);
    } else {
      // Different feature is clicked, update selectedData
      setSelectedData(data);
    }
  };
  return (
    <div className="flex justify-around">
      <div className="flex flex-col justify-around py-10">
        {featureData.map(
          (data, ix) =>
            ix < featureData.length / 2 && (
              <div id="feature-card-top w-full h-full">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleClick(data)}
                  className="left-20 feature-card cursor-pointer flex absolute justify-center items-center w-1/4 h-1/6 rounded-2xl bg-gradient-to-b from-bg-gray-900 to bg-black shadow-[0_0_30px_theme('colors.purple.400')]"
                >
                  <h1 className="text-lg font-poppins text-gray-400">
                    {data.title}
                  </h1>
                </motion.div>
              </div>
            )
        )}
      </div>
      {/* <div className="flex items-center justify-center"> */}
      <ThreeSphere />
      {/* </div> */}
      {/* <div className=" flex justify-center items-center"> */}
      {selectedData && (
        <FeatureDescription
          data={selectedData}
          onClose={() => setSelectedData(null)}
        />
      )}
      {/* </div> */}
      <div className="right-0 flex flex-col justify-around w-auto py-10">
        {featureData.map(
          (data, ix) =>
            ix >= featureData.length / 2 && (
              <div id="feature-card-top w-full h-full">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleClick(data)}
                  className="right-20 feature-card cursor-pointer flex absolute justify-center items-center w-1/4 h-1/6 rounded-2xl bg-gradient-to-b from-bg-gray-900 to bg-black shadow-[0_0_30px_theme('colors.purple.400')]"
                >
                  <h1 className="text-lg font-poppins text-gray-400">
                    {data.title}
                  </h1>
                </motion.div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
