import React from 'react';
import App, { Container } from 'next/app';
import Nav from '../components/Nav';
import '../styles/app.less';

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Nav />
                <main>
                    <Component {...pageProps} />
                </main>
            </Container>
        );
    }
}
