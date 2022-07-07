import React from 'react'
import Note from './Note'
import '../styles/NoteList.css'
import AddNote from './AddNote'

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (

	<>
		<div className="add-notes-wrapper">
			<AddNote 
				handleAddNote={handleAddNote}		
			/>
		</div>
		<div className='notes-list'>
				{notes.map((note => 
					<Note 
						key={note.id}
						id={note.id}
						title={note.title}
						text={note.text}
						date={note.date}
						handleDeleteNote={handleDeleteNote}
					/>
				))}     
		</div>
	</>
  )
}

export default NoteList;
