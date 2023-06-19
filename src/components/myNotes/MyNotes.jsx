import React from 'react';
import './myNotes.css';
import MyNotesCards from './MyNotesCards';

import i14 from '../../assets/images/New folder/i14.webp';
import { useSelector } from 'react-redux';


const MyNotes = () => {
    const { status, res } = useSelector(state => state.loadUserReducer);
    return (
        <>
            <main>
                <div className="image-wrapper">
                    <img id='image' src={i14} alt="not-found" />
                    <div className="image-overlay">
                        <div className="box-outer" id="colored"></div>
                        <div className="box-outer" id="text">
                            <div className="img-o-c-t "><span className='overlay-t' id="">UNLOCKED</span></div>
                            <div className="img-o-c-t"><h2 id=""> <span className='overlay-t-2'>LEARNING CONTENT</span></h2></div>
                            <div className="img-o-c-t"><span id="">find your ulocked notes and test papers</span></div>
                        </div>
                    </div>
                </div>
            </main>
            <div className='mynotes-wrapper'>
                    <h1 className='m-n-heading'>unlocked notes</h1>
                    <div className="my-notes-cards-wrapper">
                        {status && res.data.user.unlockedProducts.map((elem, idx) => {
                            return <MyNotesCards key={idx} data={elem}  />
                        })}
                    </div>
                    <div className="my-note-quote">
                        <div className="my-note-quote-1">MANY DISCIPLINES, ONE ETHOS</div>
                        <div className="my-note-quote-2">Be a part of a community that never settles for any less</div>
                    </div>
            </div>
        </>
    )
}

export default MyNotes