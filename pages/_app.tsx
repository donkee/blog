import '98.css';
import Head from 'next/head';
import { useClippy } from 'use-clippy-now';
import './style.css';

export default function MyApp({ Component, pageProps }) {
  const withClippy = useClippy('Clippy');

  return (
    <div className="app">
      <Head>
        <title>Captain's Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
