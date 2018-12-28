import Link from 'next/link';
import Head from 'next/head';
import Nav from '../Nav';
import Footer from '../Footer';
import '../../styles/app.less';

export default ({ children, title = 'Lucas Arundell', description = 'A Berlin-based Product Designer.' }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={description} />
            <link rel="shortcut icon" href="/static/icons/favicon-me.ico" />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://www.lucasarundell.com" />
        </Head>
        <Nav />
        <main>{children}</main>
        <Footer />
    </div>
);
