import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from 'config/firebase';
import CharecterForm from '@/components/Charecter';
import CharacterCard from '@/components/Charecter/CharacterCard';
import Navbar from '@/components/Navbar';

export default function UserProfile() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    async function isLoggedIn() {
      try {
        setLoading(true);
        const unsubscribe = await onAuthStateChanged(auth, (user) => {
          setIsAuthenticated(!!user);
          setCurrentUser(user);
        });
        return () => unsubscribe();
      } catch (error) {
        throw new Error();
        console.log(error);
      } finally {
        setLoading(false);
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
