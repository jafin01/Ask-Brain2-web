/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
} from "@firebase/firestore";
import { db } from "config/firebase";
import { useRouter } from "next/router";
import Chat from "@/components/Chat/Chat";

function Character() {
  const router = useRouter();

  const [firstMessage, setFirstMessage] = useState("");
  const [prompts, setPrompts] = useState<
    { content: string; role: string; loading?: boolean }[]
  >([]);
  const [judge, setJudge] = useState(null);
  const [image, setImage] = useState(null);
  const [limitMessage, setLimitMessage] = useState<DocumentData | null>(null);
  const [characterLimit, setCharacterLimit] = useState(undefined);
  const [variation, setVariation] = useState(null);

  async function getSelectedData() {
    const { id } = router.query;

    try {
      const docRef = doc(db, "characters", id as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const {
          prompts: docPrompts,
          firstMessage: docFirstMessage,
          judge: docJudge,
          avatar: docAvatar,
          messagesLimit,
          variations,
        } = docSnap.data()!;
        if (variations) {
          const randomIndex = Math.floor(
            Math.random() * (variations.length + 1)
          );
          if (randomIndex === 0) {
            setFirstMessage(docFirstMessage);
            setPrompts(docPrompts);
            setJudge(docJudge);
            setImage(docAvatar);
            setCharacterLimit(messagesLimit);
          } else {
            const randomVariation = variations[randomIndex - 1];
            const {
              prompts: variationPrompts,
              firstMessage: variationFirstMessage,
              judge: variationJudge,
              avatar: variationAvatar,
              messagesLimit: variationMessagesLimit,
            } = randomVariation;

            setVariation(randomVariation);
            setFirstMessage(variationFirstMessage);
            setPrompts(variationPrompts);
            setJudge(variationJudge);
            setImage(variationAvatar);
            setCharacterLimit(variationMessagesLimit);
          }
        } else {
          setFirstMessage(docFirstMessage);
          setPrompts(docPrompts);
          setJudge(docJudge);
          setImage(docAvatar);
          setCharacterLimit(messagesLimit);
        }
      }

      // get all docs for limitMessages collection
      const querySnapshot = await getDocs(collection(db, "limitMessages"));
      const limitMessages = querySnapshot.docs
        .map((docReference) => ({
          id: docReference.id,
          active: docReference.data().active,
          ...docReference.data(),
        }))
        .filter((docReference) => docReference?.active);
      console.log(limitMessages);

      // get a random limit message
      const randomLimitMessage =
        limitMessages[Math.floor(Math.random() * limitMessages.length)];
      console.log(randomLimitMessage);
      setLimitMessage(randomLimitMessage);
    } catch (error) {
      console.log("Error getting document:", error);
    }
  }

  useEffect(() => {
    getSelectedData();
  }, [router.query.id]);

  return (
    <div className="bg-[#FFFAF5] flex flex-col items-center justify-center h-[100dvh]">
      <div className="w-full relative md:max-h-[calc(100vh-200px)] max-w-[1200px] h-[100dvh]">
        <Chat
          firstMessage={firstMessage}
          prompts={prompts}
          id={router.query.id as string}
          characterName={router.query.characterName as string}
          judge={judge}
          avatarImage={image}
          limitMessage={limitMessage}
          characterLimit={characterLimit}
          variation={variation}
        />
      </div>
    </div>
  );
}

export default Character;
