import React from 'react'
import '../styles/AddNote.css'
import { useState } from 'react'


const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const [classState, setClassState] = useState('note new');
	//const limiteLetras = 200; //esto luego se quita
	const handleChange = (event) => {
		//if (limiteLetras - event.target.value.length >= 0){ //esta condición luego se quita, no interesa
			setNoteText(event.target.value);
		//}
	}
	
	const handleClick = () => {
		if (noteText.trim().length > 0){ //comprueba que la nota tenga texto
			handleAddNote(noteText)
			setNoteText('');
			document.querySelector('.note.new').style.display='none';
			document.querySelector('.notes-list').style.display='grid';
			
		}
		else{
			setClassState('note new shake-right')
			setTimeout(()=>{ //necesario para reproducir la animación siempre que demos click y no haya texto
				setClassState('note new')
			},500)
		}
	}
	const handleReturn = () => {
		document.querySelector('.note.new').style.display='none';
		document.querySelector('.notes-list').style.display='grid';
		
	}
	return (
		<div className={classState}>
			<textarea 
				placeholder='¿Qué has aprendido hoy?'
				value={noteText}
				onChange={handleChange}>
			</textarea>
			<div className='note-footer'>
				{/* <small>{limiteLetras - noteText.length} Remaining</small> */}
				<button className='save btn' onClick={handleClick}>Guardar</button>
				<button className='return btn' onClick={handleReturn}>Volver</button>
			</div>
		</div>
	)
}
export default AddNote;
