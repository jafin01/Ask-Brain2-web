import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'config/firebase';
import CharacterCard from '@/components/Character/CharacterCard';
import Navbar from '@/components/Navbar';

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    async function isLoggedIn() {
      try {
        const unsubscribe = await onAuthStateChanged(auth, (user) => {
          // console.log('user', user);
          setIsAuthenticated(!!user);
        });
        return () => unsubscribe();
      } catch (error) {
        throw new Error();
      }
    }

    isLoggedIn();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolling(window.scrollY > 100);
    });
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

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
    <div className="w-full bg-gradient-to-br from-app-bg via-app-bg to-grad-purple h-screen">
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
        <CharacterCard />
      </div>
    </div>
  );
}
