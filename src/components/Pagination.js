import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import '../styles/Pagination.css';
import NoteList from './NoteList';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';


const Pagination = (props) => {
  const { data, searchText, handleAddNote, handleDeleteNote } = props;
    
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 9;
  
  useEffect(() => {
  	// Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % data.length;
  // console.log(
  //   `User requested page number ${event.selected}, which is offset ${newOffset}`
  // );
  setItemOffset(newOffset);
  setPage(event.selected)
  };
  useEffect(()=>{

    if(searchText){
      setItemOffset(0);
      setPage(0);

    }
  },[searchText])

  return (
    <>
      <NoteList 
      
        notes={currentItems}
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
      />
      <div className="pagination-wrapper">

      <ReactPaginate
        breakLabel="..."
        nextLabel={<MdSkipNext 
          className='icons'
        />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        forcePage={page}
        previousLabel={<MdSkipPrevious 
          className='icons'
        />}
        renderOnZeroPageCount={null}
				containerClassName="pagination"
				pageLinkClassName="page-num"
				previousLinkClassName="page-num"
				nextLinkClassName="page-num"
				activeLinkClassName="activee boxx"
      />
      </div>
    </>
  );
}

export default Pagination;

