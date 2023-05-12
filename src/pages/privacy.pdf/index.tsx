import Head from 'next/head';
import React from 'react';

function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className="h-screen">
        <embed
          src="/docs/privacy.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default Privacy;
