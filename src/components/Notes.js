import React, { useState } from 'react';
import './Notes.css';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNote = () => {
    if (title.trim() && content.trim()) {
      setNotes([...notes, { id: Date.now(), title, content, date: new Date().toLocaleDateString() }]);
      setTitle('');
      setContent('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="notes-container">
      <h2>📝 Study Notes</h2>
      
      <div className="note-input-group">
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title..."
          className="note-input"
        />
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your notes here..."
          className="note-textarea"
        />
        <button onClick={addNote} className="save-note-btn">💾 Save Note</button>
      </div>

      <div className="notes-list">
        {notes.length === 0 ? (
          <div className="empty-notes">
            <p>📔 No notes yet! Start taking notes!</p>
          </div>
        ) : (
          notes.map(note => (
            <div key={note.id} className="note-item">
              <h4>{note.title}</h4>
              <p>{note.content}</p>
              <small>{note.date}</small>
              <button onClick={() => deleteNote(note.id)} className="delete-note-btn">
                🗑️ Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}