import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCartList } from '../../redux/actions/cartAction';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
    };
  }

  handleClickDetele = (cartItem) => {
    const cartListCopy = this.props.cartList.map((el) => el);
    const indexCartItem = cartListCopy.findIndex((el) => el.id === cartItem.id);
    cartListCopy.splice(indexCartItem, 1);

    //Update CartList in store
    this.props.setCartList(cartListCopy);
  };

  render() {
    const { cartList } = this.props;

    return (
      <div className="cart-page">
        <div className="shopping-cart">
          <div className="title">Shopping Bag</div>
          {cartList.map((cartItem, index) => {
            return (
              <div className="item" key={index}>
                <div className="buttons">
                  <span
                    onClick={() => this.handleClickDetele(cartItem)}
                    className="delete-btn"
                  />
                </div>
                <div className="image">
                  <img src={cartItem.image} alt="" />
                </div>
                <div className="description">
                  <h4>{cartItem.name}</h4>
                </div>
                <div className="quantity">
                  <button className="plus-btn" type="button" name="button">
                    <img
                      src="https://designmodo.com/demo/shopping-cart/plus.svg"
                      alt=""
                    />
                  </button>
                  <input
                    type="text"
                    name="name"
                    defaultValue={1}
                    value={cartItem.quantity}
                  />
                  <button className="minus-btn" type="button" name="button">
                    <img
                      src="https://designmodo.com/demo/shopping-cart/minus.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="total-price">${cartItem.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartList: state.cartListAction.cartList,
  };
};

const mapActionToProps = {
  setCartList,
};

export default connect(mapStateToProps, mapActionToProps)(Cart);
