import React from 'react';

export default function ChatSkeleton() {
  return (
    <div className="w-full bg-app-bg h-screen">
      {/* Loading skeleton */}
      <div className="bg-app-bg 2xl:w-1/3 m-auto 1g:w-1/2 xl:w-1/2 md:px-8 md:pt-2 md:pb-5 flex flex-col">
        <div className="py-10 pb-16 flex gap-5 items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-gray-300 animate-pulse rounded-full" />
            <div className="h-6 w-36 bg-gray-300 animate-pulse rounded-lg" />
          </div>
          <div className="text-gray-100 text-right text-base lg:text-xl font-mono">
            <div className="h-4 w-32 bg-gray-300 animate-pulse rounded-lg" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 bg-gray-300 animate-pulse rounded-full" />
          <div className="animate-pulse w-full">
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-8 w-8 bg-gray-300 animate-pulse rounded-full" />
          <div className="animate-pulse w-full">
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-8 w-8 bg-gray-300 animate-pulse rounded-full" />
          <div className="animate-pulse w-full">
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-8 w-8 bg-gray-300 animate-pulse rounded-full" />
          <div className="animate-pulse w-full">
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
            <div className="h-2 w-full my-4 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
