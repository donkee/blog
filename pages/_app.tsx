import '98.css';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import ReactGA from 'react-ga';
import { useClippy } from 'use-clippy-now';
import './style.css';

export default function MyApp({ Component, pageProps }) {
  const withClippy = useClippy('Clippy');
  ReactGA.initialize('UA-6411424-2');

  return (
    <div className="app">
      <Head>
        <title>Symantech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Symantech"
        description="A blog dedicated to unique and challenging coding experiences."
      />
      <Component {...pageProps} />
    </div>
  );
}
