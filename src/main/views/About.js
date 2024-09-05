import React, { useState, useEffect } from 'react';

const Notepad = () => {
  const [note, setNote] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);

  // Load notes from local storage when the component mounts
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setSavedNotes(storedNotes);
    }
  }, []);

  const setLocalStorageValue = (e) => {
    localStorage.setItem('notes', JSON.stringify(e));

  }

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const saveNote = () => {
    if (note.trim()) {
      setSavedNotes([...savedNotes, note]);
      setNote('');
      setLocalStorageValue([...savedNotes, note]);

    }
  };

  const deleteNote = (index) => {
    const newNotes = savedNotes.filter((_, i) => i !== index);
    setSavedNotes(newNotes);
    setLocalStorageValue(newNotes);

  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Notepad</h2>
      <textarea
        value={note}
        onChange={handleNoteChange}
        rows="4"
        cols="50"
        placeholder="Write your note here..."
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={saveNote} style={{ marginRight: '10px' }}>
        Save Note
      </button>
      <h3>Saved Notes</h3>
      <ul>
        {savedNotes.map((savedNote, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {savedNote}
            <button
              onClick={() => deleteNote(index)}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notepad;
