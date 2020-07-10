import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from "uuid";


class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    }

    handleChange = (id) => {
        {
            this.setState({
                todos: this.state.todos.map((todo) => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            })
        }
    };

    deleteTodoItem = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    }

    getInputData = (data) => {
        console.log(data);
        const newTodo = {
            id: uuidv4(),
            title: data,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <InputTodo inputData={this.getInputData} />
                <TodosList
                    todos1={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteItemContainer={this.deleteTodoItem} />
            </div>
        )

    }
}

export default TodoContainer