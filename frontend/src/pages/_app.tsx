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
       <link rel="shortcut icon" type="image/x-icon" sizes="16x16 24x24 32x32 48x48 64x64" href="/favicon.ico" />
        <title>GuadalaHacks</title>
        <meta name="description" content="El hackatón estudiantil del occidente de México" />
        <meta name="keywords" content="hackathon, guadalajara, guadalahacks, hack, coding, programming, programación, hackatón, hackaton, hackathon, student, computacion, estudiante" />
        <meta name="og:image" content="/banner.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
