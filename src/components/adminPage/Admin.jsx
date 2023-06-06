import React from 'react'

import './admin.css';

import image from '../../assets/images/myimg2.png'
import UserTable from './table/UserTable';

const Admin = () => {
    return (
        <>
            <main className='Admin-wrapper'>
                <div className="image-wrapper">
                    <img id='image' src={image} alt="not-found" />
                    <div className="image-overlay">
                        <div className="box-outer" id="colored"></div>
                        <div className="box-outer" id="text">
                            <div className="img-o-c-t "><span className='overlay-t' id="">NOTECHAT</span></div>
                            <div className="img-o-c-t"><h2 id=""> <span className='overlay-t-2'>FILE APPLICATION</span></h2></div>
                            <div className="img-o-c-t"><span id="">Share your content around the world</span></div>
                        </div>
                    </div>
                </div>
                <div className="admin-content-wrapper">
                    <div className="left-section"></div>
                    <div className="right-section">
                        <UserTable/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Admin