//import React, { useState } from 'react'
import {MdSearch, MdAdd} from 'react-icons/md'
import '../styles/Search.css'


const Search = ({ handleSearchNote, setShowNote }) => {
	// const [showNote, setShowNote] = useState(true)
	const handleShowAddNote = () => {
		/* En los estilos por defecto, addnotes tiene display none */
		if (setShowNote){ 
			let addNote = document.querySelector('.new');
			addNote.classList.add('wobble-horizontal-top')
			addNote.style.display='flex';
			document.querySelector('.notes-list').style.display='none';
			document.querySelector('.pagination').style.display='none'; 
			/* Línea 15 produce fallo por consola si no hay notas, ya que la paginación no estaría creada aún.
			En cuanto se crea 1 nota, la paginación se crea también, y el error ya no vuelve a aparecer. */
		}
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
