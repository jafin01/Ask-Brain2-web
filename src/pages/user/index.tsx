import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from 'config/firebase';
import CharecterForm from '@/components/Character';

export default function UserProfile() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const { push } = useRouter();

  useEffect(() => {
    // const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.toJSON());
        setLoading(false);
      } else {
        setCurrentUser(null);
        setLoading(false);
        push('/login');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [push]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CharecterForm />
    </div>
  );
}
