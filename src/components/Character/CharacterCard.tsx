/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { auth } from 'config/firebase';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import { characterData, getCharacterStats } from '@/services/characters';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button';

export default function CharacterCard({
  setCharacterToDelete,
  setShowModal,
  setSelectedCharacterName,
  updatedCharacters,
}: any) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [showForm, setShowForm] = useState(false);
  const [characterId, setCharacterId] = useState('');
  const [characterStats, setCharacterStats] = useState({
    loading: false,
    data: null as any,
  });

  useEffect(() => {
    async function update(id: string) {
      const test = await getCharacterStats(id);
      setCharacterStats({ loading: false, data: test });
    }
    if (characterId) {
      update(characterId);
    }
  }, [characterId]);

  useEffect(() => {
    async function getCharacterData() {
      try {
        setIsLoading(true);
        const response: any = await characterData(auth.currentUser?.uid);
        setCharacters(response);
        setIsLoading(false);
      } catch (error: any) {
        throw new Error(error.message);
      }
    }

    getCharacterData();
  }, [auth.currentUser?.uid, updatedCharacters]);

  return (
    <div className="px-8">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="py-16 m-auto">
        <h1 className="text-center font-bold text-2xl pb-4">Experiences</h1>
        <div className="w-full flex justify-center mb-4 text-app-bg md:justify-end">
          <Link
            href="/user/character"
            className="rounded px-2 py-2 bg-black text-white"
          >
            <span className="flex gap-2 font-bold mr-2">
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
              Create an experience
            </span>
          </Link>
        </div>
        <div
          className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 
        2xl:grid-cols-4 gap-4"
        >
          {isLoading && <p className="text-white">Loading...</p>}
          {!isLoading &&
            characters.map((character: any) => (
              <div className="min-h-[100px]">
                <div className="border rounded-lg border-gray-100 bg-white shadow-xl">
                  <div className="flex gap-4 px-4 py-4 items-center">
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
                        <span className="font-medium text-lg text-gray-800">
                          {character.data.name}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-around my-4 mx-4 items-center md:flex-row">
                    <CopyToClipboard
                      text={`${window.location.origin}/character/${character.id}`}
                    >
                      <Button
                        type="button"
                        className="flex gap-1 cursor-pointer text-grad-green hover:bg-grad-green hover:text-white px-4 py-2 rounded-md hover:shadow-lg transition duration-300 ease-in-out"
                        onClick={() => toast('Link copied to clipboard!')}
                      >
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
                            // app link icon
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <h4 className="">Get link</h4>
                      </Button>
                    </CopyToClipboard>
                    <Link
                      href={`/character/${character.id}`}
                      className="flex gap-1 cursor-pointer text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md hover:shadow-lg transition duration-300 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M20.625 2H3.375C2.48828 2 1.78125 2.70703 1.78125 3.59375V16.4062C1.78125 17.2929 2.48828 18 3.375 18H5.0625V21.625L9.46875 18H20.625C21.5117 18 22.2188 17.2929 22.2188 16.4062V3.59375C22.2188 2.70703 21.5117 2 20.625 2Z" />
                      </svg>
                      <h4 className="">Try out</h4>
                    </Link>
                    <Link
                      href={`/user/character/${character.id}`}
                      className="flex gap-1 cursor-pointer text-yellow-500 hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-md hover:shadow-lg transition duration-300 ease-in-out"
                    >
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
                    </Link>
                    <Button
                      type="button"
                      className="flex gap-1 cursor-pointer text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md hover:shadow-lg transition duration-300 ease-in-out"
                      onClick={() => {
                        setShowModal(true);
                        setCharacterToDelete(character.id);
                        setSelectedCharacterName(character.data.name);
                        // deleteCharacter(character.id);
                      }}
                    >
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

                      <h4>Delete</h4>
                    </Button>
                  </div>
                  <div className="flex flex-col justify-around my-2 items-center gap-2">
                    <Button
                      type="button"
                      className="text-blue-500 cursor-pointer full-width hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md hover:shadow-lg transition duration-300 ease-in-out text-center"
                      onClick={() => {
                        if (characterId !== character.id) {
                          setCharacterId(character.id);
                          setCharacterStats({
                            loading: true,
                            data: null,
                          });
                        } else {
                          setCharacterId('');
                          setCharacterStats({
                            loading: false,
                            data: null,
                          });
                        }
                      }}
                    >
                      {characterStats.loading && characterId === character.id
                        ? 'Loading...'
                        : (characterId === character.id && 'Hide stats') ||
                          'Show stats'}
                    </Button>
                    {characterId === character.id &&
                      !characterStats.loading && (
                        <div className="flex flex-col justify-around my-2 items-center gap-2">
                          <p>
                            Total clicks: {characterStats?.data?.totalClicks}
                          </p>
                          <p>
                            iOs clicks: {characterStats?.data?.iosClicksCount}
                          </p>
                          <p>
                            Android clicks:{' '}
                            {characterStats?.data?.androidClicksCount}
                          </p>
                          <p>
                            Average chat messages:{' '}
                            {characterStats?.data?.averageMessagesPerConversation?.toFixed(
                              2
                            )}
                          </p>
                          <p>
                            Total conversations:{' '}
                            {characterStats?.data?.totalConversations}
                          </p>
                          <p>
                            Unique users: {characterStats?.data?.uniqueUsers}
                          </p>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
