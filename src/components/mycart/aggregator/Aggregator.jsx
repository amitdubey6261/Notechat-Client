import React from "react";

import "./aggregator.css";

const Aggregator = () => {
  return (
    <>
    <div className="bill">
      <div className="heading">
        total
      </div>
      <div className="attribute">
        <div className="key">subtotal amount</div>
        <div className="val">1000</div>
      </div>
      <div className="attribute">
        <div className="key">platform charges</div>
        <div className="val">1000</div>
      </div>
      <div className="attribute">
        <div className="key">Discount</div>
        <div className="val">NIL</div>
      </div>
      <hr className="cart-rule" />
      <div className="attribute">
        <div className="key">total amount</div>
        <div className="val">1000</div>
      </div>
      <button className="checlkout-btn" type="submit">CHECKOUT</button>
    </div>
    </>
  );
};

export default Aggregator;
