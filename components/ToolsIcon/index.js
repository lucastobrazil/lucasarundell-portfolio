import React from 'react';
import styles from './style.less';

export default function ToolsIcon({ icon }) {
    const iconPath = `/static/icons/${icon}.svg`;
    return <img className={styles.icon} src={iconPath} alt={`Icon for ${icon}`} />
}
