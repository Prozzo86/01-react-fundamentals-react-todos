// Import the TodoRowItem component from the current directory
import TodoRowItem from "./TodoRowItem";

// Define the TodoTable component that receives props
function TodoTable(props) {
    // Return JSX that represents a table structure
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {/* Map over the todos array passed in props, creating a TodoRowItem for each todo */}
                {props.todos.map(todo => (
                    <TodoRowItem
                        // Use the rowNumber as the key for each TodoRowItem
                        key={todo.rowNumber}
                        // Pass the rowNumber, rowDescription, and rowAssigned properties to the TodoRowItem
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        // Pass the deleteTodo function from props to the TodoRowItem
                        deleteTodo={props.deleteTodo}
                    />
                ))}
            </tbody>
        </table>
    )
}

// Export the TodoTable component as the default export
export default TodoTable;