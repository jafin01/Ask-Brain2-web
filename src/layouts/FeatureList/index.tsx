import React from 'react';
import Card from '../../components/Card';

export default function FeatureList() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-7">
      <Card className="w-full lg:w-1/4 p-6 rounded-3xl bg-transparent shadow-2xl border border-grad-purple cursor-pointer">
        <div className="h-1/5">
          <div className="rounded-full h-16 w-16 my-4 p-3 bg-gradient-to-br from-transparent to-grad-purple shadow-lg opacity-70">
            <svg
              width="241"
              height="212"
              viewBox="0 0 241 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full -rotate-45"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M224.678 109.22C226.299 96.3606 220.288 83.1823 208.382 76.2503L157.714 46.7587L175.066 20.9062C179.399 22.4582 184.394 20.9434 187.078 16.9475C190.246 12.2263 188.987 5.83297 184.265 2.6652C179.545 -0.503562 173.151 0.755507 169.983 5.47507C167.301 9.47125 167.792 14.667 170.87 18.0894L153.338 44.2111L92.9324 9.05131C81.4262 2.3548 67.5695 3.32493 57.2819 10.3976C51.5369 7.58708 45.0566 6.81838 38.7278 8.24572C31.377 9.90274 25.1115 14.3235 21.0857 20.6921L17.0175 27.1282C12.9919 33.4972 11.6873 41.0525 13.3436 48.4035C13.4301 48.7811 13.5221 49.1556 13.6217 49.5275C15.1164 55.1056 18.2287 60.004 22.5849 63.6939L4.908 94.0631C-4.34627 109.962 1.04007 130.353 16.9401 139.607L132.387 206.806C148.285 216.061 168.678 210.674 177.932 194.774L194.748 165.884C201.172 169.493 208.614 170.443 215.755 168.556C223.04 166.631 229.139 161.986 232.93 155.474L236.761 148.893C240.551 142.379 241.58 134.783 239.655 127.498L239.628 127.398C237.688 120.157 233.054 114.095 226.572 110.323L224.678 109.22ZM158.156 144.531L58.3647 86.4455C44.9107 78.6147 40.3546 61.3616 48.185 47.9085L50.8722 43.2906C58.7026 29.8376 75.9549 25.2801 89.4089 33.1109L189.2 91.1951C202.652 99.0259 207.211 116.28 199.38 129.732L196.691 134.352C188.86 147.804 171.608 152.36 158.156 144.531Z"
                fill="#F2F2F2"
              />
            </svg>
          </div>
        </div>
        <p className="font-poppins text-2xl my-5 w-20">Ask AI Anything</p>
        <p className="font-poppins font-normal text-lg w-[90%] text-gray-400">
          Get instant answers to any question with Ask Brain 2&apos;s AI-powered
          platform. No more endless searching, just fast and accurate insights
          at your fingertips.
        </p>
      </Card>
      <Card className="w-full lg:w-1/4 p-6 pb-10 rounded-3xl bg-transparent shadow-2xl border border-grad-purple cursor-pointer">
        <div className="h-1/5">
          <div className="rounded-full h-16 w-16 my-4 p-3 bg-gradient-to-br from-transparent to-grad-purple shadow-lg opacity-70">
            <svg
              width="241"
              height="212"
              viewBox="0 0 241 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full -rotate-45"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M224.678 109.22C226.299 96.3606 220.288 83.1823 208.382 76.2503L157.714 46.7587L175.066 20.9062C179.399 22.4582 184.394 20.9434 187.078 16.9475C190.246 12.2263 188.987 5.83297 184.265 2.6652C179.545 -0.503562 173.151 0.755507 169.983 5.47507C167.301 9.47125 167.792 14.667 170.87 18.0894L153.338 44.2111L92.9324 9.05131C81.4262 2.3548 67.5695 3.32493 57.2819 10.3976C51.5369 7.58708 45.0566 6.81838 38.7278 8.24572C31.377 9.90274 25.1115 14.3235 21.0857 20.6921L17.0175 27.1282C12.9919 33.4972 11.6873 41.0525 13.3436 48.4035C13.4301 48.7811 13.5221 49.1556 13.6217 49.5275C15.1164 55.1056 18.2287 60.004 22.5849 63.6939L4.908 94.0631C-4.34627 109.962 1.04007 130.353 16.9401 139.607L132.387 206.806C148.285 216.061 168.678 210.674 177.932 194.774L194.748 165.884C201.172 169.493 208.614 170.443 215.755 168.556C223.04 166.631 229.139 161.986 232.93 155.474L236.761 148.893C240.551 142.379 241.58 134.783 239.655 127.498L239.628 127.398C237.688 120.157 233.054 114.095 226.572 110.323L224.678 109.22ZM158.156 144.531L58.3647 86.4455C44.9107 78.6147 40.3546 61.3616 48.185 47.9085L50.8722 43.2906C58.7026 29.8376 75.9549 25.2801 89.4089 33.1109L189.2 91.1951C202.652 99.0259 207.211 116.28 199.38 129.732L196.691 134.352C188.86 147.804 171.608 152.36 158.156 144.531Z"
                fill="#F2F2F2"
              />
            </svg>
          </div>
        </div>
        <p className="font-poppins text-2xl my-5">Get help with School Work</p>
        <p className="font-poppins font-normal text-lg w-[90%] text-gray-400">
          Get ahead in your studies with Ask Brain 2&apos;s AI-powered platform.
          From math equations to essay writing, get personalized guidance and
          instant feedback for all your academic needs.
        </p>
      </Card>
      <Card className="w-full lg:w-1/4 p-6 pb-10 rounded-3xl bg-transparent shadow-2xl border border-grad-purple cursor-pointer">
        <div className="h-1/5">
          <div className="rounded-full h-16 w-16 my-4 p-3 bg-gradient-to-br from-transparent to-grad-purple shadow-lg opacity-70">
            <svg
              width="241"
              height="212"
              viewBox="0 0 241 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full -rotate-45"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M224.678 109.22C226.299 96.3606 220.288 83.1823 208.382 76.2503L157.714 46.7587L175.066 20.9062C179.399 22.4582 184.394 20.9434 187.078 16.9475C190.246 12.2263 188.987 5.83297 184.265 2.6652C179.545 -0.503562 173.151 0.755507 169.983 5.47507C167.301 9.47125 167.792 14.667 170.87 18.0894L153.338 44.2111L92.9324 9.05131C81.4262 2.3548 67.5695 3.32493 57.2819 10.3976C51.5369 7.58708 45.0566 6.81838 38.7278 8.24572C31.377 9.90274 25.1115 14.3235 21.0857 20.6921L17.0175 27.1282C12.9919 33.4972 11.6873 41.0525 13.3436 48.4035C13.4301 48.7811 13.5221 49.1556 13.6217 49.5275C15.1164 55.1056 18.2287 60.004 22.5849 63.6939L4.908 94.0631C-4.34627 109.962 1.04007 130.353 16.9401 139.607L132.387 206.806C148.285 216.061 168.678 210.674 177.932 194.774L194.748 165.884C201.172 169.493 208.614 170.443 215.755 168.556C223.04 166.631 229.139 161.986 232.93 155.474L236.761 148.893C240.551 142.379 241.58 134.783 239.655 127.498L239.628 127.398C237.688 120.157 233.054 114.095 226.572 110.323L224.678 109.22ZM158.156 144.531L58.3647 86.4455C44.9107 78.6147 40.3546 61.3616 48.185 47.9085L50.8722 43.2906C58.7026 29.8376 75.9549 25.2801 89.4089 33.1109L189.2 91.1951C202.652 99.0259 207.211 116.28 199.38 129.732L196.691 134.352C188.86 147.804 171.608 152.36 158.156 144.531Z"
                fill="#F2F2F2"
              />
            </svg>
          </div>
        </div>
        <p className="font-poppins text-2xl my-5">
          Texting tips for Relationships
        </p>
        <p className="font-poppins font-normal text-lg w-[90%] text-gray-400">
          Get AI-powered tips for navigating difficult conversations with your
          partner. Improve your texting skills and build stronger bonds with Ask
          Brain 2.
        </p>
      </Card>
      <Card className="w-full lg:w-1/4 p-6 pb-10 rounded-3xl bg-transparent shadow-2xl border border-grad-purple cursor-pointer">
        <div className="h-1/5">
          <div className="rounded-full h-16 w-16 my-4 p-3 bg-gradient-to-br from-transparent to-grad-purple shadow-lg opacity-70">
            <svg
              width="241"
              height="212"
              viewBox="0 0 241 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full -rotate-45"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M224.678 109.22C226.299 96.3606 220.288 83.1823 208.382 76.2503L157.714 46.7587L175.066 20.9062C179.399 22.4582 184.394 20.9434 187.078 16.9475C190.246 12.2263 188.987 5.83297 184.265 2.6652C179.545 -0.503562 173.151 0.755507 169.983 5.47507C167.301 9.47125 167.792 14.667 170.87 18.0894L153.338 44.2111L92.9324 9.05131C81.4262 2.3548 67.5695 3.32493 57.2819 10.3976C51.5369 7.58708 45.0566 6.81838 38.7278 8.24572C31.377 9.90274 25.1115 14.3235 21.0857 20.6921L17.0175 27.1282C12.9919 33.4972 11.6873 41.0525 13.3436 48.4035C13.4301 48.7811 13.5221 49.1556 13.6217 49.5275C15.1164 55.1056 18.2287 60.004 22.5849 63.6939L4.908 94.0631C-4.34627 109.962 1.04007 130.353 16.9401 139.607L132.387 206.806C148.285 216.061 168.678 210.674 177.932 194.774L194.748 165.884C201.172 169.493 208.614 170.443 215.755 168.556C223.04 166.631 229.139 161.986 232.93 155.474L236.761 148.893C240.551 142.379 241.58 134.783 239.655 127.498L239.628 127.398C237.688 120.157 233.054 114.095 226.572 110.323L224.678 109.22ZM158.156 144.531L58.3647 86.4455C44.9107 78.6147 40.3546 61.3616 48.185 47.9085L50.8722 43.2906C58.7026 29.8376 75.9549 25.2801 89.4089 33.1109L189.2 91.1951C202.652 99.0259 207.211 116.28 199.38 129.732L196.691 134.352C188.86 147.804 171.608 152.36 158.156 144.531Z"
                fill="#F2F2F2"
              />
            </svg>
          </div>
        </div>
        <p className="font-poppins text-2xl my-5 w-40">Chat about Any Topic</p>
        <p className="font-poppins font-normal text-lg w-[90%] text-gray-400">
          Chat with Ask Brain 2 about anything that interests you. Our
          AI-powered platform is always ready to engage in intelligent
          conversations and provide you with expert insights on a wide range of
          topics.
        </p>
      </Card>
    </div>
  );
}
