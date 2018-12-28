import React from 'react';
import Inner from '../../components/Section/Inner';
import styles from './style.less';

export default function Footer() {
    return (
        <footer>
            <Inner className={styles.inner}>
                &copy; 2018 Lucas Arundell
                <span>
                    <a href="https://www.linkedin.com/in/lucasarundell" target="_blank" rel="noopener noreferrer">
                        <img src='/static/icons/linkedin-icon.svg' alt="Visit me on LinkedIn" />
                    </a>
                    <a href="https://dribbble.com/lucasarundell" target="_blank" rel="noopener noreferrer">
                        <img src='/static/icons/dribbble-icon.svg' alt="Visit me on Dribbble" />
                    </a>
                    <a href="https://twitter.com/arundelsounds" target="_blank" rel="noopener noreferrer">
                        <img src='/static/icons/twitter-icon.svg' alt="Follow me on Twitter" />
                    </a>
                </span>
            </Inner>
        </footer>
    );
}
