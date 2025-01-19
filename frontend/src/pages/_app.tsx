import React from 'react';
import type { AppProps } from 'next/app';
import '@/app/globals.css';
import '@/styles/globals.css';

import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { LanguageProvider } from '@/context/LanguageContext';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
