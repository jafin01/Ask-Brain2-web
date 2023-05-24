/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import Link from 'next/link';
import { auth } from 'config/firebase';
import {
  GoogleAuthProvider,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/router';

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { push } = useRouter();
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      push('/');
    } catch (error) {
      push('/register');
    }
  };

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      setIsLoading(true);
      await setPersistence(auth, browserSessionPersistence);
      await signInWithEmailAndPassword(auth, values.email, values.password);
      push('/');
    } catch (error) {
      setIsLoading(false);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Min 6 char required')
      .required('Password is required'),
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-app-bg via-app-bg to-grad-purple text-white">
      <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-grad-green py-5">
        Login
      </h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="px-8 pt-6 pb-8 mb-3 w-full md:w-1/3">
            <div className="group w-full mb-6">
              <label
                htmlFor="email"
                className="text-sm mb-2 font-bold inline-block w-full text-gray-300 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
              >
                Email
                <div className="relative flex items-center">
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className={`peer relative h-10 w-full outline-none rounded-md bg-gray-50 p-4 font-thin drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-1 focus:bg-white focus:ring-blue-400  ${
                      touched.email && errors.email
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
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="group w-full mb-6">
              <label
                htmlFor="password"
                className="inline-block mb-2 font-bold w-full text-sm text-gray-300 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
              >
                Password
                <div className="relative flex items-center">
                  <Field
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter your password"
                    className={`peer relative h-10 w-full outline-none rounded-md bg-gray-50 p-4 font-thin drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-1 focus:bg-white focus:ring-blue-400  ${
                      touched.password && errors.password
                        ? 'border border-red-500'
                        : 'border border-gray-200'
                    }`}
                  />
                  {/* <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  <FaLock />
                </span> */}
                  <button
                    type="button"
                    className="material-symbols-outlined absolute right-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
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
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ) : (
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
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </label>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
              <div className="text-right">
                <Link
                  href="/forgot-password"
                  className="text-sm text-gray-500 hover:text-blue-400 transition-all duration-200 ease-in-out "
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div className="flex text-center justify-between mb-4">
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
                  'Login'
                )}
              </button>
            </div>

            <div className="text-center">
              <Link
                className="text-sm text-gray-500 hover:text-blue-400 transition-all duration-200 ease-in-out "
                href="/register"
              >
                Don&apos;t have an account? Register
              </Link>
            </div>
          </Form>
        )}
      </Formik>

      <button
        type="button"
        onClick={handleGoogleSignUp}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default LoginForm;
