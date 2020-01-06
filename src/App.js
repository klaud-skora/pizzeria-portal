import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Table from './components/views/Table/Table';
import NewTable from './components/views/NewTable/NewTable';
import Event from './components/views/Event/Event';
import NewEvent from './components/views/NewEvent/NewEvent';
import Ordering from './components/views/Ordering/Ordering';
import NewOrder from './components/views/NewOrder/NewOrder';
import Order from './components/views/Order/Order';
import Kitchen from './components/views/Kitchen/Kitchen';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React NOW ! YUP
            </a>
          </header>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage}/>
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login}/>
            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables}/>
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Table}/>
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={NewTable}/>
            <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Event}/>
            <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={NewEvent}/>
            <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering}/>
            <Route exact path={process.env.PUBLIC_URL + '/ordering/order/new'} component={NewOrder}/>
            <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Order}/>
            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen}/>
          </Switch>
        </div>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
