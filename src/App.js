import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import './App.css';
import Search from "./components/Search";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import srcImage from './img/paper.png';
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');

  //Se encarga de mostrar la nota para escribir 
  const [showNote, setShowNote] = useState(true); //eslint-disable-line
  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem('notes-data'));
    if (saveNotes){
      setNotes(saveNotes);
    }
    
  }, []);
  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes))
  },[notes])

  const addNote = (inputText, text) => { //ese text, es el texto úncamente del textArea
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: inputText,
      text: text,
      date: date.toLocaleString()
      
    }
    const newNotes = [newNote, ...notes];
    setNotes(newNotes)
  }
  const deleteNote = (id) => {
    var response = window.confirm("¿Estás seguro de que deseas eliminar la nota?");
    if (response){
      const notesUpdated = notes.filter((note) => note.id !== id)
      setNotes(notesUpdated);
    }
  }
  const filterNotes = notes.filter((noteText) => noteText.title.toLowerCase().includes(searchText));
  
  return (
    <>

    <div className="container">
      <Header />
      <Search 
        handleSearchNote={setSearchText}
        setShowNote={setShowNote}
        />
 
      {notes.length===0 && 
        <div className="notes-empty-img">
          <img src={srcImage} alt="paperImg" />
        </div>
      }
      <Pagination 
        data={filterNotes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        searchText={searchText}
        />
      <Footer />
    </div>
    </>
  )
}

export default App;