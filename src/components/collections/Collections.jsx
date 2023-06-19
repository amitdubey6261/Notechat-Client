import React, { useEffect } from "react";

import "./Collections.css";

import i14 from '../../assets/images/New folder/i14.webp';

import Card from "./cards/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes } from "../../Redux/local/GetAllNotes";
import QueryForm from "./queryForm/QueryForm";
import Pagination from "./pagination/Pagination";

const Collections = () => {
    const dispatch = useDispatch();

    const { res, status } = useSelector((state) => state.getAllNotesReducer);

    useEffect(() => {
        dispatch(getAllNotes());
    }, []);

    return (
        <>
            <main style={{backgroundColor:'black'}}>
                <div className="image-wrapper">
                    <img id="image" src={i14} alt="not-found" />
                    <div className="image-overlay">
                        <div className="box-outer" id="colored"></div>
                        <div className="box-outer" id="text">
                            <div className="img-o-c-t ">
                                <span className="overlay-t" id="">
                                    NOTECHAT
                                </span>
                            </div>
                            <div className="img-o-c-t">
                                <h2 id="">
                                    {" "}
                                    <span className="overlay-t-2">FILE APPLICATION</span>
                                </h2>
                            </div>
                            <div className="img-o-c-t">
                                <span id="">Share your content around the world</span>
                            </div>
                        </div>
                    </div>
                </div>
                    <QueryForm/>
                <div className="elements-space">
                    <div className="collection-heading">
                        COLLECTION
                    </div>
                    <div className="collection-quote">
                            Everything you need for your learning journey is right here
                    </div>
                    <div className="card-container">
                        {status ? (
                            res.data.notes.map((elem, idx) => (
                                <Card key={elem._id} props={elem} />
                            ))
                        ) : (
                            <p> NO DATA </p>
                        )}
                    </div>
                    <Pagination/>
                </div>
            </main>
        </>
    );
};

export default Collections;
