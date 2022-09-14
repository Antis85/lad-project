import React from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.preloader}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
