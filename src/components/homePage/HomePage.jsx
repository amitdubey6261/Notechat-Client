import React from 'react'

import './homePage.css'

import image from '../../assets/images/myimg.png'

import Card from './cards/Card';

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
                <div className="category-navigation">
                    <div className="navigation-wrapper">
                        <div className="navigation-element"> <span className='navigation-text' id='heading'>NOTES</span> </div>
                        <div className="navigation-element"> <span className='navigation-text'>I Semester</span> </div>
                        <div className="navigation-element"> <span className='navigation-text'>II Semester</span> </div>
                        <div className="navigation-element"> <span className='navigation-text'>III Semester</span> </div>
                        <div className="navigation-element"> <span className='navigation-text'>IV Semester</span> </div>
                        <div className="navigation-element"> <span className='navigation-text'>V Semester</span> </div>
                        <div className="navigation-element"> <span className='navigation-text'>VI Semester</span> </div>
                        <div className="navigation-element"> <span className='navigation-text'>VII Semester</span> </div>
                        <div className="navigation-element"> <span className='navigation-text'>VIII Semester</span> </div>
                    </div>
                </div>
                <div className="elements-space">
                    <div ><span className="heading">COLLECTION</span></div>
                    <div ><span className="sub-heading">Everything you need for your fitness journey is right here</span></div>
                    <div className="card-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                </div>
            </main>
        </>
    )
}

export default HomePage;   