import React from 'react' ; 
import './cartCard.css' ; 

import img from '../../../assets/images/myimg3.png'

const CartCard = () => {
  return (
    <>
        <div className="Crad-wrapper">
            <div className="cart-card-left-section">
                <img className='cart-card-img' src={img} alt="not-found" />
            </div>
            <div className="cart-card-right-section">
                <div className="cart-card-details">
                    <div className="cc-details-text">price</div>
                    <div className="cc-details-text">collage</div>
                    <div className="cc-details-text">rating</div>
                    <div className="cc-details-text">type</div>
                </div>
            </div>
            <div className="clear-cc">X</div>
        </div>
    </>
  )
}

export default CartCard