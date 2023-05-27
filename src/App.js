import ListItem from './Components/ListItem/ListItem';
import AddItem from './Components/AddItem/AddItem';
import React, { Component } from "react";
import './App.css'

class App extends Component {
    state = {
        items: [
            { id: 1, name: 'ali', age: 22 },
            { id: 2, name: 'ahmed', age: 25 },
            { id: 3, name: 'mohamed', age: 28 }
        ]
    };

    // first way for delete item

    // deleteItem = (id) => {
    //     let items = this.state.items;
    //     let i = items.findIndex(item => item.id === id);
    //     items.splice(i,1);
    //     // for update
    //     this.setState({items})
    // }

    // second way for delete item
    deleteItem = (id) => {
        let items = this.state.items.filter(item => {
            return item.id !== id;
        });
        this.setState({items});
    }
    addItem = (item) => {
        // problem key
        item.id = Math.random()
        let items = this.state.items;
        items.push(item);
        this.setState({items})
    }

    render() {
        return (
            <div className="App">
                <h1 className='title'>todoList app</h1>
                <ListItem items={this.state.items} deleteItem={this.deleteItem} />
                <AddItem addItem={this.addItem} />

            </div>
        )
    }
}

export default App;
