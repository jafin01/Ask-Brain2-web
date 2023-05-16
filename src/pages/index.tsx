// import { connectFunctionsEmulator } from 'firebase/functions';
import React, { useEffect, useState } from 'react';
// import { functions } from 'config/firebase';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import FeatureList from '@/layouts/FeatureList';
import MetricsList from '@/layouts/MetricsList';
import Accordion from '@/components/Accordian';
import Card from '@/components/Card';

function Home() {
  // connectFunctionsEmulator(functions, 'localhost', 5001);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolling(window.scrollY > 100);
    });
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

  return (
    <div className="w-full bg-gradient-to-br from-app-bg via-app-bg to-grad-purple">
      <Navbar
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleScroll={handleScroll}
        isScrolling={isScrolling}
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

      <section className="px-10 w-full text-gray-300 py-10">
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

      <section className="px-10 py-32 w-full text-gray-300">
        <div className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold leading-relaxed pb-10 text-center">
          <h1 className="md:py-4">FAQ</h1>
        </div>
        <Accordion title="How do we use">We can use it</Accordion>
        <Accordion title="How do we use">We can use it</Accordion>
        <Accordion title="How do we use">We can use it</Accordion>
        <Accordion title="How do we use">We can use it</Accordion>
        <Accordion title="How do we use">We can use it</Accordion>
      </section>

      <section className="px-10 font-poppins">
        <div className="text-center text-gray-300 pb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
            Subscription Options
          </h1>
          <h3 className="text-sm md:text-lg font-normal text-gray-400 md:mb-12">
            We have got plans which fits your budget
          </h3>
        </div>
        <div className="md:flex gap-8 justify-center">
          <Card className="w-full h-full m-0 mb-8 md:mb-0 md:w-1/4 p-14 rounded-3xl bg-transparent shadow-2xl border border-grad-purple cursor-pointer font-poppins">
            <h3 className="text-lg w-1/4 mb-8 text-center flex justify-center bg-gray-300 py-1 px-4 md:px-12 rounded-md text-app-bg">
              BASIC
            </h3>
            <h1 className="text-5xl text-gray-400 font-bold">$0</h1>
            <h4 className="pt-2 text-gray-500">Entry Level</h4>
            <hr className="h-px my-8 border-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-60" />
            <div className="flex gap-2 text-white pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-grad-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <h3>3 Active generations</h3>
            </div>
            <div className="flex gap-2 text-white pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-grad-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <h3>Extra generation on share</h3>
            </div>
            <div className="flex gap-2 text-white pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-grad-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <h3>Answers from GPT 3.5</h3>
            </div>
          </Card>
          <Card className="relative w-full mb-8 md:mb-0 md:w-1/4 p-14 pb-10 rounded-3xl bg-transparent shadow-2xl border border-grad-purple cursor-pointer font-poppins bg-gradient-to-br from-app-bg via-grad-purple to-grad-green">
            <svg
              width="93"
              height="68"
              viewBox="0 0 93 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 -mt-5 -mr-5"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.4387 11.3875C40.9537 10.2159 42.4212 9.82271 43.4529 10.5799L67.0764 27.9159C68.1081 28.673 69.5756 28.2798 70.0906 27.1082L80.112 4.30789C80.9178 2.47446 83.6192 2.83208 83.9202 4.81203L89.8978 44.1294C90.0509 45.1367 89.4223 46.0982 88.4382 46.3619L19.3714 64.8682C18.3872 65.132 17.3621 64.6136 16.9911 63.6647L2.50915 26.6261C1.77986 24.7609 3.9405 23.1005 5.5551 24.2853L25.6341 39.0203C26.6658 39.7774 28.1333 39.3842 28.6483 38.2126L40.4387 11.3875Z"
                fill="#AD96D6"
                stroke="#AD96D6"
                strokeWidth="4.33535"
              />
            </svg>
            <h3 className="text-lg w-1/4 mb-8 text-center flex justify-center bg-gradient-to-r from-yellow-300 via-white to-yellow-300 py-1 px-16 rounded-md">
              STANDARD
            </h3>
            <div className="flex items-baseline gap-2">
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-yellow-300">
                $5.99
              </h1>
              <h4 className="pt-2 text-gray-400">/ week</h4>
            </div>
            <h4 className="pt-2 text-gray-500">Base Level</h4>
            <hr className="h-px my-8 border-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-60" />
            <div className="flex gap-2 text-white pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-grad-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <h3>3 Days free trial</h3>
            </div>
            <div className="flex gap-2 text-white pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-grad-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <h3>Higher word limit</h3>
            </div>
            <div className="flex gap-2 text-white pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-grad-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <h3>No ads</h3>
            </div>
            <div className="flex gap-2 text-white pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-grad-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <h3>No Limits</h3>
            </div>
          </Card>
          <Card className="relative w-full mb-8 md:mb-0 h-auto md:w-1/4 p-14 pb-10 rounded-3xl bg-transparent shadow-2xl border border-grad-purple cursor-pointer font-poppins">
            <h3 className="text-lg w-1/4 mb-8 text-center flex justify-center bg-gradient-to-r from-white to-yellow-300 py-1 px-4 md:px-12 rounded-md text-app-bg">
              PRO
            </h3>
            <h3 className="text-sm w-24 tracking-tight absolute right-5 top-5 items-center mb-8 flex justify-center bg-grad-green text-white py-1 px-4  rounded-full">
              save 70%
            </h3>

            <div className="flex items-baseline gap-0">
              <h1 className="text-5xl text-gray-400 text-transparent tracking-tight bg-clip-text font-bold bg-gradient-to-r from-white to-yellow-300">
                $49.99
              </h1>
              <h4 className="pt-2 text-gray-400">/ Lifetime</h4>
            </div>
            <h4 className="pt-2 text-gray-500">Pro Level</h4>
            <hr className="h-px my-8 border-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-60" />
            <div className="flex gap-2 text-white pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-grad-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <h3>Billed Once</h3>
            </div>
            <div className="flex gap-2 text-white pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-grad-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <h3>Unlimited generations</h3>
            </div>
            <div className="flex gap-2 text-white pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-grad-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <h3>No Ads</h3>
            </div>
            <div className="flex gap-2 text-white pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-grad-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <h3>Higher word Limit</h3>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-app-bg md:mt-12">
        <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-full sm:flex-row">
          <Link
            href="/"
            className="text-xl font-black leading-none text-gray-400 select-none logo"
          >
            ASK BRAIN 2
          </Link>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
            © 2023 Ask Brain 2
          </p>
          <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
            <Link
              href="/facebook.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>{' '}
            </Link>
            <Link
              href="/instagram.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>{' '}
            </Link>
            <Link
              href="/twitter.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>{' '}
            </Link>
            <Link
              href="/github.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>{' '}
            </Link>
            <Link
              href="/dribbble.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Dribbble</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </span>
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
