import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

class Header extends Component {
  handleCartClick = () => {};

  render() {
    const { cartList } = this.props;
    var cartListNo = 0;
    cartList.map((cartItem) => {
      return (cartListNo = cartListNo + cartItem.quantity);
    });

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        <a className="navbar-brand" href="/">
          SHOPPING DEMO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarTogglerDemo02"
        >
          <button
            className="btn btn-outline-success btn-cart mr-2"
            type="button"
            onClick={this.handleCartClick}
          >
            <NavLink to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </NavLink>
            <span className="m-2">{cartListNo}</span>
          </button>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartList: state.cartListAction.cartList,
  };
};

export default connect(mapStateToProps)(Header);
