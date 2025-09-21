import React, { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title: title.trim(), description: description.trim() });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: 16 }}>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Task title" style={{ padding:8, width:'60%', marginRight:8 }} />
      <input value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description (optional)" style={{ padding:8, width:'30%', marginRight:8 }} />
      <button type="submit" style={{ padding:8 }}>Add</button>
    </form>
  );
}