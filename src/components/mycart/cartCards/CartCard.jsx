import React, { useEffect } from "react";
import "./cartCard.css";

import img from "../../../assets/images/myimg3.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../../Redux/local/deleteFromCart";

const CartCard = ({data , userid}) => {
    const dispatch = useDispatch() ; 

    const deleteCard =() =>{
        const payload = {} ; 
        payload.uid = userid ;
        payload.pid =  data.productid ; 
        dispatch( deleteFromCart(payload) ) ; 
    }

    return (
        <>
            <div className="Crad-wrapper">
                <div className="cart-card-left-section">
                    <img className="cart-card-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2-mj_C17GsKX44Jlk0mSvK5wFZRq0OBRo1f7vAkdeg&usqp=CAU&ec=48600112'} alt="not-found" />
                </div>
                <div className="cart-card-right-section">
                    <div className="cart-card-details">
                        <div className="cc-details-text">
                            <div className="cc-details-attribute">price</div>
                            <div className="cc-details-val">{ data.price }</div>
                        </div>
                        <div className="cc-details-text">
                            <div className="cc-details-attribute">subject</div>
                            <div className="cc-details-val">{ data.subject}</div>
                        </div>
                        <div className="cc-details-text">
                            <div className="cc-details-attribute">collage</div>
                            <div className="cc-details-val">{ data.collage}</div>
                        </div>
                        <div className="cc-details-text">
                            <div className="cc-details-attribute">rating</div>
                                <div className="cc-details-val">{ data.rating}</div>
                        </div>
                    </div>
                </div>
                <div onClick={deleteCard} className="clear-cc">X</div>
            </div>
        </>
    );
};

export default CartCard;
