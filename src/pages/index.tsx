// import { connectFunctionsEmulator } from 'firebase/functions';
import React, { useEffect, useState } from 'react';
// import { functions } from 'config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'config/firebase';
import Navbar from '@/components/Navbar';
import FeatureList from '@/layouts/FeatureList';
import MetricsList from '@/layouts/MetricsList';
import Accordion from '@/components/Accordian';
import PricingCard from '@/components/PricingCard';
import Footer from '@/components/Footer';

function Home() {
  // connectFunctionsEmulator(functions, 'localhost', 5001);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const isLoggedIn = async () => {
    const unsubscribe = await onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      // if (!user) {
      //   push('/login');
      // }
    });
    return unsubscribe; // Return the unsubscribe function
  };

  useEffect(() => {
    const unsubscribePromise = isLoggedIn(); // Store the promise

    return () => {
      unsubscribePromise.then((unsubscribe) => {
        unsubscribe(); // Call the unsubscribe function when the promise resolves
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // if (!isAuthenticated) return null;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // prevent the default behavior
    if (isOpen) handleOpen(); // close the navbar
    const { href } = e.currentTarget;
    const targetId = href.replace(/.*#/, '');
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full bg-gradient-to-br from-app-bg via-app-bg to-grad-purple">
      <Navbar
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleScroll={handleScroll}
        isScrolling={isScrolling}
        isAuthenticated={isAuthenticated}
      />
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

      <section className="w-full py-28 px-32 text-gray-300 font-poppins">
        <MetricsList />
      </section>

      <section id="features" className="px-10 w-full text-gray-300 py-10">
        <div className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold leading-relaxed">
          <span className="md:block md:py-5">
            Maximise your potential with{' '}
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl text-transparent md:py-5 bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-grad-green md:tracking-tight">
            ASK BRAIN 2
          </span>
        </div>
        <div id="about" className="pt-16">
          <FeatureList />
        </div>
      </section>

      <section id="faq" className="px-10 py-32 w-full text-gray-300">
        <div className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold leading-relaxed pb-10 text-center">
          <h1 className="md:py-4">FAQ</h1>
        </div>
        <Accordion title="How do we use">We can use it</Accordion>
        <Accordion title="How do we use">We can use it</Accordion>
        <Accordion title="How do we use">We can use it</Accordion>
        <Accordion title="How do we use">We can use it</Accordion>
        <Accordion title="How do we use">We can use it</Accordion>
      </section>

      <section id="pricing" className="px-10 font-poppins">
        <div className="text-center text-gray-300 pb-10 pt-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
            Subscription Options
          </h1>
          <h3 className="text-sm md:text-lg font-normal text-gray-400 md:mb-12">
            We have got plans which fits your budget
          </h3>
        </div>
        <PricingCard />
      </section>

      <section className="bg-app-bg md:mt-12">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
