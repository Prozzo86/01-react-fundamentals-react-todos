// Import the React library and destructure useState from it
import React, { useState } from 'react';

// Import the CSS file associated with the App component
import './App.css';

// Import the NewTodoForm component from the components directory
import NewTodoForm from './components/NewTodoForm';

// Import the TodoTable component from the components directory
import TodoTable from './components/TodoTable';

// Define the main App component
function App() {

 // Initialize a state variable showAddTodoForm to false, with a corresponding setter function setShowAddTodoForm
 const [showAddTodoForm, setShowAddTodoForm] = useState(false);

 // Initialize a state variable todos to an array of todo objects, with a corresponding setter function setTodos
 const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One'},
    {rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User One'}
 ]);

 // Define a function to add a new todo item to the todos array
 const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      // Update the todos state with the new todo item
      setTodos(todos => [...todos, newTodo]);
 }

 // Define a function to remove a todo item from the todos array
 const deleteTodo = (deleteTodoRowNumber) => {
    // Filter out the todo item with the given row number
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    // Update the todos state with the filtered array
    setTodos(filtered);
 }

 // Render the App component's UI
 return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          {/* Pass the todos and deleteTodo function as props to the TodoTable component */}
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          {/* Button to toggle the visibility of the NewTodoForm component */}
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {/* Conditionally render the NewTodoForm component if showAddTodoForm is true */}
          {showAddTodoForm &&
            <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
 );
}

// Export the App component as the default export
export default App;