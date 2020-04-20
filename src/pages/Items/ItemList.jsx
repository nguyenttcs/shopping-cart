import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Item from './Item';
import { getItems } from '../../redux/actions/ItemAction';
import { getCartList } from '../../redux/actions/cartAction';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
      cartList: [],
    };
  }

  componentDidMount() {
    this.props.getItems();
  }

  componentDidUpdate(prevState) {
    if (prevState.cartList !== this.state.cartList) {
      this.props.getCartList(this.state.cartList);
    }
  }

  handleCartList = (item) => {
    let { cartList } = this.state;
    let cartListCopy = cartList;
    item.quantity = 1;

    if (!_.isEmpty(cartListCopy)) {
      for (var i = 0; i < cartListCopy.length; i++) {
        if (item.id === cartListCopy[i].id) {
          console.log(cartListCopy[i].quantity);

          cartListCopy[i].quantity = cartListCopy[i].quantity + 1;
          console.log('1', cartListCopy[i].quantity);
          break;
        } else if (i === cartListCopy.length - 1) {
          cartListCopy = cartListCopy.concat(item);
          console.log('2');
          break;
        }
      }
    } else {
      cartListCopy = cartListCopy.concat(item);
      console.log('3');
    }

    console.log(cartListCopy);

    this.setState((prevState) => {
      return {
        ...prevState,
        cartList: cartListCopy,
      };
    });
  };

  render() {
    const { items, isLoading } = this.props;

    return (
      <div className="item-page">
        {isLoading ? (
          <h2>Loading</h2>
        ) : (
          <div className="item-list">
            {items.map((item, index) => {
              return (
                <Item
                  key={index}
                  item={item}
                  cartList={() => this.handleCartList(item)}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.iTemAction.listItems,
    isLoading: state.iTemAction.isLoading,
    cartList: state.cartListAction.cartList,
  };
};

const mapActionToProps = {
  getItems,
  getCartList,
};

export default connect(mapStateToProps, mapActionToProps)(ItemList);
