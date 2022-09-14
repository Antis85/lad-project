import React from 'react';
import styles from './Error.module.css';

export default function Error({ errorText }) {
  return <div className={styles.text}>{errorText}</div>;
}
