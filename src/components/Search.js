//import React, { useState } from 'react'
import {MdSearch, MdAdd} from 'react-icons/md'
import '../styles/Search.css'


const Search = ({ handleSearchNote, setShowNote }) => {
	// const [showNote, setShowNote] = useState(true)
	const handleShowAddNote = () => {
		/* En los estilos por defecto, addnotes tiene display none */
		if (setShowNote){ 
			let addNote = document.querySelector('.new');
			let img_initial = document.querySelector('.notes-empty-img');

			if (img_initial != null){ //esta condición es para evitar un error
				img_initial.style.display='none'
			}
			addNote.classList.add('wobble-horizontal-top')
			addNote.style.display='flex';
			document.querySelector('.inputAddNote').focus();
			document.querySelector('.notes-list').style.display='none';

			if (document.querySelector('.pagination') != null){
				document.querySelector('.pagination').style.display='none'; 

			}
			
		}
	}
  return (
		<div className='search'>
			<div className="input-wrapper boxInput">
				<MdSearch 
					className='icon search-icon'
				/> 
				<input 
					type="text" 
					placeholder='What note are you looking for?'
					onChange={(event) => handleSearchNote(event.target.value) }
				/>
			</div>
			<div className="btn-wrapper-search boxBTN">
				<button 
					className='btn-addNote'
					onClick={handleShowAddNote}>
					New Note
				</button>
				<MdAdd 
					className='icon add-icon'
				/>
			</div>
		</div>
  )
}

export default Search
