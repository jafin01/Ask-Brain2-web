/* eslint-disable consistent-return */
// import { connectFunctionsEmulator } from 'firebase/functions';
import React, { useEffect, useRef, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'config/firebase';
import { useScroll, useTransform, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MetricsList from '@/layouts/MetricsList';
import Accordion from '@/components/Accordian';
import PricingCard from '@/components/PricingCard';
import Footer from '@/components/Footer';
import HeroHead from '@/components/HeroSection/HeroHead';
import HeroBody from '@/components/HeroSection/HeroBody';
import Features from '@/components/FeatureSection';

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const featureRef: any = useRef(null);

  // useEffect(() => {
  //   if (featureRef.current) {
  //     const options = {
  //       root: null,
  //       rootMargin: '0px',
  //       threshold: 0,
  //     };

  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setIsFeaturesVisible(true);

  //           const elem = document.getElementById('features');
  //           elem?.scrollIntoView({
  //             behavior: 'smooth',
  //           });
  //         } else {
  //           setIsFeaturesVisible(false);
  //         }
  //       });
  //     }, options);

  //     observer.observe(featureRef.current);

  //     return () => {
  //       observer.disconnect();
  //     };
  //   }
  // }, [featureRef]);

  const isLoggedIn = async () => {
    const unsubscribe = await onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribePromise = isLoggedIn();
    setScreenHeight(window.innerHeight);

    return () => {
      unsubscribePromise.then((unsubscribe) => {
        unsubscribe();
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

  console.log('screenHeight', screenHeight);

  const { scrollY } = useScroll();
  const y = useTransform(
    scrollY,
    [screenHeight / 2, screenHeight * 2],
    ['0%', '50%']
  );

  return (
    <div className="w-full bg-gradient-to-br from-black via-black to-app-bg">
      <Navbar
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleScroll={handleScroll}
        isScrolling={isScrolling}
        isAuthenticated={isAuthenticated}
      />
      <motion.div className="overflow-y-scroll" style={{ y }}>
        <section
          id="home"
          className="px-10 pt-24 md:pt-32 lg:pt-32 lg:flex w-full lg:min-h-screen lg:justify-center lg:items-center"
        >
          <section className="w-full lg:flex-col lg:justify-center lg:items-center selection:bg-lime-300 selection:text-black">
            <HeroHead />
            <HeroBody />
          </section>
        </section>

        <section
          id="metricsList"
          className="px-10 pt-28 md:pt-32 lg:pt-32 pb-64 w-full text-gray-300 font-poppins relative"
        >
          <MetricsList />
        </section>
      </motion.div>

      <section
        id="features"
        className="px-24 relative w-full text-gray-300 bg-gradient-to-b from-gray-900 via-black to-black py-10"
        ref={featureRef}
      >
        {/* <div className=""> */}
        <div className="text-3xl md:text-4xl lg:text-5xl py-14 font-poppins font-bold leading-relaxed">
          <span className="md:block md:py-5">
            Maximise your potential with{' '}
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl text-transparent md:py-5 bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-grad-green md:tracking-tight">
            ASK BRAIN 2
          </span>
        </div>
        <div id="about" className="pt-16 h-full relative">
          <Features />
        </div>
        {/* </div> */}
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
        <Footer handleScroll={handleScroll} />
      </section>
    </div>
  );
}
