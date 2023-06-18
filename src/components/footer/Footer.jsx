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
                <div className="socialHandle-1"><AiOutlineTwitter style={iconStyle}/></div>
                <div className="socialHandle-2"><AiOutlineInstagram style={iconStyle}/></div>
                <div className="socialHandle-3"><AiOutlineGithub style={iconStyle}/></div>
                <div className="socialHandle-4"><AiFillLinkedin style={iconStyle}/></div>
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