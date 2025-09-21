import React from 'react';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ padding: 12, marginBottom: 10, border: '1px solid #ddd', borderRadius: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h3 style={{ margin: 0, textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h3>
        {task.description && <p style={{ margin: '6px 0' }}>{task.description}</p>}
      </div>
      <div>
        <button onClick={() => onToggle(task._id, !task.completed)}>{task.completed ? 'Undo' : 'Done'}</button>
        <button onClick={() => onDelete(task._id)} style={{ marginLeft: 8 }}>Delete</button>
      </div>
    </li>
  );
}