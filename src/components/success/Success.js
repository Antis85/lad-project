import React from 'react';
import styles from './Success.module.css';

export default function Success({ successText }) {
  return <div className={styles.text}>{successText}</div>;
}
