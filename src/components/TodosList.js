
import React from "react"
import TodoItem from "./TodoItem"

export default class TodosList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos1.map(todoItem => (
                    // <li key={todoItem.id}>{todoItem.title}</li>
                    <TodoItem
                        key={todoItem.id}
                        todoListItem={todoItem}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteItemTodoList={this.props.deleteItemContainer}
                    />
                ))}
            </div>
        )
    }

}

