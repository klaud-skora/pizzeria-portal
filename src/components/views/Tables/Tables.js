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
  {id: '1', status: 'free'},
  {id: '2', status: 'booked'},
  {id: '3', status: 'booked'},
  {id: '4', status: 'booked'},
  {id: '5', status: 'free'},
  {id: '6', status: 'free'},
  {id: '7', status: 'free'},
];
const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>book table</Button>
        </>
      );
    case 'booked':
      return (
        <Button>remove reservation</Button>
      );
    default:
      return null;
  }
};

const renderDetails = status => {
  switch (status) {
    case 'booked':
      return (
        <>
          <Button>show details</Button>
        </>
      );
    default:
      return '------------';
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
        </form>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} to={process.env.PUBLIC_URL + '/tables/booking/new'}>New Booking </Link>
        <Link className={styles.link} to={process.env.PUBLIC_URL + '/tables/booking/123abc'}>Bookings </Link>
        <Link className={styles.link} to={process.env.PUBLIC_URL + '/tables/events/new'}>New Event </Link>
        <Link className={styles.link} to={process.env.PUBLIC_URL + '/tables/events/123abc'}>Events</Link>
      </div>
    </div>
    <Table>
      <TableHead className={styles.tableHead}>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Details</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {renderDetails(row.status)}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;

