import { MdDeleteForever, MdRemoveRedEye } from 'react-icons/md';
import '../styles/Note.css'
import React, { useState } from 'react';
import Modal from './Modal';

const Note = ({ id, text, date, handleDeleteNote, title }) => {  
  const [active, setActive] = useState(false);
	const toggle = () =>{
		setActive(!active);
	}
  return (
    <div className="note">
      <h3 className='title' >{title}</h3>
      <span className='description'>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <div className="icons-wrapper">
          <MdRemoveRedEye 
            className='icons'
            onClick={toggle}
          />
          <MdDeleteForever 
            className='icons'
            onClick={() => handleDeleteNote(id)}
          />
        </div>
      </div>
      <Modal active={active} toggle={toggle}>
        <div className="modal-container">
          <h3 className='title'>{title}</h3>
          <textarea 
            className='description'
            value={text}
            readOnly
          > 
          </textarea>
          {/* <span className='description'>{text}</span> */}
          <div className="note-footer">
            <small>{date}</small>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Note;
