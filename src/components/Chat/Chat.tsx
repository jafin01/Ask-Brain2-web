import { addDoc, collection, doc, updateDoc } from '@firebase/firestore';
import { auth, db } from 'config/firebase';
import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import { toast } from 'react-toastify';
import sendMessage from '@/services/openai';
import loadingData from '../../../public/assets/loading-dots.json';

const MAX_MESSAGE_COUNT = 10;

function Chat({
  id = '',
  firstMessage = '',
  prompts,
  judge,
  characterName = 'Assistant',
  avatarImage = null,
}: {
  firstMessage: string;
  characterName: string;
  prompts: { content: string; role: string }[];
  judge?: { condition: string; numMessages: number; message: string } | null;
  id?: string;
  avatarImage?: string | null;
}) {
  const chatRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState('');
  const [conversationId, setConversationId] = useState('');
  const [conversation, setConversation] =
    useState<{ content: string; role: string; loading?: boolean }[]>(prompts);

  const [responseFinished, setResponseFinished] = useState(true);
  const [challengeCompleted, setChallengeCompleted] = useState(false);

  const [userUid, setUserUid] = useState('');

  useEffect(() => {
    if (auth.currentUser?.uid) {
      setUserUid(auth.currentUser?.uid);
    } else {
      const userId = localStorage.getItem('userUid');
      if (userId) {
        setUserUid(userId);
      } else {
        const tmpUid = Math.random().toString(36).substring(7);
        localStorage.setItem('userUid', tmpUid);
        setUserUid(localStorage.getItem('userUid') || '');
      }
    }
  }, [auth.currentUser?.uid]);

  const handleSendMessage = async () => {
    setResponseFinished(false);
    setConversation((prevConversation = []) => [
      ...prevConversation,
      { content: message, role: 'user' },
      { loading: true, role: '', content: '' },
    ]);
    setMessage('');

    const messagesToSend = [
      ...prompts,
      ...conversation,
      { content: message, role: 'user' },
    ];
    const response = await sendMessage(messagesToSend);

    setConversation((prevConversation = []) => [
      ...prevConversation.slice(0, -1),
      { content: response, role: 'assistant' },
    ]);
    setResponseFinished(true);
  };

  useEffect(() => {
    const update = async () => {
      if (judge && conversation?.slice(-1)?.[0]?.role === 'assistant') {
        // get last judge.numMessages messages
        const judgeMessages = conversation.slice(-judge.numMessages);

        const judgeResponse = await sendMessage([
          {
            content: `
        Tell me if this condition evaluates to true or false for these messages:
        Condition:
        ${judge.condition}
        Messages:
        ${judgeMessages
          .map((m) =>
            m.role === 'user' ? 'User' : `${characterName}: ${m.content}`
          )
          .join('\n')}`,
            role: 'user',
          },
        ]);

        if (judgeResponse.toLowerCase().includes('true')) {
          setChallengeCompleted(true);
        }
      }
    };
    update();
  }, [conversation, judge, characterName, setChallengeCompleted]);

  useEffect(() => {
    const update = async () => {
      chatRef.current?.scrollTo({
        top: chatRef.current?.scrollHeight,
        behavior: 'smooth',
      });
      try {
        if (!conversationId) {
          await addDoc(collection(db, 'chats'), {
            messages: [],
            user_id: userUid,
            createdAt: new Date().toISOString(),
            title: 'Web ask Brain2 Conversation',
            characterId: id,
          }).then((docRef) => {
            setConversationId(docRef.id);
          });
        } else {
          await updateDoc(doc(db, 'chats', conversationId), {
            messages: conversation,
            challengeCompleted,
          });
        }
      } catch (error: any) {
        toast.error('Error adding document: ', error);
      }
    };

    update();
  }, [conversation, auth.currentUser?.uid, conversationId, challengeCompleted]);

  return (
    //  position modal on top of the chat
    <div className="bg-white absolute bottom-0 right-0 left-0 top-0 overflow-scroll md:rounded-2xl border border-[#EEEEEE]">
      {/* modal */}
      <div
        ref={chatRef}
        className="absolute right-0 left-0 bottom-16 px-6 pb-[50px] top-0 pt-4 overflow-scroll flex flex-col"
      >
        <div className="mt-auto flex flex-col gap-3 justify-end">
          {[{ content: firstMessage, role: 'assistant' }, ...conversation]
            ?.filter((m) => m.content || m.loading)
            ?.map((m) => (
              <div
                className={`flex gap-2 items-end ${
                  m.role === 'user' ? 'self-end' : 'self-start'
                }`}
                key={m.content}
              >
                {avatarImage && (m.role === 'assistant' || m.loading) && (
                  <img
                    src={avatarImage}
                    alt="Avatar Preview"
                    className="object-cover rounded-full w-9 h-9"
                  />
                )}
                <div
                  className={`${
                    m.role === 'user'
                      ? 'bg-[#000000de] text-white'
                      : 'bg-[#ffefe0]'
                  } ${m.loading ? 'p-0' : 'p-2.5'} rounded-2xl ${
                    m.role === 'user' ? 'rounded-br-none' : 'rounded-bl-none'
                  }`}
                >
                  {m.loading ? (
                    <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: loadingData,
                      }}
                      height={40}
                      width={50}
                    />
                  ) : (
                    <p className="whitespace-pre-line text-md">
                      {m?.content?.trim()}
                    </p>
                  )}
                </div>
              </div>
            ))}
          {(conversation.length >= MAX_MESSAGE_COUNT || challengeCompleted) && (
            <div className="bg-green-500 text-white p-2.5 px-4 rounded-2xl self-start mt-2 mx-auto">
              {challengeCompleted ? (
                judge?.message
              ) : (
                <p className="text-sm whitespace-pre-line">
                  You&apos;ve reached the maximum number of messages. To
                  continue, please download the app from the App Store or Play
                  Store.`
                  <div className="flex gap-12 p-4">
                    <a
                      href="https://apps.apple.com/app/ask-brain2-chat-with-chatbot/id6448963886"
                      target="_blank"
                      className="underline"
                      rel="noreferrer"
                      onClick={async () => {
                        try {
                          await addDoc(collection(db, 'clicks'), {
                            app: 'ios',
                            user_id: userUid,
                            createdAt: new Date().toISOString(),
                            characterId: id,
                          });
                        } catch (error) {
                          console.error(error);
                        }
                      }}
                    >
                      <img
                        alt="app store"
                        src="/assets/app-store.png"
                        className="w-30"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.askbrain2.app"
                      target="_blank"
                      className="underline"
                      rel="noreferrer"
                      onClick={async () => {
                        try {
                          await addDoc(collection(db, 'clicks'), {
                            app: 'android',
                            user_id: userUid,
                            createdAt: new Date().toISOString(),
                            characterId: id,
                          });
                        } catch (error) {
                          console.error(error);
                        }
                      }}
                    >
                      <img
                        alt="play store"
                        src="/assets/google-play.png"
                        className="w-30"
                      />
                    </a>
                  </div>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 absolute flex bottom-10 right-10 left-10">
        <input
          onKeyDown={(e) => {
            if (
              e.key === 'Enter' &&
              !e.shiftKey &&
              message &&
              responseFinished &&
              conversation.length < MAX_MESSAGE_COUNT &&
              !challengeCompleted
            ) {
              handleSendMessage();
              e.preventDefault();
            }
          }}
          className="border border-gray-200
           rounded-2xl px-5 py-3 flex-1 pr-10 shadow-2xl focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message"
        />
        <button
          type="button"
          onClick={handleSendMessage}
          disabled={
            !responseFinished ||
            conversation.length >= MAX_MESSAGE_COUNT ||
            challengeCompleted
          }
          className={`${
            message &&
            (!responseFinished ||
              conversation.length >= MAX_MESSAGE_COUNT ||
              challengeCompleted)
              ? 'opacity-50'
              : ''
          } absolute top-3 right-4`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              rotate={90}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Chat;

Chat.defaultProps = {
  id: '',
  judge: null,
  avatarImage: null,
};
