import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import '../src/styles/globals.css';
import MainLayout from '@/src/Layout/Layout';

export default function App({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <>
        <Head>
          <title>Jikmunn Agency</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    );
  }
}
