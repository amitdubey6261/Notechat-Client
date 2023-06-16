import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';

import image from '../../assets/images/myimg2.png';
import './Mycart.css';
import CartCard from './cartCards/CartCard';
import Aggregator from './aggregator/Aggregator';
import { getAllFromCart } from '../../Redux/local/getAllCart';

const Mycart = () => {
    const dispatch = useDispatch()
    const { status , res } = useSelector( state=>state.getAllFromCartReducer ) ; 
    const dstatus = useSelector(state=>state.deleteFromCartReducer.status )

    if( status ) res.data.cards.map(( e , idx)=>{
        console.log(e)
    })

    useEffect(()=>{
        dispatch( getAllFromCart() )
    } , [dstatus])

    return (
        <>
            <main>
                <div className="image-wrapper">
                    <img id='image' src={image} alt="not-found" />
                    <div className="image-overlay">
                        <div className="box-outer" id="colored"></div>
                        <div className="box-outer" id="text">
                            <div className="img-o-c-t "><span className='overlay-t' id="">CONNECT</span></div>
                            <div className="img-o-c-t"><h2 id=""> <span className='overlay-t-2'>CONNECT WITH AMIT </span></h2></div>
                            <div className="img-o-c-t"><span id="">Be in contact with full stack developer</span></div>
                        </div>
                    </div>
                </div>
                <div style={{fontSize : '4rem'}}className="heading">MY CART</div>
                <div className="myCartContainer">
                    <div className="Cards-container">
                        { status && res.data.cards.map((elem , idx)=>< CartCard data={elem} key={elem._id}/>)}
                    <div className="agregator-conatainer">
                        { status && <Aggregator bill={res.data.totalBill} data={res.data.cards}/> }
                    </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Mycart