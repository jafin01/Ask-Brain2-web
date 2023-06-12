/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from '@firebase/firestore';
import { db } from 'config/firebase';
import { useRouter } from 'next/router';
import ChatFirebase from '@/components/Chat/ChatFirebase';

function Character() {
  const router = useRouter();

  const [firstMessage, setFirstMessage] = useState('');
  const [prompts, setPrompts] = useState<
    { content: string; role: string; loading?: boolean }[]
  >([]);
  const [judge, setJudge] = useState(null);
  const [image, setImage] = useState(null);

  async function getSelectedData() {
    const { id } = router.query;

    try {
      const docRef = doc(db, 'characters', id as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const {
          prompts: docPrompts,
          firstMessage: docFirstMessage,
          judge: docJudge,
          avatar: docAvatar,
        } = docSnap.data()!;
        setFirstMessage(docFirstMessage);
        setPrompts(docPrompts);
        setJudge(docJudge);
        setImage(docAvatar);
      }
    } catch (error) {
      console.log('Error getting document:', error);
    }
  }

  useEffect(() => {
    getSelectedData();
  }, [router.query.id]);

  return (
    <div className="bg-[#FFFAF5] flex flex-col items-center justify-center h-[100dvh]">
      <div className="w-full relative md:max-h-[calc(100vh-200px)] max-w-[1200px] h-[100dvh]">
        <ChatFirebase
          firstMessage={firstMessage}
          prompts={prompts}
          id={router.query.id as string}
          characterName={router.query.characterName as string}
          judge={judge}
          avatarImage={image}
        />
      </div>
    </div>
  );
}

export default Character;
