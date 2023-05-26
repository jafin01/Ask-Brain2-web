/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from '@firebase/firestore';
import { db } from 'config/firebase';
import { useRouter } from 'next/router';
import Chat from '@/components/Chat/Chat';

function Character() {
  const router = useRouter();

  const [firstMessage, setFirstMessage] = useState('');
  const [prompts, setPrompts] = useState<
    { content: string; role: string; loading?: boolean }[]
  >([]);

  async function getSelectedData() {
    const { id } = router.query;

    try {
      const docRef = doc(db, 'characters', id as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const { prompts: docPrompts, firstMessage: docFirstMessage } =
          docSnap.data()!;
        setFirstMessage(docFirstMessage);
        setPrompts(docPrompts);
      }
    } catch (error) {
      console.log('Error getting document:', error);
    }
  }

  useEffect(() => {
    getSelectedData();
  }, [router.query.id]);

  return (
    <div className="bg-gradient-to-br from-app-bg via-app-bg to-grad-purple min-h-screen flex justify-center items-center">
      <div className="absolute top-0 left-0">
        <button
          type="button"
          className="bg-transparent text-white text-2xl font-bold py-2 px-4 rounded"
          onClick={() => router.back()}
        >
          <span className="flex gap-2 font-bold items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </span>
        </button>
      </div>
      <div className="w-full max-w-md bg-app-bg text-gray-600 rounded-2xl">
        <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-grad-green to-white bg-clip-text text-center mb-8">
          Test your character
        </h1>
        <div className="flex flex-col gap-5">
          <div
            className="relative"
            style={{
              width: '100%',
              height: '500px',
              position: 'relative',
            }}
          >
            <Chat firstMessage={firstMessage} prompts={prompts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
