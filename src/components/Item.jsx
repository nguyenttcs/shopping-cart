import React, { Component } from 'react';

class Item extends Component {
  handleAddToCart = () => {
    this.props.cartList();
  };

  render() {
    const { item } = this.props;
    return (
      <div className="item-detail">
        <div className="item-img">
          <img src={item.image} alt="" />
        </div>
        <div className="item-info">
          <h3 className="name">{item.name}</h3>
          <p className="price">Price: {item.price}</p>
          <p className="stock">Stock: {item.stock}</p>
          <button
            onClick={this.handleAddToCart}
            className="btn btn-success btn-add"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default Item;
