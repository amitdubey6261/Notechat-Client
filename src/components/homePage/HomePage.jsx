import React from 'react'

import './homePage.css'

import image from '../../assets/images/myimg.png'

const HomePage = () => {
    return (
        <>
            <main>
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
            </main>
        </>
    )
}

export default HomePage;   