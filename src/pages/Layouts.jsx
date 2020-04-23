import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemList from './Items/ItemList';
import Cart from './Cart/Cart';
import Header from '../components/Header';

class Layouts extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route path="/cart" render={(props) => <Cart {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Layouts;
