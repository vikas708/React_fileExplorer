import React, { useState } from 'react';

function Todo() {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (editId) {
      // Update existing task
      const updatedTodos = todo.map((todoItem) =>
        todoItem.id === editId ? { ...todoItem, value: task } : todoItem
      );
      setTodo(updatedTodos);
      setEditId(null); // Reset edit mode
      setTask(''); // Clear input
      return; // Return early to avoid adding a new task
    }

    // Add a new task
    const newTodo = [...todo]; // Create a copy of the todo array
    newTodo.push({
      value: task,
      isCompleted: false,
      id: Date.now(),
    });
    setTodo(newTodo);
    setTask(''); // Clear input field
  };

  const handleRemove = (id) => {
    const filteredTodos = todo.filter((todoItem) => todoItem.id !== id);
    setTodo(filteredTodos);
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todo.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, isCompleted: !todoItem.isCompleted };
      }
      return todoItem;
    });
    setTodo(updatedTodos);
  };

  const enterClick = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const editTodo = (id) => {
    const todoItem = todo.find((item) => item.id === id);
    if (todoItem) {
      setTask(todoItem.value); // Set the task value to be edited in the input field
      setEditId(id); // Set editId to the task being edited
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onKeyDown={enterClick}
        onChange={handleChange}
      />
      <button onClick={addTask}>{editId ? 'Update Task' : 'Add Task'}</button>
      <div>
        {todo.map((todoItem) => (
          <div key={todoItem.id}>
            {todoItem.isCompleted ? (
              <span style={{ textDecoration: 'line-through' }}>
                {todoItem.value}
              </span>
            ) : (
              <span>{todoItem.value}</span>
            )}
            <span onClick={() => toggleCompleted(todoItem.id)}>Completed</span>
            <span onClick={() => handleRemove(todoItem.id)}>Remove</span>
            <span onClick={() => editTodo(todoItem.id)}>Edit</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
