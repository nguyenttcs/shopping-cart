import React, { Component } from "react";

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartList: [
        {
          "id": "1",
          "name": "Cake",
          "image": "https://raw.githubusercontent.com/nguyenttcs/shopping-cart/0244645a7ca09d9d81aa481a5628c82872e47b32/src/assets/images/cake.jpg",
          "price": 1000,
          "quantity": 1 
      },
      {
          "id": "2",
          "name": "Coke",
          "image": "https://github.com/nguyenttcs/shopping-cart/blob/0244645a7ca09d9d81aa481a5628c82872e47b32/src/assets/images/coke.jpg?raw=true",
          "price": 100,
          "quantity": 5 
      }
      ]
    }
  }

  render() {
    return (
      <div className="cart-page">
        <div className="shopping-cart">
          {/* Title */}
          <div className="title">Shopping Bag</div>
          {/* Product #1 */}
          {
            this.state.cartList.map((cartItem, index) => {
              return (
                <div className="item" key={index}>
                  <div className="buttons">
                    <span className="delete-btn" />
                  </div>
                  <div className="image">
                    <img src={cartItem.image} alt="" />
                  </div>
                  <div className="description">
                    <h4>{cartItem.name}</h4>
                  </div>
                  <div className="quantity">
                    <button className="plus-btn" type="button" name="button">
                      <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" defaultValue={1} value={cartItem.quantity} />
                    <button className="minus-btn" type="button" name="button">
                      <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
                    </button>
                  </div>
              <div className="total-price">${cartItem.price}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Cart;
