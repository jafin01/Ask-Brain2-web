/* eslint-disable @typescript-eslint/no-explicit-any */
import { functions } from 'config/firebase';
import {
  httpsCallable,
  connectFunctionsEmulator,
  // getFunctions,
} from 'firebase/functions';
import React, { useEffect } from 'react';

function index() {
  // const functions = getFunctions(getApp());
  connectFunctionsEmulator(functions, 'localhost', 5001);
  const generateText = httpsCallable(functions, 'generateChat');
  // Call the Cloud Function with the required data
  useEffect(() => {
    generateText({
      prompt: [
        {
          role: 'user',
          content:
            'Hello, can you tell me how to create a navigation bar in next js?',
        },
      ],
      model: 'gpt-3.5-turbo',
      temperature: '0.7',
      top_p: '1',
      frequency_penalty: '0',
      presence_penalty: '0',
      max_tokens: 100,
    })
      .then((result: any) => {
        console.log(result);
        console.log(result.data.generatedText);
      })
      .catch((error) => {
        console.log('inside error');
        console.log(error);
      });
  }, []);

  const takeScreenshot = httpsCallable(functions, 'takeScreenshot');

  const handleClick = () => {
    takeScreenshot({
      // url: 'http://localhost:3000/f16bfd7c-9a8e-49ac-8ed7-2859a49a5699',
      url: 'https://www.google.com',
    })
      .then((result: any) => {
        // The screenshot data is in result.data
        console.log(result);
      })
      .catch((error) => {
        console.error('Error taking screenshot:', error);
      });
  };

  return (
    <button type="button" onClick={handleClick}>
      Take screenshot
    </button>
  );
}

export default index;
