import Head from 'next/head';
import React from 'react';

function Community() {
  return (
    <>
      <Head>
        <title>Community Guidelines</title>
      </Head>
      <div className="h-screen">
        <embed
          src="/docs/guidelines.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default Community;
