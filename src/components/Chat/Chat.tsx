import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import sendMessage from '@/services/openai';
import loadingData from '../../../public/assets/loading-dots.json';

const MAX_MESSAGE_COUNT = 10;

function Chat({
  firstMessage = '',
  prompts,
}: {
  firstMessage: string;
  prompts: { content: string; role: string }[];
}) {
  const chatRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] =
    useState<{ content: string; role: string; loading?: boolean }[]>(prompts);

  const [responseFinished, setResponseFinished] = useState(true);

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
    chatRef.current?.scrollTo({
      top: chatRef.current?.scrollHeight,
      behavior: 'smooth',
    });
  }, [conversation]);

  return (
    //  position modal on top of the chat
    <div className="bg-gray-100 absolute rounded-2xl bottom-0 right-0 left-0 top-0 overflow-scroll">
      {/* modal */}
      <div
        ref={chatRef}
        className="absolute right-0 left-0 bottom-16 px-4 pb-4 top-0 pt-4 overflow-scroll flex flex-col"
      >
        <div className="mt-auto flex flex-col gap-1 justify-end">
          {[{ content: firstMessage, role: 'assistant' }, ...conversation]
            ?.filter((m) => m.content || m.loading)
            ?.map((m) => (
              <div
                className={`${
                  m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                } ${m.loading ? 'p-0' : 'p-2.5'} rounded-2xl ${
                  m.role === 'user' ? 'rounded-br-none' : 'rounded-bl-none'
                } ${m.role === 'user' ? 'self-end' : 'self-start'}`}
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
                  <p className="text-sm whitespace-pre-line">
                    {m?.content?.trim()}
                  </p>
                )}
              </div>
            ))}
          {conversation.length >= MAX_MESSAGE_COUNT && (
            <div className="bg-green-500 text-white p-2.5 rounded-2xl self-start mt-2">
              <p className="text-sm whitespace-pre-line">
                You&apos;ve reached the maximum number of messages. To continue,
                please download the app from the App Store or Play Store.
                <div className="flex gap-12 p-4">
                  <a
                    href="https://apps.apple.com/app/ask-brain2-chat-with-chatbot/id6448963886"
                    target="_blank"
                    className="underline"
                    rel="noreferrer"
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
                  >
                    <img
                      alt="play store"
                      src="/assets/google-play.png"
                      className="w-30"
                    />
                  </a>
                </div>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-1 absolute flex bottom-2 right-2 left-2">
        <input
          onKeyDown={(e) => {
            if (
              e.key === 'Enter' &&
              !e.shiftKey &&
              message &&
              responseFinished &&
              conversation.length < MAX_MESSAGE_COUNT
            ) {
              handleSendMessage();
              e.preventDefault();
            }
          }}
          className="border border-gray-300 rounded-full px-5 py-3 flex-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button
          type="button"
          onClick={handleSendMessage}
          disabled={
            !responseFinished || conversation.length >= MAX_MESSAGE_COUNT
          }
          className={`${
            message &&
            (!responseFinished || conversation.length >= MAX_MESSAGE_COUNT)
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
