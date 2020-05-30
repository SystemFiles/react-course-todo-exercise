import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item : ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt) {
		this.setState({
			item : evt.target.value
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();

		if (this.state.item.length > 0) {
			this.props.addTodo(this.state.item);

			// Reset inputs form
			this.setState({
				item : ''
			});
		} else {
			alert('You cannot add a blank todo');
		}
	}

	render() {
		return (
			<form className='NewTodoForm' onSubmit={this.handleSubmit}>
				<input
					type='text'
					placeholder='New Task'
					name='task'
					id='task'
					value={this.state.item}
					onChange={this.handleChange}
				/>
				<button type='submit'>ADD TASK</button>
			</form>
		);
	}
}

export default NewTodoForm;
