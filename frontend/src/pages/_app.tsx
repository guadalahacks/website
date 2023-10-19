import type { AppProps } from 'next/app'
import '@/app/globals.css'

import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.ico" />
        <title>GuadalaHacks</title>
        <meta name="description" content="El hackathon estudiantil del occidente de México" />
        <meta name="keywords" content="hackathon, guadalajara, guadalahacks, hack, coding, programming, programación, hackatón, hackaton, hackathon, student, computacion, estudiante" />
        <meta name="og:image" content="/banner.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
