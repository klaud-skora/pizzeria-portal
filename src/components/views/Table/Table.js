import React from 'react';
import styles from './Table.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const demoData = {
  table: '6',
  people: '4',
  name: 'Parker',
  number: '666-876-678',
  date: '2020-05-08',
  time: '12:15',
};


const Reservation = () => (
  <Paper className={styles.component}>
    <div className={styles.top}>
      <h2>Reservation table.id</h2>
    </div>
    <Table>
      <TableHead className={styles.tableHead}>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Amount of people</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Hour</TableCell>
          <TableCell>Contact number</TableCell>
          <TableCell>Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row">
            {demoData.table}
          </TableCell>
          <TableCell>
            {demoData.people}
          </TableCell>
          <TableCell>
            <form noValidate>
              <TextField
                id="date"
                type="date"
                value={demoData.date}
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </TableCell>
          <TableCell>
            <form noValidate>
              <TextField
                id="time"
                type="time"
                value={demoData.time}
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </TableCell>
          <TableCell>
            {demoData.number}
          </TableCell>
          <TableCell>
            {demoData.name}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <div className={styles.foot}>
      <div className={styles.notes}>
        <h5>notes:</h5>
        <p>Starters and orange juices on the table.</p>
      </div>
      <Button className={styles.footcont}>Edit</Button>
    </div>
  </Paper>
);

export default Reservation;
