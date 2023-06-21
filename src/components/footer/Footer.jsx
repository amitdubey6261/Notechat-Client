import React from 'react'

import {AiFillLinkedin, AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineReddit, AiOutlineTwitter} from 'react-icons/ai/index' ; 


import './footer.css'
const Footer = () => {

  const iconStyle = {
    width : '1cm',
    height : '1cm',
    fill : 'white'
}

  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="footer-left-section">
            <div className="logo-image">NOTECHAT</div>
          </div>
          <div className="footer-right-section">
            <div className="foter-right-up">
              <div className="social-handles">
                <div className="socialHandle-3"><a href="https://github.com/amitdubey6261"><AiOutlineGithub style={iconStyle}/></a></div>
                <div className="socialHandle-4"><a href="https://www.linkedin.com/in/amit-dubey-2339b6204/"><AiFillLinkedin style={iconStyle}/></a></div>
                <div className="socialHandle-1"><a href="https://twitter.com/Dubey6261"><AiOutlineTwitter style={iconStyle}/></a></div>
                <div className="socialHandle-2"><a href="https://www.instagram.com/warship6261/"><AiOutlineInstagram style={iconStyle}/></a></div>
              </div>
            </div>
            <div className="foter-right-dwn">
              <div className="footer-text">Notechat Powered By Amit Dubey</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer