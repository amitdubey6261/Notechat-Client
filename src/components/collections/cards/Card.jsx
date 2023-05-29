import React from 'react'
import './card.css'

import image from '../../../assets/images/img1.png';
import image2 from '../../../assets/images/myimg3.png';
import { useDispatch } from 'react-redux';

const Card = () => {
  const dispatch = useDispatch();

  const handleCardClick = () =>{
    dispatch({
      type : "toggleProduct"
    })
  }

  let arr = [];
  arr.push(image);
  arr.push(image2);

  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <img className='card-image' src={Math.random() < 0.5 ? arr[0] : arr[1]} alt="not found" />
        <div className="card-overlay">
          <p className='card-text'>This Is Devloped By Amit  </p>
        </div>
      </div>
    </>
  )
}

export default Card