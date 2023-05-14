/* eslint-disable @typescript-eslint/no-explicit-any */
// import { connectFunctionsEmulator } from 'firebase/functions';
import React, { useState } from 'react';
// import { functions } from 'config/firebase';
import Navbar from '@/components/Navbar';
import FeatureList from '@/layouts/FeatureList';

function Home() {
  // connectFunctionsEmulator(functions, 'localhost', 5001);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-gradient-to-br from-app-bg via-app-bg to-grad-purple pb-10 md:pb-0">
      <Navbar isOpen={isOpen} handleOpen={handleOpen} />
      <section className="px-10 pt-24 md:pt-0 md:flex w-full md:min-h-screen md:justify-center md:items-center">
        <aside className="w-full md:w-1/2 text-white">
          <div className="text-5xl leading-snug md:py-3 font-poppins font-bold md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-white via-grad-purple to-grad-green md:tracking-tight">
            <p className="md:py-5 text-transparent">Your Intelligent</p>
            <p className="text-transparent">Chat Companion</p>
          </div>
          <h3 className="font-poppins text-xl lg:text-2xl text-left text-gray-400 pt-5 pb-10 flex justify-center leading-relaxed lg:leading-relaxed font-extralight max-w-xl">
            Customizable settings allow you to adjust tone, formality, and
            language style. Get advice or pass the time with your virtual
            friend.
          </h3>
          <section className="lg:flex max-w-md">
            <button
              type="button"
              className="block w-full mb-5 lg:mb-0 rounded-full bg-blue-500 lg:mr-10 py-3 text-lg font-lato font-medium shadow-lg"
            >
              DOWNLOAD
            </button>
            <button
              type="button"
              className="block w-full rounded-full bg-grad-purple py-3 text-lg font-lato font-medium shadow-lg"
            >
              SHOW VIDEO
            </button>
          </section>
        </aside>
        <aside className="hidden md:flex w-full md:flex-1 justify-center text-white">
          <img
            src="../../../assets/askbrain2-mockup.png"
            alt="ask-brain2-mockup"
            className="h-3/4 w-full object-cover"
          />
        </aside>
      </section>

      <section className="px-10 w-full text-gray-300 py-20">
        <div className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold leading-relaxed">
          <span className="md:block md:py-5">
            Maximize your potential with{' '}
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl text-transparent md:py-5 bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-grad-green md:tracking-tight">
            ASK BRAIN 2
          </span>
        </div>
        <div className="pt-16">
          <FeatureList />
        </div>
      </section>
    </div>
  );
}

export default Home;

// const generateText = httpsCallable(functions, 'generateChat');

// const takeScreenshot = httpsCallable(functions, 'takeScreenshot');

// useEffect(() => {
//   takeScreenshot({
//     // url: 'http://www.google.com',
//     id: 'f16bfd7c-9a8e-49ac-8ed7-2859a49a5699',
//   })
//     .then((result: any) => {
//       console.log('Fetched data:', result.data);
//     })
//     .catch((error) => {
//       console.error('Error fetching data:', error);
//     });
// }, []);

// useEffect(() => {
//   generateText({
//     prompt: [
//       {
//         role: 'user',
//         content: 'Hello, how are you?',
//       },
//     ],
//   })
//     .then((result: any) => {
//       console.log('Fetched data:', result.data);
//     })
//     .catch((error) => {
//       console.error('Error fetching data:', error);
//     });
// }, []);
