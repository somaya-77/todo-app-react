import React from "react";
import './ListItem.css';
const ListItem = (props) => {
    const {items, deleteItem} = props;
    let length = items.length;

    const listItems = length ? (
        items.map(item => {
            return (
                <div key={item.id} className="item">
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <span className="delete" onClick={() => deleteItem(item.id)}>&times;</span>
    
                </div>
            );
        })
    ):(
        <p className="message">There is no item to show.</p>
    )
    return (
        <div className="listItems">
            <div className="header">
                <span>Name</span>
                <span>age</span>
                <span>Action</span>
            </div>
            {listItems}
        </div>
    )
};

export default ListItem;