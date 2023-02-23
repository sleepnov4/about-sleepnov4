import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  const meta = {
    title: 'SleepNov4 Website',
    description: 'SleepNov4\'s Personal Website'
  }
  
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta name="og:site_name" content={meta.title} />
        <meta name="og:title" content={meta.title} />
        <meta name="og:description" content={meta.description} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
