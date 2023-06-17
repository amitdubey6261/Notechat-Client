import React from 'react'

import './productPage.css'
import { useDispatch, useSelector } from 'react-redux'
import ThumbsPP from './thumbnailsPP/thumbsPP';
import PDetails from './pDetailsRht/PDetails';

const ProductPage = () => {
    const dispatch = useDispatch() ; 
    const { status , res } = useSelector(state=>state.getProductDetailsReducer) ;  
    return (
        <>
            <h1 className='pp-page-heading'>PRODUCT VIEW</h1>
            <div className="Product-page-container">
                <div className="pp-left-section">
                    { status && <ThumbsPP res={res}/>}
                </div>
                <div className="pp-right-section">
                    { status && <PDetails res={res}/>}
                </div>
            </div>
        </>
    )
}

export default ProductPage ; 