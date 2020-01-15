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
  {time: '12:00', table: '3'},
  {time: '12:30'},
  {time: '13:00'},
  {time: '13:30'},
  {time: '14:00'},
  {time: '14:30', table: '5'},
  {time: '15:00'},
  {time: '15:30'},
  {time: '16:00'},
  {time: '16:30'},
  {time: '17:00'},
  {time: '17:30'},
  {time: '18:00'},
  {time: '18:30'},
  {time: '19:00'},
  {time: '19:30'},
  {time: '20:00'},
  {time: '20:30'},
  {time: '21:00'},
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
            <TableCell key={row.id} component="th" scope="row">
              {row.id}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            {reservationTime.map(row => (
              <TableRow key={row.time} component="th" scope="row">
                <Button>{row.time}</Button>
              </TableRow>
            ))}
          </TableCell>
          {demoContent.map(column => (
            <TableCell key={column.time}>
              {reservationTime.map(row => (
                <TableRow key={row.time}>
                  {renderActions(row.table, column.id)}
                </TableRow>
              ))}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;

