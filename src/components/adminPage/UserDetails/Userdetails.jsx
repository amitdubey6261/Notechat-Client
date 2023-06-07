import React from "react";
import "./userdetails.css";
import img from '../../../assets/images/myimg2.png'; 

const Userdetails = () => {
    return (
        <>
            <div className="user-details-wrapper">
                <span className="user-details-close">X</span>

                <div className="user-inner-wrapper">
                    <div className="u-sec user-section-left">
                        <div className="basic-detils">
                            <ul  className="list">
                                <li className="u-details">Name  NAM PATA ILAKA </li>
                                <li className="u-details">Email PATA ILAKA </li>
                                <li className="u-details">Location PATA ILAKA </li>
                                <li className="u-details">Address NAM PATA ILAKA </li>
                                <li className="u-details">Role NAM PATA ILAKA </li>
                            </ul>
                        </div>
                    </div>
                    <div className="u-sec user-section-right">
                        <ul className="list" >
                            <li className="u-details"> NAM PATA ILAKA </li>
                            <li className="u-details"> NAM PATA ILAKA </li>
                            <li className="u-details"> NAM PATA ILAKA </li>
                            <li className="u-details"> NAM PATA ILAKA </li>
                            <li className="u-details"> NAM PATA ILAKA </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Userdetails;
