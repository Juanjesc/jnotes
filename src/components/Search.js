import React, { useState } from 'react'
import {MdSearch, MdAdd} from 'react-icons/md'
import '../styles/Search.css'


const Search = ({ handleSearchNote }) => {
	const [showNote, setShowNote] = useState(true)
	const handleShowAddNote = () => {
		/* En los estilos por defecto, addnotes tiene display none */
		if (!showNote){ //Si es false oculta la nota
			console.log(showNote)
			document.querySelector('.note.new').style.display='none';
			document.querySelector('.notes-list').style.display='grid';
		}
		else{ //Si es true muestra la nota
			console.log(showNote)
			document.querySelector('.note.new').style.display='flex';
			document.querySelector('.notes-list').style.display='none';
			
		}
		setShowNote(!showNote)
	}
  return (
		<div className='search'>
			<div className="input-wrapper">
				<MdSearch 
					className='icon search-icon'
				/> 
				<input 
					type="text" 
					placeholder='¿Qué nota estás buscando?'
					onChange={(event) => handleSearchNote(event.target.value) }
				/>
			</div>
			<div className="btn-wrapper-search">
				<button 
					className='btn-addNote'
					onClick={handleShowAddNote}>
					Nueva Nota
				</button>
				<MdAdd 
					className='icon add-icon'
				/>
			</div>
		</div>
  )
}

export default Search
