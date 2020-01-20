import React from 'react';
import styles from './NewOrder.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const demoMenu = [
  {name: 'pizza margheritta', price: '5'},
  {name: 'ravioli anatra', price: '7'},
];

const cost = (order) => {
  let total = 0;
  let i = 0;
  while (i < order.length) {

    const priceInt = parseInt(order[i].price);
    total += priceInt;
    i++;
  }
  return total;
};

const NewOrder = () => (
  <Paper className={styles.component}>
    <h2>New Order</h2>
    <div className={styles.order}>
      <div className={styles.table}>
        <div className={styles.body}>
          {demoMenu.map(row => (
            <div className={styles.menuRow} key={row.name}>
              <div className={styles.position}>
                {row.name}
                {' '}
                {row.price}$
              </div>
              <Button className={styles.optionButtons}>edit</Button>
              <Button className={styles.optionButtons}>delete</Button>
            </div>
          ))}
          <Button className={styles.addInMenu}>+add</Button>
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.tableOption}>
          <p>Table</p>
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
        </div>
        <div className={styles.cost}>
          <p>Cost</p>
          {cost(demoMenu)}$
        </div>
      </div>
    </div>
    <div className={styles.foot}>
      <Button className={styles.addOrder}>Submit</Button>
    </div>
  </Paper>
);

export default NewOrder;

