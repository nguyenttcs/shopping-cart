import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

class Header extends Component {
  navRef;
  constructor(props) {
    super(props);
    this.navRef = React.createRef();

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    console.log(this.navRef.current);
    document.addEventListener('click', this.handleClickOutSide);
  }

  handleClickOutSide = (e) => {
    if (
      this.navRef &&
      this.navRef.current &&
      !this.navRef.current.contains(e.target)
    ) {
      this.setState((prevState) => {
        return {
          isOpen: false,
        };
      });
    }
  };

  handleCartClick = (e) => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  handleGoToCartPage = () => {
    this.props.history.push('/cart');
  };

  navCart = () => {
    const { cartList } = this.props;

    var totalPrice = 0;
    cartList.map((cartItem) => {
      return (totalPrice = totalPrice + cartItem.quantity * cartItem.price);
    });

    return (
      <div className="nav-cart">
        {cartList.map((cartItem, index) => {
          return (
            <div className="nav-cart-item">
              <div className="item-img">
                <img src={cartItem.image} alt="" />
              </div>
              <div className="item-content">
                <h5>{cartItem.name}</h5>
                <p>Price: {cartItem.price * cartItem.quantity}</p>
              </div>
            </div>
          );
        })}

        <div className="nav-cart-below">
          <h4>Total: ${totalPrice}</h4>
          <button
            onClick={this.handleGoToCartPage}
            className="btn btn-success w-100"
          >
            Go to Cart
          </button>
        </div>
      </div>
    );
  };

  render() {
    const { cartList } = this.props;
    const { isOpen } = this.state;

    var cartListNo = 0;
    cartList.map((cartItem) => {
      return (cartListNo = cartListNo + cartItem.quantity);
    });

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        {/* <a className="navbar-brand" href="/">
					SHOPPING DEMO
        </a> */}
        <NavLink to="/" className="navbar-brand">
          SHOPPING DEMO
        </NavLink>

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
            ref={this.navRef}
          >
            <span>
              <i className="fas fa-shopping-cart"></i>
            </span>
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

        {isOpen ? this.navCart() : null}
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartList: state.cartListAction.cartList,
  };
};

export default withRouter(connect(mapStateToProps)(Header));
