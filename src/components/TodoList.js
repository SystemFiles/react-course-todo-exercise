import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos : []
		};

		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
		this.toggleTaskCompleted = this.toggleTaskCompleted.bind(this);
	}

	deleteTodo(key) {
		this.setState({
			todos : this.state.todos.filter((t) => t.key !== key)
		});
	}

	addTodo(item) {
		this.setState((st) => {
			return {
				todos : [
					...st.todos,
					{ item: item, key: uuid(), completed: false }
				]
			};
		});
	}

	updateTodo(key, newValue) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.key === key) {
				return { ...todo, task: newValue };
			}
			return todo;
		});

		this.setState({
			todos : updatedTodos
		});
	}

	toggleTaskCompleted(key) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.key === key) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});

		this.setState({
			todos : updatedTodos
		});
	}

	render() {
		return (
			<div className='TodoList'>
				<h1>
					Ben's Todo Tracker <span>A Simple Todo list make with ReactJS</span>
				</h1>
				{this.state.todos.length > 0 ? (
					<ul>
						{this.state.todos.map((item) => {
							return (
								<Todo
									key={item.key}
									id={item.key}
									completed={item.completed}
									value={item.item}
									handleTaskCompleted={this.toggleTaskCompleted}
									updateItem={this.updateTodo}
									deleteItem={this.deleteTodo}
								/>
							);
						})}
					</ul>
				) : (
					<p>once you add some items they will appear here...</p>
				)}

				<NewTodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default TodoList;
