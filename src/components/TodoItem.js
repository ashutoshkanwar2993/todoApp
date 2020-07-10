import React from 'react'

export default class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <li className="todo-item">
                    <input
                        type="checkbox"
                        checked={this.props.todoListItem.completed}
                        onChange={() => {
                            this.props.handleChangeProps(this.props.todoListItem.id);
                        }} />

                    <button
                        onClick={() => {
                            { this.props.deleteItemTodoList(this.props.todoListItem.id) }
                        }}
                        value='Delete' >
                        Delete
                    </button>
                    {this.props.todoListItem.title}

                </li>
            </div>
        )
    }
}