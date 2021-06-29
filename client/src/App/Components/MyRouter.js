import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './About';
import Work from './Work';
import Main from '../pages/Main';
import Home from '../pages/Home';
import List from '../pages/List';

const MyRouter = (props) => {
  return (
    <Switch>
      <Route exact path='/'> <Home/></Route>
      <Route path='/list'> <List/> </Route>
      <Route path='/about'> <About/> </Route>
      <Route path='/work'> <Work/> </Route>
      <Route path='/main'> <Main/> </Route>
    </Switch>
  )
};

export default MyRouter;
