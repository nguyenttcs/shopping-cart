import React from 'react';
import axios from 'axios';
import Item from './Item';

import cake from '../../assets/images/cake.jpg';
import coke from '../../assets/images/coke.jpg';
import hamburger from '../../assets/images/hamburger.jpg';
import hotdog from '../../assets/images/hotdog.jpg';
import fanta from '../../assets/images/fanta.jpg';
import moonCake from '../../assets/images/moon-cake.jpg';
import chicken from '../../assets/images/chicken.jpg';
import cheese from '../../assets/images/cheese.jpg';

class ItemList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "items": [
                {
                    "id": "1",
                    "name": "Cake",
                    "image": cake,
                    "price": 1000,
                    "stock": 10 
                },
                {
                    "id": "2",
                    "name": "Coke",
                    "image": coke,
                    "price": 100,
                    "stock": 5 
                },
                {
                    "id": "3",
                    "name": "Hambuger",
                    "image": hamburger,
                    "price": 500,
                    "stock": 7
                },
                {
                    "id": "4",
                    "name": "Hot Dog",
                    "image": hotdog,
                    "price": 1500,
                    "stock": 15 
                },
                {
                    "id": "5",
                    "name": "Fanta",
                    "image": fanta,
                    "price": 1000,
                    "stock": 10 
                },
                {
                    "id": "6",
                    "name": "Moon Cake",
                    "image": moonCake,
                    "price": 1000,
                    "stock": 8 
                },
                {
                    "id": "7",
                    "name": "Chicken",
                    "image": chicken,
                    "price": 100,
                    "stock": 12
                },
                {
                    "id": "8",
                    "name": "Cheese",
                    "image": cheese,
                    "price": 2000,
                    "stock": 20 
                }
            ]
        }
    }

    componentDidMount() {
        this.getItems();
    }
    

    getItems = () => {
        axios.get("http://localhost:3001/items")
        .then(res=>{
            console.log(res);
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