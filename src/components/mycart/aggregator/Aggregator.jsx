import React, { useEffect, useState } from "react";

import "./aggregator.css";
import { useDispatch, useSelector } from "react-redux";
import { createRazorOrder } from "../../../Redux/local/RazorOrder";
import { backendUrl } from "../../../static";
import useRazorpay from "react-razorpay";
import { getProductDetails, getProductDetailsReducer } from "../../../Redux/local/GetProductDetails";

const Aggregator = ({data : {data}}) => {

  const paymentHandler = () => {

    var options = {
      key: "rzp_test_K0XFULT9LeGuaW", 
      amount: res.data.order.amount , 
      currency: "INR",
      name: "Notechat", 
      description: "Test Transaction",
      image: "http://res.cloudinary.com/daj3qkez6/image/upload/v1686748438/avatars/n7ddfyybgdcc1hjnvvpx.jpg",
      order_id: res.data.order.id , 
      callback_url: `${backendUrl()}/api/v1/payment/paymentVerification`,
      prefill: { 
        name: "Gaurav Kumar", 
        email: "gaurav.kumar@example.com",
        contact: "9000090000" 
      },
      notes: {
        user : "xd",
      },
      theme: {
        color: "#ff0000"
      }
    };

    const razor = new RazorPay(options);

    razor.on('payment.failed' , (e)=>{
      console.log('hiiiii , ' , e );
    })
    razor.open();
  }

  const dispatch = useDispatch();
  const RazorPay = useRazorpay(); 
  
  const checkout = () => {
    const totalBill = Number(data.totalBill ); 
    dispatch(createRazorOrder({ price : totalBill}));
  };
  
  const { status , res } = useSelector(state=>state.RazorOrderReducer) ; 

  if( status ) {
    paymentHandler() ;  
  }

  return (
    <>
      <div className="bill">
        <div className="heading">total</div>
        <div className="attribute">
          <div className="key">subtotal amount</div>
          <div className="val">{data.totalBill}</div>
        </div>
        <div className="attribute">
          <div className="key">platform charges</div>
          <div className="val">10</div>
        </div>
        <div className="attribute">
          <div className="key">Discount</div>
          <div className="val">NIL</div>
        </div>
        <hr className="cart-rule" />
        <div className="attribute">
          <div className="key">total amount</div>
          <div className="val">{data.totalBill}</div>
        </div>
        <button className="checlkout-btn" onClick={checkout} type="submit">
          CHECKOUT
        </button>
      </div>
    </>
  );
};

export default Aggregator;
