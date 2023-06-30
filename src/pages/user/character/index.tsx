import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'config/firebase';
import { useRouter } from 'next/router';
import CharacterForm from '@/components/Character/CharacterForm';

export default function CreateCharacter() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const { push } = useRouter();

  useEffect(() => {
    async function isLoggedIn() {
      try {
        const unsubscribe = await onAuthStateChanged(auth, (user) => {
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

  if (
    !isAuthenticated ||
    !['81LSvPTJ5qgrmBglmUVklyczMPR2', 'Y8X1W3GjupchKGT3KcASQ2m9UVC2'].includes(
      auth?.currentUser?.uid || ''
    )
  )
    return null;

  return <CharacterForm isUpdate={false} />;
}
