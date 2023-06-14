/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { db } from 'config/firebase';
import { doc, getDoc } from '@firebase/firestore';

export default function Screenshot({ chat }: any) {
  const updatedChat = JSON.parse(chat);
  return (
    <div className="w-full bg-app-bg">
      <div className="bg-app-bg 2xl:w-1/3 m-auto 1g:w-1/2 xl:w-1/2 md:px-8 md:pt-2 md:pb-5 flex flex-col">
        <div className="px-5 py-10 pb-16 flex gap-5 items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 370 359"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M222.036 0.834961C293.304 0.834961 354.736 50.9731 369.019 120.795C371.812 134.453 363.006 147.789 349.348 150.582C335.691 153.376 322.355 144.569 319.561 130.912C310.085 84.584 269.323 51.3166 222.036 51.3166H174.65C106.173 51.3166 50.6608 106.828 50.6608 175.306V179.835C50.6608 250.814 108.2 308.353 179.179 308.353H287.498C304.923 308.353 319.049 294.228 319.049 276.802V216.17C319.049 202.23 330.35 190.929 344.29 190.929C358.23 190.929 369.531 202.23 369.531 216.17V276.802C369.531 322.108 332.804 358.835 287.498 358.835H179.179C80.3202 358.835 0.179199 278.694 0.179199 179.835V175.306C0.179199 78.9482 78.2924 0.834961 174.65 0.834961H222.036Z"
                fill="#644C8F"
              />
              <path
                d="M140.05 121.318C153.99 121.318 165.291 132.619 165.291 146.559V178.11C165.291 192.05 153.99 203.351 140.05 203.351C126.11 203.351 114.809 192.05 114.809 178.11V146.559C114.809 132.619 126.11 121.318 140.05 121.318ZM247.323 121.318C261.263 121.318 272.564 132.619 272.564 146.559V178.11C272.564 192.05 261.263 203.351 247.323 203.351C233.383 203.351 222.082 192.05 222.082 178.11V146.559C222.082 132.619 233.383 121.318 247.323 121.318Z"
                fill="#644C8F"
              />
            </svg>

            <h1 className="text-gray-100 text-xl font-poppins font-semibold">
              Ask Brain2
            </h1>
          </div>
          <h1 className="text-gray-100 text-right text-base lg:text-xl font-mono">
            {updatedChat.title}
          </h1>
        </div>
        <main className="flex-1 flex flex-col gap-1">
          {updatedChat.messages?.reverse().map((message: any) => {
            return message.role === 'user' ? (
              <div className="px-4 font-lato">
                <div className="relative">
                  <div className="absolute inset-0 border opacity-10 rounded-3xl" />
                  <div className="relative flex gap-4 p-4 my-3 rounded-3xl">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-full bg-bgmatte-primary flex items-center justify-center p-2 text-grad-purple">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-full h-full"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mb-15 flex-1">
                      <p className="text-gray-400 font-light leading-[1.5rem] tracking-[0.05rem]">
                        {message.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="px-4 font-lato">
                <div className="relative">
                  <div className="absolute inset-0 border border-t-0 border-l-0 bg-gradient-to-br from-app-bg via-grad-purple to-grad-green opacity-20 rounded-3xl" />
                  <div className="p-4 z-10 relative flex justify-between gap-4">
                    <div className="h-[46px] w-[46px] rounded-3xl ">
                      <div className="h-[46px] w-[46px] rounded-full bg-app-bg flex justify-center items-center">
                        <svg
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 0C18.6308 0 23.072 3.51421 24 8C24.1815 8.87742 23.8874 9.82052 23 10C22.1126 10.1795 21.1815 8.87742 21 8C20.3842 5.02361 17.0726 3 14 3H11C6.55049 3 3 6.60062 3 11V12C3 16.5601 7.38795 20 12 20H19C20.1322 20 21 19.1195 21 18V14C21 13.1044 21.0942 12 22 12C22.9058 12 24 13.1044 24 14V18C24 20.9107 21.9438 23 19 23H12C5.57636 23 0 18.3513 0 12V11C0 4.80943 4.73889 0 11 0H14Z"
                            fill="#644C8F"
                          />
                          <path
                            d="M9 8C9.82843 8 10 9.15033 10 10V11C10 11.8497 9.82843 13 9 13C8.17157 13 7 11.8497 7 11V10C7 9.15033 8.17157 8 9 8Z"
                            fill="#644C8F"
                          />
                          <path
                            d="M16 8C16.8284 8 17 9.15033 17 10V11C17 11.8497 16.8284 13 16 13C15.1716 13 14 11.8497 14 11V10C14 9.15033 15.1716 8 16 8Z"
                            fill="#644C8F"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mb-15 flex-1 w-1/2">
                      <p className="text-white font-light leading-[1.5rem] tracking-[0.05rem] pr-2">
                        {message.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <section className="px-6 text-white justify-around my-14 flex">
            <div className="w-52">
              <img
                src="../../../assets/google-play.png"
                alt="google-play-logo"
                className="rounded-lg"
              />
            </div>
            <div className="w-52">
              <img
                src="../../../assets/app-store.png"
                alt="google-play-logo"
                className="rounded-lg"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

// export async function getStaticPaths() {
//   // fetch the IDs of all products from Firebase
//   const querySnapshot = await getDocs(collection(db, 'chats'));
//   const products = querySnapshot.docs.map((document) => document.id);

//   // generate an array of paths with the product IDs
//   const paths = products.map((productId) => ({ params: { id: productId } }));

//   return { paths, fallback: false };
// }

export async function getStaticProps({ params }: any) {
  // fetch the data for a single product with the given ID from Firebase
  const docRef = doc(db, 'chats', params.id);
  const docSnap = await getDoc(docRef);
  const chat = JSON.stringify(docSnap.data());

  return { props: { chat } };
}
