import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			itemTemp  : this.props.value,
			item      : this.props.value,
			isEditing : false
		};

		this.openEdit = this.openEdit.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleCompleted = this.handleCompleted.bind(this);
	}

	openEdit(evt) {
		evt.preventDefault();

		this.setState((st) => {
			return {
				isEditing : !st.isEditing,
				itemTemp  : st.item
			};
		});
	}

	deleteItem(evt) {
		evt.preventDefault();
		this.props.deleteItem(this.props.id);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		let newValue = this.state.itemTemp;

		this.setState({
			item      : newValue,
			itemTemp  : '',
			isEditing : false
		});

		this.props.updateItem(this.props.id, newValue);
	}

	handleChange(evt) {
		this.setState({ itemTemp: evt.target.value });
	}

	handleKeyDown(evt) {
		if (evt.keyCode === 27) {
			this.setState({
				isEditing : false
			});
		}
	}

	handleCompleted(evt) {
		evt.preventDefault();
		this.props.handleTaskCompleted(this.props.id);
	}

	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<div className='Todo'>
					<form className='Todo-EditForm' onSubmit={this.handleSubmit}>
						<input
							value={this.state.itemTemp}
							onKeyDown={this.handleKeyDown}
							onChange={this.handleChange}
							type='text'
						/>
						<button type='submit'>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className='Todo'>
					<li
						onClick={this.handleCompleted}
						className={this.props.completed ? 'Todo-Item completed' : 'Todo-Item'}
					>
						{this.state.item}
					</li>
					<div className='Todo-Actions'>
						<button onClick={this.openEdit}>
							<i className='fas fa-pen' />
						</button>
						<button onClick={this.deleteItem}>
							<i className='fas fa-trash' />
						</button>
					</div>
				</div>
			);
		}

		return result;
	}
}

export default Todo;
