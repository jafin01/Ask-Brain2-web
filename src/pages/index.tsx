/* eslint-disable @typescript-eslint/no-explicit-any */
// import { connectFunctionsEmulator, httpsCallable } from 'firebase/functions';
import React, { useState } from 'react';
// import { functions } from 'config/firebase';
import Navbar from '@/components/Navbar';

function Home() {
  // const functions = getFunctions(getApp());
  // connectFunctionsEmulator(functions, 'localhost', 5001);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // const fetchData = httpsCallable(functions, 'fetchData');

  // useEffect(() => {
  //   fetchData()
  //     .then((result: any) => {
  //       console.log('Fetched data:', result.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <div className="bg-gradient-to-br from-app-bg via-app-bg to-grad-purple h-screen w-full">
      <Navbar isOpen={isOpen} handleOpen={handleOpen} />
      <section className="pt-36 md:pt-0 md:flex w-full h-screen md:justify-center md:items-center">
        <aside className="w-full md:w-1/2 text-white px-16">
          <section>
            <h1 className="text-5xl leading-snug font-poppins font-medium lg:text-6xl md:leading-snug ">
              <p>Your Intelligent</p>
              <p>Chat Companion</p>
            </h1>
            <h3 className="font-poppins text-xl lg:text-2xl text-left text-gray-400 pt-5 pb-10 flex justify-center leading-relaxed lg:leading-relaxed font-light md:font-extralight">
              Customizable settings allow you to adjust tone, formality, and
              language style. Get advice or pass the time with your virtual
              friend.
            </h3>
          </section>
          <section className="lg:flex">
            <button
              type="button"
              className="block w-full mb-5 lg:mb-0 rounded-full bg-blue-500 lg:mr-10 px-8 py-3 font-poppins font-medium shadow-lg"
            >
              TRY FOR FREE
            </button>
            <button
              type="button"
              className="block w-full rounded-full bg-grad-purple px-8 py-3 font-poppins font-medium shadow-lg"
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
    </div>
  );
}

export default Home;
