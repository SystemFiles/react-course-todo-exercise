import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos : [
				{ item: 'Swim lessons', key: 'daiwdiuhad-awdawd' }
			]
		};

		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
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
					{ item: item, key: uuid() }
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

	render() {
		return (
			<div className='TodoList'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col'>
							<h1>Todo List</h1>
						</div>
					</div>
					<div className='row TodoList-List'>
						<div className='col'>
							{this.state.todos.map((item) => {
								return (
									<Todo
										key={item.key}
										id={item.key}
										value={item.item}
										updateItem={this.updateTodo}
										deleteItem={this.deleteTodo}
									/>
								);
							})}
						</div>
					</div>
					<div className='row'>
						<div className='col'>
							<NewTodoForm addTodo={this.addTodo} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TodoList;
