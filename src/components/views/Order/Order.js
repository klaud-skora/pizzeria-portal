import React from 'react';
import styles from './Order.scss';

const Order = id => (
  <div className={styles.component}>
    <h2>Order view</h2>
    <h5>{id}</h5>
  </div>
);

export default Order;
