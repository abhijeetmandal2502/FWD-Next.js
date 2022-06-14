import Head from 'next/head'
import React from 'react'
import Footer from './menu/footer'
import Header from './menu/Header'

export default function Layout({ children }) {
    return (
        <>
            <Head>News Controls</Head>
            {/* <Headroom> */}
            <Header />
            {/* </Headroom> */}
            <main>{children}</main>
            <Footer />
        </>
    )
}

