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
        <link rel="shortcut icon" type="image/x-icon" sizes="16x16 24x24 32x32 48x48 64x64" href="/favicon.ico" />
        <meta name="description" content="El hackatón estudiantil del occidente de México" />
        <meta name="keywords" content="hackathon, guadalajara, guadalahacks, hack, coding, programming, programación, hackatón, hackaton, hackathon, student, computacion, estudiante" />
        <meta name="og:image" content="/banner.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}