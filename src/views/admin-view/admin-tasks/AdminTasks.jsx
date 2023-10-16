import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    taskName: '',
    taskDescription: '',
    // Add other task properties here
  });

  useEffect(() => {
    // Fetch tasks from the backend when the component mounts
    axios.get('/api/tasks') // Replace with your API endpoint
      .then((response) => {
        setTasks(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleCreateTask = () => {
    axios.post('/api/tasks', newTask) // Replace with your API endpoint
      .then((response) => {
        // Handle success, maybe refresh the task list
        setTasks([...tasks, response.data]);
        setNewTask({
          taskName: '',
          taskDescription: '',
          // Reset other task properties as needed
        });
      })
      .catch((error) => {
        console.error('Error creating task:', error);
      });
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <h2>Create Task</h2>
        <form onSubmit={handleCreateTask}>
          <div>
            <label>Task Name</label>
            <input type="text" name="taskName" onChange={handleChange} value={newTask.taskName} />
          </div>
          <div>
            <label>Task Description</label>
            <textarea name="taskDescription" onChange={handleChange} value={newTask.taskDescription} />
          </div>
          {/* Add input fields for other task properties */}
          <button type="submit">Create Task</button>
        </form>
      </div>
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              {task.taskName}
              {/* Add buttons for updating and deleting tasks */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminTasks;
