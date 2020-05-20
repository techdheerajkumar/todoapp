import React, { Component } from 'react';
import ListItem from '../Atoms/ListItemComponent';

class ListComponent extends Component {
    render() {
        const todoItem = this.props.todoList;
        const todoListTable = todoItem.map((data) => {
            return (
                <li onClick={() => { this.props.click(data.id) }} key={data.id}>
                    <ListItem data={data.text} />
                </li>
            )
        })
        return (
            <ul>{todoListTable}</ul>
        )
    }
}

export default ListComponent;