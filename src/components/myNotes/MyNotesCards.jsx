import React, { useEffect } from 'react'
import {BsFillFileEarmarkArrowUpFill} from 'react-icons/bs/index'; 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProductDetails } from '../../Redux/local/GetProductDetails';


const MyNotesCards = ({ data} ) => {
  const { status , res } = useSelector( state=>state.getProductDetailsReducer ) 

  const navigate = useNavigate() ; 
  const dispatch = useDispatch() ;

  const redirectToPDF = ()=>{

    dispatch(getProductDetails(data.productid));

    if( status ){
      dispatch({
        type : "setPdf" , 
        payload : res.data.notes.file.url , 
      }) ; 
      
      navigate("/pdf");
    }


  }

  return (
    <div onClick={ redirectToPDF } className='my-notes-card-conatiner'>
      <BsFillFileEarmarkArrowUpFill className='my-notesCardIcon'/>
      <div className="mynotes-pid">{data.productid}</div>
    </div>
  )
}

export default MyNotesCards