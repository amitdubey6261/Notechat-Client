import React from 'react'
import {BsFillFileEarmarkArrowUpFill} from 'react-icons/bs/index'; 
const MyNotesCards = ({ data} ) => {
  return (
    <div className='my-notes-card-conatiner'>
      <BsFillFileEarmarkArrowUpFill className='my-notesCardIcon'/>
      <div className="mynotes-pid">{data.productid}</div>
    </div>
  )
}

export default MyNotesCards