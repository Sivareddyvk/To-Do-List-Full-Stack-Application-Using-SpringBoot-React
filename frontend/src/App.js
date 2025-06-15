import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/todos');
      setTasks(res.data);
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    try {
      const res = await axios.post('http://localhost:8080/api/todos', {
        title: newTask,
        completed: false,
      });
      setTasks([...tasks, res.data]);
      setNewTask('');
    } catch (err) {
      console.error('Failed to add task:', err);
    }
  };

  const toggleComplete = async (id) => {
    const task = tasks.find((t) => t.id === id);
    try {
      await axios.put(`http://localhost:8080/api/todos/${id}`, {
        ...task,
        completed: !task.completed,
      });
      fetchTasks();
    } catch (err) {
      console.error('Failed to update task:', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/todos/${id}`);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) {
      console.error('Failed to delete task:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">To-Do List</h2>

        <div className="mb-3 d-flex">
          <input
              type="text"
              className="form-control me-2"
              placeholder="Enter a task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTask}>Add</button>
        </div>

        <div className="row">
          {tasks.map((task) => (
              <div key={task.id} className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="card shadow-sm">
                  <div className="card-body d-flex justify-content-between align-items-center">
                <span className={task.completed ? 'text-decoration-line-through' : ''}>
                  {task.title}
                </span>
                    <div>
                      <button className="btn btn-sm btn-success me-2" onClick={() => toggleComplete(task.id)}>✓</button>
                      <button className="btn btn-sm btn-danger" onClick={() => deleteTask(task.id)}>✕</button>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}

export default App;
