import React from 'react';
import styles from './NewTable.module.scss';
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

const NewTable = () => (
  <Paper className={styles.component}>
    <div className={styles.top}>
      <h2>New Booking</h2>
    </div>
    <Table>
      <TableHead className={styles.tableHead}>
        <TableRow>
          <TableCell>Choose table</TableCell>
          <TableCell>Amount of people</TableCell>
          <TableCell>Pick date</TableCell>
          <TableCell>Pich hour</TableCell>
          <TableCell>Contact number</TableCell>
          <TableCell>Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row">
            <Select
              id="select-table"
              value=""
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
              value=""
            />
          </TableCell>
          <TableCell>
            <form noValidate>
              <TextField
                id="date"
                type="date"
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
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </TableCell>
          <TableCell>
            <TextField label="contact" variant="outlined" />
          </TableCell>
          <TableCell>
            <TextField label="name" variant="outlined" />
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

export default NewTable;

