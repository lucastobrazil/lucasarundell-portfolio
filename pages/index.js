import React from 'react';
import Link from 'next/link';
import Inner from '../components/Section/Inner';
import ProfileBubble from '../components/ProfileBubble';
import styles from './style.less';
import { LINKS } from './constants';
import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout title="Lucas Arundell -  Product Designer, Developer and Leader.">
            <section className={styles.container}>
                <Inner className={styles.inner}>
                    <h1>Product Designer, Developer and Leader.</h1>
                    <p className={styles.subHeading}>
                        I am passionate about design, people, innovative technology and building powerful and impactful
                        solutions.
                    </p>
                    <Link href={`/${LINKS.WORK}`}>
                        <a>See my work</a>
                    </Link>
                    <div className={styles.bubbleContainer}>
                        <span className={styles.greeting}>
                            <span role="img" className={styles.emoji} aria-label="Waving emoji">
                                👋
                            </span>
                        </span>
                        <ProfileBubble />
                    </div>
                </Inner>
            </section>
        </Layout>
    );
}
