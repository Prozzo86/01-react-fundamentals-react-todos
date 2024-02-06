// Import the React library and destructure useState from it
import React, { useState } from 'react';

// Define a functional component named NewTodoForm that takes props as its argument
function NewTodoForm(props) {

    // Initialize state variables for the description and assigned fields, with corresponding setter functions
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    // Define a function to handle the submission of the form
    const submitTodo = () => {
        // Check if both the description and assigned fields are not empty
        if (description !== '' && assigned !== '') {
            // Call the addTodo function passed in through props with the description and assigned values
            props.addTodo(description, assigned);
            // Reset the description and assigned fields
            setDescription('');
            setAssigned('');
        }
    }

    // Return JSX that represents a form for adding a new todo
    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        required
                        // Handle the change event of the input field by updating the assigned state variable
                        onChange={e => setAssigned(e.target.value)}
                        value={assigned}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea 
                        className='form-control' 
                        rows={3} 
                        required
                        // Handle the change event of the textarea by updating the description state variable
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <button 
                    type='button' 
                    className='btn btn-primary mt-3' 
                    // Handle the click event of the button by calling the submitTodo function
                    onClick={submitTodo}
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}

// Export the NewTodoForm component as the default export
export default NewTodoForm;

