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

  const { scrollYProgress } = useScroll({
    target: featureRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  const { scrollYProgress: scrollYProgressTitle } = useScroll({
    target: featureRef,
    offset: ['center start', 'end start'],
  });
  // const { scrollYProgress: scrollYProgressTitle } = useScroll();
  const xTitle = useTransform(scrollYProgressTitle, [0, 1], [0, -700]);

  return (
    <div className="w-full bg-gradient-to-br from-black via-black to-app-bg">
      <Navbar
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleScroll={handleScroll}
        isScrolling={isScrolling}
        isAuthenticated={isAuthenticated}
      />
      <motion.div ref={featureRef} style={{ y }}>
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
          className="px-10 pt-28 md:pt-28 lg:pb-96 w-full text-gray-300 font-poppins relative"
        >
          <MetricsList />
        </section>
      </motion.div>

      <section
        id="features"
        className="relative w-full text-gray-300 bg-gradient-to-b from-gray-900 via-black to-black py-10"
        // ref={featureRef}
      >
        {/* <div className="px-24 text-3xl md:text-4xl lg:text-5xl pt-14 font-poppins font-bold leading-relaxed">
        </div> */}
        {/* <span className="md:block px-24 text-3xl md:text-4xl lg:text-5xl pt-14 font-poppins font-light leading-relaxed">
          Get started with{' '}
        </span> */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 1 } }}
          className="px-24 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-cyan-300 to-lime-300 font-poppins text-4xl font-thin"
        >
          Get Started with
        </motion.h3>

        <motion.h1
          style={{ x: xTitle }}
          className="font-poppins pl-56 text-4xl md:text-5xl font-semibold lg:text-[20rem] whitespace-nowrap w-max text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-900 md:tracking-tight"
        >
          Ask Brain2
        </motion.h1>
        <div id="about" className="h-full relative">
          <Features />
        </div>
      </section>

      <section id="faq" className="px-10 py-32 w-full text-gray-300">
        <div className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold leading-relaxed pb-10 text-center">
          {/* <h1 className="md:py-4">FAQ</h1> */}
          <h3 className="text-center pb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-cyan-300 to-lime-300 font-poppins font-thin">
            Frequently Asked Questions
          </h3>
        </div>
        <Accordion title="How do we use">We can use it</Accordion>
        <Accordion title="How do we use">We can use it</Accordion>
        <Accordion title="How do we use">We can use it</Accordion>
        <Accordion title="How do we use">We can use it</Accordion>
        <Accordion title="How do we use">We can use it</Accordion>
      </section>

      <section id="pricing" className="px-10 font-poppins">
        <div className="text-center text-gray-300 pb-4 pt-10">
          <h1
            className="md:text-4xl lg:text-5xl mb-4 px-24 text-center text-transparent bg-clip-text bg-gradient-to-r
          from-orange-400 via-cyan-300 to-lime-300 font-poppins text-4xl
          font-thin"
          >
            Subscription Options
          </h1>
          <h3 className="text-lg md:text-xl font-extralight text-gray-500 md:mb-12">
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
