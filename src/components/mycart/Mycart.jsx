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
    const dstatus = useSelector(state=>state.deleteFromCartReducer.status ) ; 
    const userLoadedStatus = useSelector( state=>state.loadUserReducer.status) ;
    const Userres = useSelector( state=>state.loadUserReducer.res ); 
    
    useEffect(()=>{
        if( userLoadedStatus ){
            const uid = Userres.data.user._id ; 
            dispatch( getAllFromCart({ uid }) );
        }
    } , [userLoadedStatus,dstatus])

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
                <h1 className='mycart-heading'>CART</h1>
                <div className="myCartContainer">
                    <div className="Cards-container">
                        {
                            status &&
                            res.data.cartProducts.map((elem , idx)=> <CartCard userid={Userres.data.user._id} data={elem} key={elem._id}/> )
                        }
                    <div className="agregator-conatainer">
                        {/* { status && <Aggregator bill={res.data.totalBill} data={res.data.cards}/> } */}
                        {
                            status && 
                            <Aggregator data={res} />
                        }
                    </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Mycart