import React, { useState, useEffect } from 'react';
import '../css/notesStyle.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Card, Container, Button } from 'react-bootstrap';
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
    <Container fluid className='bg'>
    {/* <div style={{ padding: '20px' }}> */}

      <Card className='cardborder'>
       <Card.Body className='cdBody'>
       <h2 className='head'>Notepad</h2>
    
    <FloatingLabel controlId="floatingTextarea2" label="Write your note here...">
      <Form.Control
        as="textarea"
        value={note}
        onChange={handleNoteChange} rows="4" cols="50" placeholder="Write your note here..." style={{ height: '100px'}}/>
    </FloatingLabel>
    <Button onClick={saveNote} className='btnnn'>
    Save Note
    </Button>
  
    <h3 className='head' style={{textAlign:'center', marginTop:'20px'}}>Saved Notes</h3>
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
       </Card.Body>
      </Card>
     
    {/* </div> */}
    </Container>
  );
};

export default Notepad;



