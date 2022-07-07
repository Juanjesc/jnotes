import { MdDeleteForever } from 'react-icons/md';
import '../styles/Note.css'
const Note = ({ id, text, date, handleDeleteNote, title }) => {  
  return (
    <div className="note">
        <h3 className='title'>{title}</h3>
        <span className='description'>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever 
              className='delete-icon'
              onClick={() => handleDeleteNote(id)}

            />
        </div>
    </div>
  )
}

export default Note;
