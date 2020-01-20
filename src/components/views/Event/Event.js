import React from 'react';
import styles from './Event.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Event = () => (
  <Paper className={styles.component}>
    <div className={styles.top}>
      <h2>Business meeting</h2>
    </div>
    <Table>
      <TableHead className={styles.tableHead}>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Amount of people</TableCell>
          <TableCell>Pick day</TableCell>
          <TableCell>Pich hour</TableCell>
          <TableCell>Name of event</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row">
            <Select
              id="select-table"
              displayEmpty
            >
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
              <MenuItem>3</MenuItem>
              <MenuItem>4</MenuItem>
              <MenuItem>5</MenuItem>
              <MenuItem>6</MenuItem>
              <MenuItem>7</MenuItem>
            </Select>
          </TableCell>
          <TableCell>
            <Select
              id="select-amount"
              displayEmpty
            >
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
              <MenuItem>3</MenuItem>
              <MenuItem>4</MenuItem>
              <MenuItem>5</MenuItem>
              <MenuItem>6</MenuItem>
              <MenuItem>7</MenuItem>
              <MenuItem>8</MenuItem>
            </Select>
          </TableCell>
          <TableCell>
            <Select
              id="select-day"
              displayEmpty
            >
              <MenuItem>Monday</MenuItem>
              <MenuItem>Tuesday</MenuItem>
              <MenuItem>Wednesday</MenuItem>
              <MenuItem>Thursday</MenuItem>
              <MenuItem>Friday</MenuItem>
              <MenuItem>Saturday</MenuItem>
              <MenuItem>Sunday</MenuItem>
            </Select>
          </TableCell>
          <TableCell>
            <form noValidate>
              <TextField
                id="time"
                type="time"
                defaultValue="13:15"
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </TableCell>
          <TableCell>
            <TextField label="Event" variant="outlined" defaultValue="Business meeting"/>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <div className={styles.foot}>
      <TextField multiline={true} rows={4} className={styles.footcont} label="Notes for details" variant="outlined" />
      <Button className={styles.footcont}>Book table</Button>
    </div>
  </Paper>
);

export default Event;
