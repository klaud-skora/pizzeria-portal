import React from 'react';
import styles from './Event.scss';

const Event = id => (
  <div className={styles.component}>
    <h2>Event view</h2>
    <h5>{id}</h5>
  </div>
);

export default Event;
