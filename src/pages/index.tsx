/* eslint-disable @typescript-eslint/no-explicit-any */
// import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import React from 'react';
import Navbar from '@/components/Navbar';

function index() {
  // const functions = getFunctions(getApp());
  // connectFunctionsEmulator(functions, 'localhost', 5001);

  return (
    <div className="bg-gradient-to-br from-app-bg via-app-bg to-grad-purple h-screen w-full">
      <Navbar />
    </div>
  );
}

export default index;
