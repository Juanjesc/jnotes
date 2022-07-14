import React from 'react'
import '../styles/AddNote.css'
import { useState } from 'react'


const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState(''); //texto del textarea
	const [inputText, setInputText] = useState(''); //texto del input
	const [classState, setClassState] = useState('new');
	var inputTextStyle = document.querySelector('.inputAddNote');


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
			document.querySelector('.new').style.display='none';
			document.querySelector('.notes-list').style.display='grid';
			inputTextStyle.style.border='none';
			if (document.querySelector('.pagination') != null){
				document.querySelector('.pagination').style.display='flex';

			}
		}
		else{
			setClassState('new shake-right')
			setTimeout(()=>{ //necesario para reproducir la animación siempre que demos click y no haya texto
				setClassState('new')
			},500)
			if ((inputText.trim().length <= 0)){
				inputTextStyle.style.border='1px solid red'
			}
			else{
				inputTextStyle.style.border='none'
			}
		}
	}
	const handleReturn = () => {
		setNoteText('');
		setInputText('');
		document.querySelector('.new').style.display='none';
		document.querySelector('.notes-list').style.display='grid';
		inputTextStyle.style.border='none';
		if (document.querySelector('.pagination') != null){
			document.querySelector('.pagination').style.display='flex';
		}
		if (document.querySelector('.notes-empty-img') !=null){

			document.querySelector('.notes-empty-img').style.display='flex';
		}
	}
	return (
		<div className={classState}>
			<input 
				type="text" 
				placeholder='Title of the note (max. 50 characters)'
				className='inputAddNote'
				value={inputText}
				onChange={handleChangeinput}
				maxLength={50}
			/>
			<textarea 
				placeholder='What do you want to note? You can also drag code'
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
