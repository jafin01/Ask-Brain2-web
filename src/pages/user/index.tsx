import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from 'config/firebase';
import { useRouter } from 'next/router';
import { deleteDoc, doc } from '@firebase/firestore';
import CharacterCard from '@/components/Character/CharacterCard';
import Navbar from '@/components/Navbar';
import ConfirmDelete from '@/components/DeleteModal';

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
      } catch (error) {
        console.error('Error deleting document: ', error);
      } finally {
        setIsLoading(false);
        setShowDeleteModal(false);
        setCharacterToDelete('');
        setConfirmDeleteInput('');
        setSelectedCharacterName('');
      }
    } else {
      console.log('Incorrect input. Please enter the character name exactly.');
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
    <div className="w-full bg-gradient-to-br from-app-bg via-app-bg to-grad-purple min-h-screen">
      <div>
        <Navbar
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
