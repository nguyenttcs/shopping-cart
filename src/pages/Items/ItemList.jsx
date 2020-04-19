import React from 'react';
import {connect} from "react-redux";
import Item from './Item';
import {getItems} from "../../redux/actions/ItemAction";
import {getCartList} from "../../redux/actions/cartAction";


class ItemList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoading: true,
            cartList: []
        }
    }

    componentDidMount() {
        this.props.getItems();
    }

    componentDidUpdate(prevState){
        if(prevState.cartList !== this.state.cartList) {
            this.props.getCartList(this.state.cartList);
        }
    }

    handleCartList = (item) => {
        this.setState(prevState => {
            return {
                ...prevState,
                cartList: this.state.cartList.concat(item)
            }
        })
        
    }

    render() {
        const {items, isLoading} = this.props;
        console.log(this.props.cartList);
        
        return (
            <div className="item-page">
                {isLoading ? <h2>Loading</h2> : 
                    <div className="item-list">
                    {
                        items.map((item, index) => {
                            return (
                                <Item key={index} item={item} cartList={() => this.handleCartList(item)} />
                            )
                        })
                    }
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.iTemAction.listItems,
        isLoading: state.iTemAction.isLoading,
        cartList: state.cartListAction.cartList
    }
}

const mapActionToProps = {
    getItems,
    getCartList
}

export default connect(mapStateToProps, mapActionToProps)(ItemList);