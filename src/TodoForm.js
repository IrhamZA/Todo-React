import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState(" "); 

    const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    addTodo(inputValue);
    setInputValue("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="New Assignment..."
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;