import Head from 'next/head';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="subvis staking board" />
      </Head>
      <main className="w-full h-full min-h-screen bg-white text-primary flex overflow-auto">
        {children}
      </main>
    </>
  );
}
