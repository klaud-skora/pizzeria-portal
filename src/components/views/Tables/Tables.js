import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const demoContent = [
  {id: '1'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
  {id: '6'},
  {id: '7'},
];

const reservationTime = [
  {id: '1', time: '12:00', table: '3'},
  {id: '2', time: '12:30'},
  {id: '3', time: '13:00'},
  {id: '4', time: '13:30'},
  {id: '5', time: '14:00'},
  {id: '6', time: '14:30', table: '5'},
  {id: '7', time: '15:00'},
  {id: '8', time: '15:30'},
  {id: '9', time: '16:00'},
  {id: '10', time: '16:30'},
  {id: '11', time: '17:00'},
  {id: '12', time: '17:30'},
  {id: '13', time: '18:00'},
  {id: '14', time: '18:30'},
  {id: '15', time: '19:00'},
  {id: '16', time: '19:30'},
  {id: '17', time: '20:00'},
  {id: '18', time: '20:30'},
  {id: '19', time: '21:00'},
];
const renderActions = (takenTable, table) => {
  switch (takenTable) {
    case (takenTable, table):
      return (
        <>
          <Button className={styles.reservation}>reservation</Button>
        </>
      );
    default:
      return (
        <>
          <Button>book table</Button>
        </>
      );
  }
};

const Tables = () => (
  <Paper className={styles.component}>
    <div className={styles.top}>
      <div className={styles.calendar}>
        <form noValidate>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue="2017-05-24"
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            label="Time"
            type="time"
            defaultValue="21:11:54"
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} to={process.env.PUBLIC_URL + '/tables/booking/new'}>New Booking</Link>
        <Link className={styles.link} to={process.env.PUBLIC_URL + '/tables/booking/123abc'}>Bookings</Link>
        <Link className={styles.link} to={process.env.PUBLIC_URL + '/tables/events/new'}>New Event </Link>
        <Link className={styles.link} to={process.env.PUBLIC_URL + '/tables/events/123abc'}>Events</Link>
      </div>
    </div>
    <Table>
      <TableHead className={styles.tableHead}>
        <TableRow>
          <TableCell>Table</TableCell>
          {demoContent.map(row => (
            <TableCell className={styles.timeCell} key={row.id} component="th" scope="cell">
              {row.id}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {reservationTime.map(row => (
          <TableRow key={row.id}>
            <TableCell>
              {row.time}
            </TableCell>
            {demoContent.map(column => (
              <TableCell key={column.id}>
                {renderActions(row.table, column.id)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;

