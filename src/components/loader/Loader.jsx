import React from 'react' ; 
import './loader.css' ; 

const Loader = ({text}) => {
    return (
        <>
            <div className="loader-container">
                <div className="loader-outer-box">
                    <div className="ltop"></div>
                    <div className="loader-inner-box">
                        <span className='text-animation' style={{fontFamily: "Bebas Neue" , fontSize:"2rem"}}>{text}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader