import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
	return (
		<div className='App container-fluid'>
			<TodoList />
		</div>
	);
}

export default App;
