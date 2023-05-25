/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from '@firebase/firestore';
import { db } from 'config/firebase';
import { useRouter } from 'next/router';
import Chat from '@/components/Chat/Chat';

function CharacterForm({ isUpdate }: { isUpdate: boolean }) {
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
    if (isUpdate) {
      getSelectedData();
    }
  }, [isUpdate]);

  return (
    <div className="bg-gradient-to-br from-app-bg via-app-bg to-grad-purple min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-6 bg-app-bg text-gray-600 rounded-2xl">
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

export default CharacterForm;
