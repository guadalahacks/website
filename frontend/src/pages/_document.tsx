import { Html, Head, Main, NextScript } from 'next/document'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'GuadalaHacks',
    description: 'El hackathon estudiantil más grande del occidente de México',
  }

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}