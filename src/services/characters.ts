import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
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

export async function getCharacterStats(characterId: string) {
  const collectionRef = collection(db, 'clicks');
  const character = await getDoc(doc(db, 'characters', characterId));

  if (
    !character.data()?.variations ||
    character.data()?.variations?.length === 0
  ) {
    const iOSQuery = query(
      collectionRef,
      where('app', '==', 'ios'),
      where('character', '==', characterId)
    );
    const androidQuery = query(
      collectionRef,
      where('app', '==', 'android'),
      where('character', '==', characterId)
    );

    const getClicksCount = async (clicksCountQuery: any) => {
      const snapshot = await getDocs(clicksCountQuery);
      return snapshot.size;
    };

    const [iosClicksCount, androidClicksCount] = await Promise.all([
      getClicksCount(iOSQuery),
      getClicksCount(androidQuery),
    ]);

    const [averageMessagesPerConversation, totalConversations, uniqueUsers] =
      await Promise.all([
        getDocs(
          query(collection(db, 'chats'), where('character', '==', characterId))
        ).then((querySnapshot) => {
          let totalMessages = 0;
          let totalConversationsCount = 0;

          querySnapshot.forEach((docSnapshot) => {
            totalMessages += docSnapshot.data()?.messages?.length || 0;
            totalConversationsCount += 1;
          });

          return totalMessages / totalConversationsCount || 0;
        }),

        getDocs(
          query(collection(db, 'chats'), where('character', '==', characterId))
        ).then((querySnapshot) => querySnapshot.size),

        getDocs(
          query(collection(db, 'chats'), where('character', '==', characterId))
        ).then((querySnapshot) => {
          const users = new Set();
          querySnapshot.forEach((docSnapshot) => {
            users.add(docSnapshot.data()?.user_id);
          });
          return users.size;
        }),
      ]);

    return [
      {
        iosClicksCount,
        androidClicksCount,
        totalClicks: iosClicksCount + androidClicksCount,
        averageMessagesPerConversation,
        totalConversations,
        uniqueUsers,
      },
    ];
  }

  const variationsArray = Array.from(
    Array(character.data()?.variations?.length + 1 || 1).keys() // eslint-disable-line
  );

  const result = await Promise.all(
    variationsArray.map(async (variation) => {
      const iOSQuery = query(
        collectionRef,
        where('app', '==', 'ios'),
        where('character', '==', characterId),
        where('variation', '==', variation)
      );
      const androidQuery = query(
        collectionRef,
        where('app', '==', 'android'),
        where('character', '==', characterId),
        where('variation', '==', variation)
      );

      const getClicksCount = async (clicksCountQuery: any) => {
        const snapshot = await getDocs(clicksCountQuery);
        return snapshot.size;
      };

      const [iosClicksCount, androidClicksCount] = await Promise.all([
        getClicksCount(iOSQuery),
        getClicksCount(androidQuery),
      ]);

      const [averageMessagesPerConversation, totalConversations, uniqueUsers] =
        await Promise.all([
          getDocs(
            query(
              collection(db, 'chats'),
              where('character', '==', characterId),
              where('variation', '==', variation)
            )
          ).then((querySnapshot) => {
            let totalMessages = 0;
            let totalConversationsCount = 0;

            querySnapshot.forEach((docSnapshot) => {
              totalMessages += docSnapshot.data()?.messages?.length || 0;
              totalConversationsCount += 1;
            });

            return totalMessages / totalConversationsCount || 0;
          }),

          getDocs(
            query(
              collection(db, 'chats'),
              where('character', '==', characterId),
              where('variation', '==', variation)
            )
          ).then((querySnapshot) => querySnapshot.size),

          getDocs(
            query(
              collection(db, 'chats'),
              where('character', '==', characterId),
              where('variation', '==', variation)
            )
          ).then((querySnapshot) => {
            const users = new Set();
            querySnapshot.forEach((docSnapshot) => {
              users.add(docSnapshot.data()?.user_id);
            });
            return users.size;
          }),
        ]);

      return {
        iosClicksCount,
        androidClicksCount,
        totalClicks: iosClicksCount + androidClicksCount,
        averageMessagesPerConversation,
        totalConversations,
        uniqueUsers,
      };
    })
  );
  return result;
}
