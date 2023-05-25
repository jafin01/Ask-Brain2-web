import React, { useRef, useState } from 'react';
import Lottie from 'react-lottie';
import loadingDots from 'public/assets/loading-dots.json';
import sendMessage from '@/services/openai';

function Chat({
  firstMessage = '',
  prompts,
}: {
  firstMessage: string;
  prompts: { content: string; role: string }[];
}) {
  const chatRef = useRef(null);

  const [message, setMessage] = useState('');
  const [conversation, setConversation] =
    useState<{ content: string; role: string; loading?: boolean }[]>(prompts);

  const [responseFinished, setResponseFinished] = useState(true);

  const handleSendMessage = async () => {
    setConversation((prevConversation = []) => [
      ...prevConversation,
      { content: message, role: 'user' },
      { loading: true, role: '', content: '' },
    ]);
    setMessage('');

    const response = await sendMessage([...prompts, ...conversation]);

    setConversation((prevConversation = []) => [
      ...prevConversation.slice(0, -1),
      { content: response, role: 'assistant' },
    ]);
    setResponseFinished(true);
  };

  return (
    //  position modal on top of the chat
    <div className="bg-gray-100 absolute rounded-2xl bottom-0 right-0 left-0 top-0 overflow-scroll">
      <div
        className="absolute right-0 left-0 bottom-16 px-4 pb-4 pt-40 overflow-hidden flex flex-col gap-1"
        ref={chatRef}
      >
        {[{ content: firstMessage, role: 'assistant' }, ...conversation]
          ?.filter((m) => m.content)
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
                    animationData: loadingDots,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                  height={30}
                  width={50}
                />
              ) : (
                <p className="text-sm whitespace-pre-line">
                  {m?.content?.trim()}
                </p>
              )}
            </div>
          ))}
      </div>
      <div className="mt-1 absolute flex bottom-2 right-2 left-2">
        <input
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey && message) {
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
          className={`${
            message && responseFinished ? '' : 'opacity-50'
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
