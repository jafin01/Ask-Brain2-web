/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  db,
  // functions
} from 'config/firebase';
import { collection, doc, getDoc, getDocs } from '@firebase/firestore';
// import { httpsCallable } from 'firebase/functions';

export default function Home({ chat }: any) {
  // const generateText = httpsCallable(functions, 'callOpenAi');
  // Call the Cloud Function with the required data
  // generateText({
  //   prompt: 'Once upon a time',
  //   model: 'gpt-3.5-turbo',
  //   temperature: '0.7',
  //   top_p: '1',
  //   frequency_penalty: '0',
  //   presence_penalty: '0',
  //   max_tokens: '1048',
  // })
  //   .then((result: any) => {
  //     console.log(result.data.generatedText);
  //   })
  //   .catch((error) => {
  //     console.log('inside error');
  //     console.log(error);
  //   });

  return (
    <div>
      <div className="bg-app-bg 2xl:w-1/3 m-auto 1g:w-1/2 xl:w-1/2 md:px-8 md:pt-2 md:pb-5 h-screen flex flex-col">
        <div className="px-5 py-5 flex items-center justify-center h-16">
          <h1 className="text-gray-100 text-xl font-mono">{chat.title}</h1>
        </div>
        <main className="flex-1 flex flex-col gap-1 overflow-y-auto">
          {chat.messages.reverse().map((message: any) => {
            return message.role === 'user' ? (
              <div className="px-4 font-lato">
                <div className="relative">
                  <div className="absolute inset-0 border opacity-10 rounded-3xl" />
                  <div className="relative flex gap-4 justify-between p-4 my-3 rounded-3xl">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-full bg-bgmatte-primary" />
                    </div>
                    <div className="mb-15">
                      <p className="text-gray-400 font-light leading-[1.5rem] tracking-[0.05rem] pr-2">
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
                    <div className="flex-1 w-1/2">
                      <p className="text-white font-light leading-[1.5rem] tracking-[0.05rem] pr-2">
                        {message.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </main>

        <div className="w-full py-4 px-4">
          <button
            type="button"
            className="bg-grad-purple rounded-[23px] text-lg w-full h-20 text-white font-lato font-bold"
          >
            Download Ask Brain 2
          </button>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const querySnapshot = await getDocs(collection(db, 'categories'));
//   const categories = querySnapshot.docs.map((doc) => doc.data());

//   return {
//     props: {
//       categories,
//     },
//   };
// }

export async function getStaticPaths() {
  // fetch the IDs of all products from Firebase
  const querySnapshot = await getDocs(collection(db, 'chats'));
  const products = querySnapshot.docs.map((document) => document.id);

  // generate an array of paths with the product IDs
  const paths = products.map((productId) => ({ params: { id: productId } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  // fetch the data for a single product with the given ID from Firebase
  const docRef = doc(db, 'chats', params.id);
  const docSnap = await getDoc(docRef);
  const chat = docSnap.data();

  return { props: { chat } };
}
