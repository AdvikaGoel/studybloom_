import React, { useState } from 'react';
import './Tasks.css';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="tasks-container">
      <h2>✅ Study Tasks</h2>
      
      <div className="task-input-group">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new study task..."
          className="task-input"
        />
        <button onClick={addTask} className="add-task-btn">➕ Add</button>
      </div>

      <div className="tasks-list">
        {tasks.length === 0 ? (
          <div className="empty-tasks">
            <p>📝 No tasks yet! Add one to get started!</p>
          </div>
        ) : (
          tasks.map(task => (
            <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <input 
                type="checkbox" 
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="task-checkbox"
              />
              <span className="task-text">{task.text}</span>
              <button 
                onClick={() => deleteTask(task.id)}
                className="delete-btn"
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}