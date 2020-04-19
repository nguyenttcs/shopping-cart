import React from 'react';
import {connect} from "react-redux";
import Item from './Item';
import {getItems} from "../../redux/actions/ItemAction";


class ItemList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const {items, isLoading} = this.props;
        
        return (
            <div className="item-page">
                {isLoading ? <h2>Loading</h2> : 
                    <div className="item-list">
                    {
                        items.map((item, index) => {
                            return (
                                <Item key={index} item={item} />
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
        isLoading: state.iTemAction.isLoading
    }
}

const mapActionToProps = {
    getItems
}

export default connect(mapStateToProps, mapActionToProps)(ItemList);