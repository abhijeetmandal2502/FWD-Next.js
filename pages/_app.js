import '../styles/globals.css';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { SnackbarProvider } from 'notistack';

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

          <Component {...pageProps} />
        </SnackbarProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
