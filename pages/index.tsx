import App from './_app';

import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Captain's Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to my blog!</h1>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/1">
              <a>About Us</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
