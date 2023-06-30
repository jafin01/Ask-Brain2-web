import {
  Timestamp,
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

  const stats = {
    iosClicksCount,
    androidClicksCount,
    totalClicks: iosClicksCount + androidClicksCount,
    averageMessagesPerConversation,
    totalConversations,
    uniqueUsers,
  };

  const variationsArray = Array.from(
    Array(character.data()?.variations?.length + 1 || 1).keys() // eslint-disable-line
  );

  const variationStats =
    variationsArray.length > 1
      ? await Promise.all(
          variationsArray.map(async (variation) => {
            const iOSQuery1 = query(
              collectionRef,
              where('app', '==', 'ios'),
              where('character', '==', characterId),
              where('variation', '==', variation)
            );
            const androidQuery1 = query(
              collectionRef,
              where('app', '==', 'android'),
              where('character', '==', characterId),
              where('variation', '==', variation)
            );

            const getClicksCount1 = async (clicksCountQuery: any) => {
              const snapshot = await getDocs(clicksCountQuery);
              return snapshot.size;
            };

            const [iosClicksCount1, androidClicksCount1] = await Promise.all([
              getClicksCount1(iOSQuery1),
              getClicksCount1(androidQuery1),
            ]);

            const [
              averageMessagesPerConversation1,
              totalConversations1,
              uniqueUsers1,
            ] = await Promise.all([
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
              iosClicksCount: iosClicksCount1,
              androidClicksCount: androidClicksCount1,
              totalClicks: iosClicksCount1 + androidClicksCount1,
              averageMessagesPerConversation: averageMessagesPerConversation1,
              totalConversations: totalConversations1,
              uniqueUsers: uniqueUsers1,
            };
          })
        )
      : [];

  const views = await getDocs(
    query(
      collection(db, 'chats'),
      where('character', '==', characterId),
      where(
        'createdAtTimestamp',
        '>',
        // 24 hours ago
        new Timestamp(
          Math.floor((new Date().getTime() - 24 * 60 * 60 * 1000) / 1000),
          0
        )
      )
    )
  ).then((querySnapshot) => {
    // get views by 30 minutes interval
    const viewsChart = new Array(48).fill(0).map((_, index) => ({
      value: 0,
      time: new Date(
        new Date(new Date().getTime() - 24 * 60 * 60 * 1000).getTime() +
          30 * 60 * 1000 * index
      ),
    }));

    querySnapshot.forEach((docSnapshot) => {
      const createdAtTimestamp = docSnapshot.data()?.createdAtTimestamp;
      const date = new Date(createdAtTimestamp.seconds * 1000).getTime();
      const date24HoursAgo = new Date(
        new Date().getTime() - 24 * 60 * 60 * 1000
      ).getTime();

      // minutes since 24 hours ago
      const minutesSince24HoursAgo = Math.floor(
        (date - date24HoursAgo) / 1000 / 60
      );

      // 30 minutes interval
      const interval = Math.floor(minutesSince24HoursAgo / 30);

      if (viewsChart[interval]) viewsChart[interval].value += 1;

      console.log('viewsChart', viewsChart);
    });
    return viewsChart;
  });

  return { stats: [stats, ...variationStats], views };
}
