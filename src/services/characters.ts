import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from '@firebase/firestore';
import { db } from 'config/firebase';

export async function characterData(userId: string | undefined) {
  const characters = await getDocs(collection(db, 'characters'));
  const characterArray: any[] = [];

  characters.forEach((docId: any) => {
    if (userId === docId.data().userId)
      characterArray.push({ id: docId.id, data: docId.data() });
  });

  return characterArray;
  // characters.forEach((docid) => {
  //   console.log(docid.id, ' => ', docid.data());
  // });

  // return characters;
}

export async function updateCharacter() {
  const docRef = doc(db, 'characters', 'sdgdJGK3TRc4QjwUuYII');
  await updateDoc(docRef, {
    name: 'kusuma',
    avatar: 'https://www.googlemap.com',
    description: 'this is the updated character',
  });
}

export async function removeCharacter() {
  const docRef = doc(db, 'characters', 'sdgdJGK3TRc4QjwUuYII');
  await deleteDoc(docRef);
}
