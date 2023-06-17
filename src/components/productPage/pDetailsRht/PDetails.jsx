import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertInCart } from "../../../Redux/local/InsertCart";

const PDetails = ({res}) => {
    const dispatch = useDispatch() ; 
    const status = useSelector(state=>state.loadUserReducer.status) ; 
    const userRes = useSelector(state=>state.loadUserReducer.res) ; 

    const addTocart = () =>{    
        if( status ){
            const payload = {} ; 
            payload.uid = userRes.data.user._id ; 
            payload.pid = res.data.notes._id ;
            payload.price = res.data.notes.price ; 
            payload.subject = res.data.notes.subject ; 
            payload.collage =  res.data.notes.collage ;
            payload.rating =  res.data.notes.rating ;
            console.log( payload );
            dispatch(insertInCart(payload));
        }
    }
    return (
        <>
            <div className="pDetails-wrapper">
                <div className="up-box">
                    <div className="PDetails" id="Pdetail1">
                        { res.data.notes.subject} 
                    </div>
                    <div className="PDetails" id="Pdetail2">
                        { res.data.notes.collage }
                    </div>
                    <div className="PDetails" id="Pdetail3">
                        <div className="smaill-headings">Facilty
                        <span className="pdspans"> { res.data.notes.faculty } </span>
                        </div>
                    </div>
                    <div className="PDetails" id="Pdetail3">
                        <div className="smaill-headings">Price
                        <span className="pdspans"> { res.data.notes.price } rs </span>
                        </div>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <button onClick={addTocart} className="buy-notes-btn">Add to Cart</button>
                </div>
                <div className="btm-box">
                    <div className="PDetails" id="Pdetail5">
                        <div className="smaill-headings">batch of
                        <span className="pdspans"> { res.data.notes.batchof } </span>
                        </div>
                    </div>
                    <div className="PDetails" id="Pdetail6">
                        Product Description
                    </div>
                    <div className="PDetails" id="Pdetail6-1">
                        {res.data.notes.aboutpdf}
                    </div>
                    <div className="PDetails" id="Pdetail7">
                        index
                    </div>
                    <div className="PDetails" id="Pdetail7-1">
                        { res.data.notes.index }
                    </div>
                    <div className="PDetails" id="Pdetail8">
                        <div className="smaill-headings">time
                        <span className="pdspans"> { res.data.notes.time } </span>
                        </div>
                    </div>
                    <div className="PDetails" id="Pdetail9">
                        Rating
                    </div>
                    <div className="PDetails" id="Pdetail10">
                        Review
                    </div>
                    <div className="PDetails" id="Pdetail11">
                        <div className="smaill-headings">CreatedBy <span className="pdspans">{res.data.notes.createdby}</span></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PDetails;
