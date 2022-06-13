import '../styles/globals.css';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // return <Component {...pageProps} />

  return (
    <>
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </Head>
        {/* <Fonts /> */}
        {/* <ChakraProvider theme={customTheme}> */}
        {/* <CSSReset /> */}
        {/* <NavBar /> */}
        <Component {...pageProps} />
        {/* <MobileFooter /> */}
        {/* </ChakraProvider> */}
      </SessionProvider>
    </>
  );
}

export default MyApp;
