import React from 'react';
import styles from './Table.scss';

const Table = id => (
  <div className={styles.component}>
    <h2>Table view</h2>
    <h5>{id}</h5>
  </div>
);

export default Table;
