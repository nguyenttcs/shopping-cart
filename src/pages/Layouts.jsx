import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemList from './Items/ItemList';
import Cart from './Cart/Cart';

class Layouts extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route exact path="/cart" render={(props) => <Cart {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Layouts;
