import React, { useState } from "react";
import { BsSearch, BsFillPenFill } from "react-icons/bs/index";
import { FaRegStickyNote } from "react-icons/fa/index";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes } from "../../../Redux/local/GetAllNotes";

import "./queryform.css";

const QueryForm = () => {
    const dispatch = useDispatch();
    const values = useSelector(state => state.QueryFormReducer);

    const iconstyle = {
        width: "0.7cm",
        height: "0.7cm",
        position: "absolute",
        right: "5%",
    };

    const [fields, setfields] = useState({
        keyword: "",
        category: "notes",
        page: 1,
    });

    const handleFormChange = (e) => {
        setfields({ ...fields, [e.target.name]: e.target.value });
        if (e.target.name == "keyword") {
            dispatch({
                type: "setKeyWord",
                payload: fields.keyword,
            });
        }
        if (e.target.name == "category") {
            dispatch({
                type: "setCategory",
                payload: fields.category,
            });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        dispatch(getAllNotes(values));
    };

    return (
        <>
            <div className="query-form-wrapper">
                <form id="qform" action="" onSubmit={handleFormSubmit}>
                <span className="qf-note">Enter minimum 4 letters to search </span>
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
                        <select
                            name="category"
                            value={fields.category}
                            onChange={handleFormChange}
                            className="category"
                        >
                            <option value="notes">notes</option>
                            <option value="test paper">test paper</option>
                        </select>
                    </div>
                    <div className=" qf-childs submit">
                        <input
                            type="submit"
                            className="category qf-sbbtn"
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
