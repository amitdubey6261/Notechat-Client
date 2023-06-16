import React from 'react';
import './myNotes.css';
import MyNotesCards from './MyNotesCards';

import image from '../../assets/images/myimg2.png';

const MyNotes = () => {
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
            </main>
            <div className='mynotes-wrapper'>
                <div className="mynotes-wrapper-heading">MY NOTES</div>
                <div className="my-notes-cards-wrapper">
                    <MyNotesCards/>
                </div>
            </div>
        </>
    )
}

export default MyNotes