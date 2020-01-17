import React from 'react';
import styles from './Homepage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

const demoData = [
  {id: '1', time: '12:00', table: 'Table 2'},
  {id: '2', time: '14:15', table: 'Table 1'},
];

const Homepage = () => (
  <div className={styles.component}>
    <h2>Dashboard</h2>
    <div className={styles.container}>
      <div className={styles.reservations}>
        <h4>Reservations for today</h4>
        <Table className={styles.table}>
          <TableBody>
            {demoData.map(row => (
              <TableRow key={row.id}>
                <TableCell >
                  {row.time}
                </TableCell>
                <TableCell >
                  {row.table}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className={styles.current}>
        <div className={styles.total}>
          <h4>Total</h4>
          <p>472$</p>
        </div>
        <Button className={styles.history}>HISTORY</Button>
      </div>
    </div>
  </div>
);

export default Homepage;
