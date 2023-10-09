import React, { useState, useEffect } from 'react';


const Notes = ({ apiEndpoint, userId }) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    fetch(`${apiEndpoint}/notes?userId=${userId}`)
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error("Error fetching notes:", error));
  }, [apiEndpoint, userId]);

  const handleAddNote = () => {
    fetch(`${apiEndpoint}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: newNote,
        userId: userId
      })
    })
    .then(response => response.json())
    .then(data => {
      setNotes(prevNotes => [...prevNotes, data]);
      setNewNote("");
    })
    .catch(error => console.error("Error adding note:", error));
  };

  return (
    <div>
      {}
      <textarea 
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Write your note here..."
      />
      <button onClick={handleAddNote}>Add Note</button>

      {}
      {notes.length === 0 ? (
        <p>No Notes Yet!</p>
      ) : (
        <ul>
          {notes.map(note => (
            <li key={note._id}>
              {note.text}
              <br />
              {new Date(note.createdAt).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notes;