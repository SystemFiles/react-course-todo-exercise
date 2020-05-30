import React, { Component } from 'react';

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
			<div className='NewTodoForm'>
				<h3 className='NewTodoForm-Header'>New Todo</h3>
				<form className='NewTodoForm-Form' onSubmit={this.handleSubmit}>
					<input
						className='NewTodoForm-Input'
						type='text'
						value={this.state.item}
						onChange={this.handleChange}
					/>
					<button type='submit'>ADD TODO</button>
				</form>
			</div>
		);
	}
}

export default NewTodoForm;
