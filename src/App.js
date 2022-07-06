import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import NoteList from "./components/NoteList";
import './App.css';
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false); //cambia el template de la app
  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem('notes-data'));
    if (saveNotes){
      setNotes(saveNotes);
    }
    
  }, []);
  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes))
  },[notes])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleString()
      
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }
  const deleteNote = (id) => {
    var response = window.confirm("¿Estás seguro de que deseas eliminar la nota?");
    if (response){
      const notesUpdated = notes.filter((note) => note.id !== id)
      setNotes(notesUpdated);
    }
  }
  return (
    <div className={darkMode ? 'dark-mode' : ''}>

    <div className="container">
      <Header 
        handleToggleTheme={setDarkMode}
      />
      <Search handleSearchNote={setSearchText}/>
      <NoteList 
        notes={notes.filter((noteText) => 
          noteText.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
    </div>
  )
}

export default App;