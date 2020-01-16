import React from 'react';
import styles from './NewOrder.module.scss';
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
      <div className={styles.table}>
        <div className={styles.body}>
          {demoMenu.map(row => (
            <div className={styles.menuRow} key={row.name}>
              <div className={styles.position}>
                {row.name}
                {' '}
                {row.price}
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
            label="number"
            default="1"
            type="number"
            value=''
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

