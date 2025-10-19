import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
        <span onClick={() => toggleComplete(todo.id)}>
            {todo.text}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;