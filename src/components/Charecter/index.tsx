/* eslint-disable jsx-a11y/label-has-associated-control */
import { addDoc, collection } from '@firebase/firestore';
import { db, storage } from 'config/firebase';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import {
//   characterData,
//   removeCharacter,
//   updateCharacter,
// } from '@/services/characters';

export default function CharecterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState<File | undefined>();

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      setIsLoading(true);

      const uploadAvatar = ref(storage, `/user/${avatar?.name}`);
      await uploadBytes(uploadAvatar, avatar!);
      const downloadedAvatarUrl = await getDownloadURL(uploadAvatar);

      const docRef = await addDoc(collection(db, 'characters'), {
        name: values.name,
        avatar: downloadedAvatarUrl,
        description: values.description,
      });

      console.log('Document written with ID: ', docRef.id, 'document', docRef);
    } catch (error) {
      console.error('Error adding document: ', error);
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };

  const handleAvatarUpload = (e: any) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  // useEffect(() => {
  //   characterData();
  //   // updateCharacter();
  //   removeCharacter();
  // }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
  });
  return (
    <div className="bg-transparent">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-grad-green to-white bg-clip-text">
          Create your character
        </h1>
        <Formik
          initialValues={{ name: '', avatar: '', description: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          onChange={handleAvatarUpload}
        >
          {({ errors, touched }) => (
            <Form className="px-8 pt-6 pb-8 mb-3 w-full md:w-1/3">
              <div className="group w-full mb-6">
                <label
                  htmlFor="name"
                  className="text-sm mb-2 font-bold inline-block w-full text-gray-300 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                >
                  Name
                  <div className="relative flex items-center">
                    <Field
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className={`peer relative h-10 w-full outline-none rounded-md bg-gray-50 p-4 font-thin drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-1 focus:bg-white focus:ring-blue-400  ${
                        touched.name && errors.name
                          ? 'border border-red-500'
                          : 'border border-gray-200'
                      }`}
                    />
                    {/* <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  <FaUser />
                </span> */}
                  </div>
                </label>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="group w-full mb-6">
                <label
                  htmlFor="avatar"
                  className="text-sm mb-2 font-bold inline-block w-full text-gray-300 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                >
                  Avatar
                  <div className="relative flex items-center">
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      onChange={handleAvatarUpload}
                      placeholder="place your avatar link"
                      className={`peer relative h-10 w-full outline-none rounded-md bg-gray-50 p-4 font-thin drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-1 focus:bg-white focus:ring-blue-400  ${
                        touched.avatar && errors.avatar
                          ? 'border border-red-500'
                          : 'border border-gray-200'
                      }`}
                    />
                    {/* <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  <FaUser />
                </span> */}
                  </div>
                </label>
                {/* <ErrorMessage
                  name="avatar"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                /> */}
              </div>

              <div className="group w-full mb-6">
                <label
                  htmlFor="description"
                  className="inline-block mb-2 font-bold w-full text-sm text-gray-300 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                >
                  Description
                  <div className="relative flex items-center">
                    <Field
                      id="description"
                      type="text"
                      name="description"
                      placeholder="Enter the description of your charecter"
                      className={`peer relative h-10 w-full outline-none rounded-md bg-gray-50 p-4 font-thin drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-1 focus:bg-white focus:ring-blue-400  ${
                        touched.description && errors.description
                          ? 'border border-red-500'
                          : 'border border-gray-200'
                      }`}
                    />
                  </div>
                </label>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="flex text-center justify-between m-12">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`outline-gray-50 bg-gradient-to-r text-app-bg from-grad-green to-white text-center w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-1000 ease-in-out ${
                    !isLoading &&
                    'hover:bg-gradient-to-r hover:from-white hover:to-grad-green'
                  }`}
                >
                  {isLoading ? (
                    // <FiLoader className="animate-spin my-1 mx-auto" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  ) : (
                    'Create Character'
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
