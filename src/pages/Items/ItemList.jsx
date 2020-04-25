import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Item from '../../components/Item';
import { getItems, setItems } from '../../redux/actions/ItemAction';
import { getCartList, fetchCartList } from '../../redux/actions/cartAction';
import { postData, putData } from '../../hocs/commonService';

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
    this.props.fetchCartList();
  }

  handleCartList = (item) => {
    const { cartList } = this.state;
    // const { cartList } = this.props;
    const cartListCopy = cartList.map((cartItem) => cartItem);
    const itemsCopy = this.props.items.map((el) => el);

    if (_.isEmpty(cartList)) {
      const currentItem = { ...item };
      currentItem.quantity = 1;
      currentItem.stock = currentItem.stock - 1;
      cartListCopy.push(currentItem);

      // postData('http://localhost:3001/carts', currentItem);

      //Xu ly Stock on ItemList
      const currentItemStock = itemsCopy.find((el) => el.id === item.id);
      if (currentItemStock) {
        currentItemStock.stock = currentItem.stock;
        const index = itemsCopy.findIndex((el) => el.id === item.id);
        itemsCopy.splice(index, 1, currentItemStock);

        // putData(
        //   `http://localhost:3001/items/${currentItemStock.id}`,
        //   currentItemStock
        // );
      }
    } else {
      const currentItem = cartList.find((cartItem) => cartItem.id === item.id);
      if (currentItem) {
        currentItem.quantity = currentItem.quantity + 1;
        currentItem.stock = currentItem.stock - 1;
        const index = cartList.findIndex((cartItem) => cartItem.id === item.id);
        cartListCopy.splice(index, 1, currentItem);
        // putData(`http://localhost:3001/carts/${currentItem.id}`, currentItem);

        //Xu ly Stock on ItemList
        const currentItemStock = itemsCopy.find((el) => el.id === item.id);
        if (currentItemStock) {
          currentItemStock.stock = currentItem.stock;
          const index = itemsCopy.findIndex((el) => el.id === item.id);
          itemsCopy.splice(index, 1, currentItemStock);
          // putData(
          //   `http://localhost:3001/items/${currentItemStock.id}`,
          //   currentItemStock
          // );
        }
      } else {
        const currentItem = { ...item };
        currentItem.quantity = 1;
        currentItem.stock = currentItem.stock - 1;
        cartListCopy.push(currentItem);
        // postData('http://localhost:3001/carts', currentItem);

        //Xu ly Stock on ItemList
        const currentItemStock = itemsCopy.find((el) => el.id === item.id);
        if (currentItemStock) {
          currentItemStock.stock = currentItem.stock;
          const index = itemsCopy.findIndex((el) => el.id === item.id);
          itemsCopy.splice(index, 1, currentItemStock);
          // putData(
          //   `http://localhost:3001/items/${currentItemStock.id}`,
          //   currentItemStock
          // );
        }
      }
    }

    this.setState(
      {
        cartList: cartListCopy,
      },
      () => {
        this.props.getCartList(this.state.cartList);
        this.props.setItems(itemsCopy);
      }
    );
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
  setItems,
  fetchCartList,
};

export default connect(mapStateToProps, mapActionToProps)(ItemList);
