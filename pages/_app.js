import '../styles/globals.css';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { SnackbarProvider } from 'notistack';
import Layout from '../component/layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // return <Component {...pageProps} />

  return (
    <>
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          // TransitionComponent={Grow}
        >
          <Head>
            <meta charSet="UTF-8" />
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
          </Head>

          {/* */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SnackbarProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
