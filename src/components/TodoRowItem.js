// Define a functional component named TodoRowItem that takes props as its argument
function TodoRowItem(props) {
    // Return JSX that represents a table row with three cells: one for the row number, one for the description, and one for who it's assigned to
    // Add an onClick event handler to the tr element that calls the deleteTodo function passed in through props with the rowNumber as an argument
    return (
       <tr onClick={() => props.deleteTodo(props.rowNumber)}>
         <th scope="row">{props.rowNumber}</th>
         <td>{props.rowDescription}</td>
         <td>{props.rowAssigned}</td>
       </tr>
    )
   }
   
   // Export the TodoRowItem component as the default export
   export default TodoRowItem;