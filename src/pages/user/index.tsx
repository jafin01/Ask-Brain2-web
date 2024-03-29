import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
} from '@firebase/firestore';
import { auth, db } from 'config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from '@/components/Navbar';
import ConfirmDelete from '@/components/DeleteModal';
import CharacterCard from '@/components/Character/CharacterCard';

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState('');
  const [confirmDeleteInput, setConfirmDeleteInput] = useState('');
  const [selectedCharacterName, setSelectedCharacterName] = useState('');

  const { push } = useRouter();

  const handleDelete = async (characterId: any) => {
    // Check if the input matches the character's name
    if (confirmDeleteInput === selectedCharacterName) {
      try {
        setIsLoading(true);
        await deleteDoc(doc(db, 'characters', characterId));
        setCharacters((prevCharacters) =>
          prevCharacters.filter(
            (character: any) => character.id !== characterId
          )
        );
        toast.success('Deleted Character successfully');
      } catch (error: any) {
        toast.error(error?.message);
      } finally {
        setIsLoading(false);
        setShowDeleteModal(false);
        setCharacterToDelete('');
        setConfirmDeleteInput('');
        setSelectedCharacterName('');
      }
    } else {
      toast.error('Incorrect input. Please enter the character name exactly.');
    }
  };

  const handleDuplicate = async (characterId: any) => {
    try {
      setIsLoading(true);
      const docRef = doc(db, 'characters', characterId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        docSnap.data();
        const {
          name,
          prompts,
          firstMessage,
          judge,
          avatar,
          messageLimit,
          userId,
        } = docSnap.data()!;
        const newCharacter = {
          name,
          prompts,
          firstMessage,
          judge,
          avatar,
          messageLimit,
          userId,
        } as any;

        Object.keys(newCharacter).forEach(
          (key) => newCharacter[key] === undefined && delete newCharacter[key]
        );
        const newDoc = await addDoc(collection(db, 'characters'), newCharacter);
        const newCharacterDoc = {
          id: newDoc.id,
          ...newCharacter,
        } as never;
        setCharacters([newCharacterDoc, ...characters]);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function isLoggedIn() {
      try {
        const unsubscribe = await onAuthStateChanged(auth, (user) => {
          // console.log('user', user);
          setIsAuthenticated(!!user);
          if (!user) {
            push('/login');
          }
        });
        return () => unsubscribe();
      } catch (error) {
        throw new Error();
      }
    }

    isLoggedIn();
  }, []);

  useEffect(() => {
    console.log(confirmDeleteInput);
  }, [confirmDeleteInput]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolling(window.scrollY > 100);
    });
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (!isAuthenticated) return null;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // prevent the default behavior
    if (isOpen) handleOpen(); // close the navbar
    const { href } = e.currentTarget;
    const targetId = href.replace(/.*#/, '');
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full bg-[#FFFAF5] min-h-screen">
      <div>
        <Navbar
          theme="light"
          isOpen={isOpen}
          handleOpen={handleOpen}
          handleScroll={handleScroll}
          isScrolling={isScrolling}
          isAuthenticated={isAuthenticated}
        />
      </div>
      <div className="py-32">
        <CharacterCard
          setCharacterToDelete={setCharacterToDelete}
          setShowModal={setShowDeleteModal}
          setSelectedCharacterName={setSelectedCharacterName}
          updatedCharacters={characters}
          handleDuplicate={handleDuplicate}
        />
      </div>
      {showDeleteModal && (
        <ConfirmDelete
          confirmDeleteInput={confirmDeleteInput}
          setConfirmDeleteInput={setConfirmDeleteInput}
          setShowDeleteModal={setShowDeleteModal}
          handleDelete={handleDelete}
          characterToDelete={characterToDelete}
          selectedCharacterName={selectedCharacterName}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}
