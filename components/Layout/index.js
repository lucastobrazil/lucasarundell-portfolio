import Link from 'next/link';
import Head from 'next/head';
import Nav from '../Nav';
import Footer from '../Footer';
import '../../styles/app.less';

export default ({ children, title = 'Lucas Arundell' }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Nav />
        <main>{children}</main>
        <Footer />
    </div>
);
