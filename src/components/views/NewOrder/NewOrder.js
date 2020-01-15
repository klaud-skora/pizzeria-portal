import React from 'react';
import styles from './NewOrder.module.scss';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

const demoMenu = [
  {name: 'pizza margheritta', price: '5$'},
  {name: 'ravioli anatra', price: '7$'},
];

const NewOrder = () => (
  <Paper className={styles.component}>
    <h2>New Order</h2>
    <div className={styles.order}>
      <Table className={styles.table}>
        {demoMenu.map(row => (
          <TableRow className={styles.menuRow} key={row.name}>
            <div className={styles.position}>
              {row.name}
              {' '}
              {row.price}
            </div>
            <div className={styles.optionButtons}>
              <Button>edit</Button>
              <Button>delete</Button>
            </div>
          </TableRow>
        ))}
        <Button className={styles.addInMenu}>+add</Button>
      </Table>
      <div className={styles.options}>
        <div className={styles.tableOption}>
          <p>Table</p>
          <Select
            label="number"
            default="1"
            type="number"
          />
        </div>
        <div className={styles.cost}>
          <p>Cost</p>
          <p>65$</p>
        </div>
      </div>
    </div>
    <div className={styles.foot}>
      <Button className={styles.addOrder}>Submit</Button>
    </div>
  </Paper>
);

export default NewOrder;

