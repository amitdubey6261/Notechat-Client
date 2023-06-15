import React from "react";

const PDetails = ({res}) => {
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
                    <button className="buy-notes-btn">buy now</button>
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
                        <div className="smaill-headings">CreatedBy <span className="pdspans"> Amit Dubey</span></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PDetails;
