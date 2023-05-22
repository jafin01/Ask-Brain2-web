/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { characterData } from '@/services/characters';
import CharecterForm from '.';

export default function CharacterCard() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function getCharacterData() {
      try {
        setIsLoading(true);
        const response: any = await characterData();
        console.log('response', response);
        setCharacters(response);
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getCharacterData();
  }, []);

  return (
    <div className="px-8">
      <div className="py-16 m-auto">
        {!showForm && (
          <h1 className="text-center font-bold text-2xl pb-4 text-white">
            Characters
          </h1>
        )}
        <div className="w-full flex justify-end mb-4 text-app-bg">
          <button
            onClick={() => setShowForm(!showForm)}
            type="button"
            className="rounded px-2 py-2 bg-gradient-to-r from-grad-green to-white"
          >
            {!showForm && (
              <span className="flex gap-2 font-bold">
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Create Character
              </span>
            )}

            {showForm && (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        {!showForm && (
          <div className="border w-full p-8 grid grid-cols-4 gap-4">
            {isLoading && <p className="text-white">Loading...</p>}
            {!isLoading &&
              characters.map((character: any) => (
                <div className="min-h-[100px]">
                  <div className="flex gap-4 border px-4 py-4 rounded-lg cursor-all-scroll">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center">
                        <img
                          className="w-12 h-12 rounded-full object-cover"
                          src={character.data.avatar}
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <p>
                        <span className="font-semibold text-gray-50">
                          Name:{' '}
                        </span>
                        <span className="font-medium text-lg text-gray-400">
                          {character.data.name}
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold text-gray-50">
                          Desc:{' '}
                        </span>
                        <span className="font-medium text-gray-400">
                          {character.data.description}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-around my-2">
                    <div className="flex gap-1 cursor-pointer text-grad-green">
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
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                      <h4 className="">View</h4>
                    </div>
                    <div className="flex gap-1 text-yellow-500 cursor-pointer">
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
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                      <h4 className="">Edit</h4>
                    </div>
                    <div className="text-red-500 flex gap-1 cursor-pointer">
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
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>

                      <h4 className="">Delete</h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
        {showForm && (
          <div className="w-full grid grid-1">
            <CharecterForm />
          </div>
        )}
      </div>
    </div>
  );
}
