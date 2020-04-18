import React from 'react';
import axios from 'axios';
import Item from './Item';


class ItemList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.getItems();
    }
    

    getItems = () => {
        axios.get("http://localhost:3001/items")
        .then(res=>{
            this.setState({
                items: res.data
            })
        })
    }

    render() {
        return (
            <div className="item-page">
                <div className="item-list">
                {
                    this.state.items.map((item, index) => {
                        return (
                            <Item key={index} item={item} />
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default ItemList;