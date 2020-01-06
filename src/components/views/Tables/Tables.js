import React from 'react';
import styles from './Tables.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={process.env.PUBLIC_URL + '/tables/booking/new'}>New Booking </Link>
    <Link to={process.env.PUBLIC_URL + '/tables/booking/123abc'}>Bookings </Link>
    <Link to={process.env.PUBLIC_URL + '/tables/events/new'}>New Event </Link>
    <Link to={process.env.PUBLIC_URL + '/tables/events/123abc'}>Events</Link>
  </div>
);

export default Tables;
