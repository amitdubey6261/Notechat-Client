import React, { useState } from "react";
import { BsSearch, BsFillPenFill } from "react-icons/bs/index";
import { FaRegStickyNote } from "react-icons/fa/index";
import "./queryform.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes } from "../../../Redux/local/GetAllNotes";
import { QueryFormReducer } from "../../../Redux/local/QueryForm";

const QueryForm = () => {
    const dispatch = useDispatch();
    const values = useSelector(state=>state.QueryFormReducer) ; 

    const iconstyle = {
        width: "1cm",
        height: "1cm",
        position: "absolute",
        right: "5%",
    };

    const [fields , setfields] = useState({
        keyword : "" , 
        category : 'notes' , 
        page : 1 , 
    })

    const handleFormChange = (e) =>{
        console.log( e.target.value )
        setfields({ ...fields , [e.target.name] : e.target.value });
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();

        dispatch({
            type : "setKeyWord" , 
            payload : fields.keyword , 
        })

        dispatch({
            type : "setCategory" , 
            payload : fields.category , 
        })

        dispatch(getAllNotes(values));
    }

    return (
        <>
            <div className="query-form-wrapper">
                <form id="qform" action="" onSubmit={handleFormSubmit}>
                    <div className="qf-childs search-wrapper">
                        <BsSearch style={iconstyle} />
                        <input
                            id="searchbar"
                            type="text"
                            name="keyword"
                            placeholder="Search By Subject Name"
                            onChange={handleFormChange}
                            value={fields.keyword}
                        />
                    </div>
                    <div className="qf-childs other-filters">
                        <FaRegStickyNote style={iconstyle} />
                        <select name="category" value={fields.category} onChange={handleFormChange} className="category" >
                            <option value="notes">notes</option>
                            <option value="test paper">test paper</option>
                        </select>
                    </div>
                    <div className=" qf-childs submit">
                        <input
                            type="submit"
                            className="category"
                            id="qform-submit"
                            value="Submit"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default QueryForm;