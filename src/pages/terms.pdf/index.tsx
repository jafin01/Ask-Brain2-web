import React from 'react';
import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <div className="h-screen">
        <embed
          src="/docs/terms.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          title="Helloo this is new"
        />
      </div>
    </>
  );
}
