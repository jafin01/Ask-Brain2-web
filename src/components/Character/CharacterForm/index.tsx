/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
} from '@firebase/firestore';
import { auth, db, storage } from 'config/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

export default function CharacterForm({ isUpdate }: { isUpdate: boolean }) {
  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState<File | undefined>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<any>({
    name: '',
    avatar: '',
    description: '',
  });
  const router = useRouter();
  const { push } = router;

  async function getSelectedData() {
    const { id } = router.query;

    try {
      const docRef = doc(db, 'characters', id as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const { name, description } = docSnap.data()!;
        setInitialValues({
          name,
          avatar: docSnap.data().avatar,
          description,
        });

        console.log(docSnap.data().avatar);
        setAvatar(docSnap.data().avatar);
      }
    } catch (error) {
      console.log('Error getting document:', error);
    }
  }

  useEffect(() => {
    if (isUpdate) {
      getSelectedData();
    }
  }, [isUpdate]);

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      setIsLoading(true);

      const uploadAvatar = ref(storage, `/user/${avatar?.name}`);
      await uploadBytes(uploadAvatar, avatar!);
      const downloadedAvatarUrl = await getDownloadURL(uploadAvatar);

      if (!isUpdate) {
        await addDoc(collection(db, 'characters'), {
          userId: auth.currentUser?.uid,
          name: values.name,
          avatar: downloadedAvatarUrl,
          description: values.description,
        });
      } else {
        updateDoc(doc(db, 'characters', router.query.id as string), {
          name: values.name,
          avatar: downloadedAvatarUrl,
          description: values.description,
        });
      }

      push('/user');
    } catch (error) {
      console.error('Error adding document: ', error);
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isUpdate) setIsEditing(true);
    const file = e.target.files?.[0];
    console.log('file', file);
    setAvatar(file);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
  });

  return (
    <div className="bg-gradient-to-br from-app-bg via-app-bg to-grad-purple h-screen w-full grid grid-1">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-grad-green to-white bg-clip-text">
          {!isUpdate ? 'Create your character' : 'Update your character'}
        </h1>

        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col items-center gap-5 bg-app-bg text-gray-600 w-1/3 rounded-2xl p-4">
            <div className="relative">
              <input
                type="file"
                id="avatar"
                name="avatar"
                className="hidden"
                onChange={handleAvatarUpload}
              />
              <label
                htmlFor="avatar"
                className="block h-36 w-36 rounded-full border-4 border-grad-green overflow-hidden cursor-pointer"
              >
                {!isUpdate && avatar && (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="Avatar Preview"
                    className="h-full w-full object-cover"
                  />
                )}

                {!isUpdate && !avatar && (
                  <span className="h-full w-full flex items-center justify-center text-grad-green text-6xl">
                    +
                  </span>
                )}

                {isUpdate && avatar && !isEditing && (
                  <img
                    src={avatar.toString()}
                    alt="Avatar Preview"
                    className="h-full w-full object-cover"
                  />
                )}

                {isUpdate && avatar && isEditing && (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="Avatar Preview"
                    className="h-full w-full object-cover"
                  />
                )}

                {isUpdate && !avatar && (
                  <span className="h-full w-full flex items-center justify-center text-grad-green text-6xl">
                    +
                  </span>
                )}
              </label>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                className="p-2 border border-grad-green rounded"
              />
              <ErrorMessage
                name="name"
                component="span"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="description">Description</label>
              <Field
                as="textarea"
                id="description"
                name="description"
                rows={3}
                placeholder="Enter description"
                className="p-2 border border-grad-green rounded"
              />
              <ErrorMessage
                name="description"
                component="span"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="bg-grad-purple hover:bg-grad-purple-dark text-white font-bold py-2 px-4 rounded"
            >
              {isLoading ? 'Saving...' : 'Save'}
            </button>

            <Link href="/user">
              <p className="text-grad-green underline">Cancel</p>
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
