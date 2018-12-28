import React from 'react';
import Link from 'next/link';
import styles from './style.less';
import { LINKS } from '../../pages/constants';

// const Link = props => <NavLink {...props} activeClassName={styles.active} />;
const NavLink = props => (
    <Link href={props.href}>
        <a className={props.className}>{props.children}</a>
    </Link>
);

export default function Nav({ className, children }) {
    return (
        <nav className={styles.nav}>
            <div className={styles.inner}>
                <NavLink href="/" className={styles.brand}>
                    Lucas Arundell
                </NavLink>
                <ul>
                    <li>
                        <NavLink href={`/${LINKS.WORK}`}>Work</NavLink>
                    </li>
                    {/* <li><Link href={`/${LINKS.LEADERSHIP}`}>Leadership</Link></li> */}
                    <li>
                        <NavLink href={`/${LINKS.ABOUT}`}>About Me</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
