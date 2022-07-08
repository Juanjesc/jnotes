import React from 'react'
import '../styles/AddNote.css'
import { useState } from 'react'


const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState(''); //texto del textarea
	const [inputText, setInputText] = useState(''); //texto del input
	const [classState, setClassState] = useState('note new');

	const handleChange = (event) => {
		setNoteText(event.target.value);
	}
	const handleChangeinput = (event) => {
		console.log(event.target.value);
		setInputText(event.target.value);
	}
	
	const handleClick = () => {
		if ((noteText.trim().length > 0) && (inputText.trim().length > 0)){ //comprueba que la nota tenga texto
			console.log(noteText)
			console.log(inputText)
			handleAddNote(inputText, noteText)
			setInputText('');
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
		setNoteText('');
		setInputText('');
	}
	return (
		<div className={classState}>
			<input 
				type="text" 
				placeholder='Título de la nota (max. 50 caracteres)'
				className='inputAddNote'
				value={inputText}
				onChange={handleChangeinput}
				maxLength={50}
			/>
			<textarea 
				placeholder='¿Qué quieres apuntar? Puedes arrastrar código'
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
