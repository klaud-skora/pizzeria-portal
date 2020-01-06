import React from 'react';
import styles from './Ordering.scss';
import {Link} from 'react-router-dom';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering view</h2>
    <Link to={process.env.PUBLIC_URL + '/ordering/order/new'}>New Order </Link>
    <Link to={process.env.PUBLIC_URL + '/ordering/order/123abc'}>Orders</Link>
  </div>
);

export default Ordering;
