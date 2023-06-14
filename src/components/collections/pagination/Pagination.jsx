import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { AiOutlineStepBackward, AiOutlineStepForward} from 'react-icons/ai/index' ; 

import "./pagination.css";
import { getAllNotes } from "../../../Redux/local/GetAllNotes";

const Pagination = () => {
    const page = useSelector((state) => state.QueryFormReducer.page);
    const values = useSelector((state) => state.QueryFormReducer);
    
    const dispatch = useDispatch() ; 

    const dispatchPayload = () =>{
        dispatch(getAllNotes(values));
    }

    const stepForward = () =>{
        dispatch({
            type : "nextPage"
        }) ; 
        dispatchPayload();
    }

    const stepBackward = () =>{
        dispatch({
            type : "prevPage"
        }) ; 
        dispatchPayload();
    }

    return (
        <div className="pagination-wrapper">
            <div onClick={stepBackward} id="left-box" className="p-child"><AiOutlineStepBackward/></div>
            <div id="number-field" className="p-child">{page}</div>
            <div onClick={stepForward} id="right-box" className="p-child"><AiOutlineStepForward/></div>
        </div>
    );
};

export default Pagination;
