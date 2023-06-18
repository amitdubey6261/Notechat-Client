import React from "react";
import "./infoheader.css";
import { Link } from "react-router-dom";
import { FaBoxes, FaPen, FaUserCircle } from "react-icons/fa";
import { BsFillBookFill, BsCartFill } from "react-icons/bs";

import img from '../../assets/images/myimg2.png';
import { useSelector } from "react-redux";

const InfoHeader = () => {

    const iconStyle = {
        width: '1cm',
        height: '1cm',
        fill: 'black'
    }

    const { status, res } = useSelector(state => state.loadUserReducer)

    if (status) console.log()

    return (
        <>
            <div
                className="info-header-wrapper">
                <div className="info-head-child image-contatiner">
                    <img id="info-user-image" src={status ? res.data.user.image.url : img} alt="not-found" />
                </div>
                <div className="info-head-child info-your-profile">
                    <Link to="/user">
                        < FaUserCircle style={iconStyle} />

                    </Link>
                </div>
                <div className="info-head-child info-your-orders">
                    {/* <Link to="/orders"> ---------------------------------------------------------------------? */}
                    <Link to="/myNotes">
                        < BsFillBookFill style={iconStyle} />

                    </Link>
                </div>
                <div className="info-head-child info-create-product">
                    <Link to="/create">
                        < FaPen style={iconStyle} />

                    </Link>
                </div>
                <div className="info-head-child info-your-profile">
                    <Link to="/cart">
                        < BsCartFill style={iconStyle} />

                    </Link>
                </div>
            </div>
        </>
    );
};

export default InfoHeader;
