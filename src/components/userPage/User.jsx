import React from 'react'

import i20 from '../../assets/images/New folder/i20.webp';
import './userPage.css' ; 
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/global/Logout';
import { delteUser } from '../../Redux/local/deleteReducer';

const User = () => {

    const { status , res } = useSelector( state=>state.loadUserReducer );
    const dispatch = useDispatch() ; 

    const deleteAc = () =>{
        if( status ){
            dispatch(delteUser({uid : res.data.user._id})) ; 
        }
    }

    const updateAc = () =>{

    }

    const logoutAc = () =>{
        dispatch(logout());
    }

    return (
        <>
            <main>
                <div className="image-wrapper">
                    <img id='image' src={i20} alt="not-found" />
                    <div className="image-overlay">
                        <div className="box-outer" id="colored"></div>
                        <div className="box-outer" id="text">
                            <div className="img-o-c-t "><span className='overlay-t' id="">CONNECT</span></div>
                            <div className="img-o-c-t"><h2 id=""> <span className='overlay-t-2'>CONNECT WITH AMIT </span></h2></div>
                            <div className="img-o-c-t"><span id="">Be in contact with full stack developer</span></div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="user-container">
                <div className="user-wrapper">
                    <div className="user-section">
                        <div className="user-image">
                            <img className='user-page-profile' src={ status && res.data.user.image.url} alt="not-found" />
                        </div>
                            <div className="box">
                            <div className="user-info-wrap  ui-md">
                                <div className="user-info-text">{ status && res.data.user.name }</div>
                            </div>
                            <div className="user-info-wrap ui-md">
                                <div className="user-info-text">{ status && res.data.user.email }</div>
                            </div>
                            </div>
                        <div className="user-info-container">
                            <div className="user-info-wrap">
                                <div className="user-info-head">collage</div>
                                <div className="user-info-text">{ status && res.data.user.collage }</div>
                            </div>
                            <div className="user-info-wrap">
                                <div className="user-info-head">contact</div>
                                <div className="user-info-text">{ status && res.data.user.contact }</div>
                            </div>
                            <div className="user-info-wrap">
                                <div className="user-info-head">BatchOf</div>
                                <div className="user-info-text">{ status && res.data.user.year }</div>
                            </div>
                            <div className="user-info-wrap">
                                <div className="user-info-head">Gender</div>
                                <div className="user-info-text">{ status && res.data.user.gender }</div>
                            </div>
                            <div className="user-info-wrap">
                                <div className="user-info-head">City</div>
                                <div className="user-info-text">{ status && res.data.user.city }</div>
                            </div>
                            <div className="user-info-wrap">
                                <div className="user-info-head">Course</div>
                                <div className="user-info-text">{ status && res.data.user.course }</div>
                            </div>
                            <div className="user-info-wrap">
                                <div className="user-info-head">Upiid</div>
                                <div className="user-info-text">{ status && res.data.user.upiid }</div>
                            </div>
                            <div className="user-info-wrap">
                                <div className="user-info-head">Total Unlocked Products</div>
                                <div className="user-info-text">{  status && res.data.user.unlockedProducts.length }</div>
                            </div>
                            <div className="user-info-wrap">
                                <div className="user-info-head">Products In Your cart</div>
                                <div className="user-info-text">{ status && res.data.user.productsInCart.length }</div>
                            </div>
                        </div>
                        <div className="user-btns">
                            <button onClick={deleteAc} className='user-btn btn-1'>DELETE </button>
                            <button onClick={logoutAc} className='user-btn btn-2'>LOGOUT </button>
                            <button onClick={updateAc} className='user-btn btn-3'>UPDATE </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User