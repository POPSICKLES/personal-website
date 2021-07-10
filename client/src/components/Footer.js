import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiGmail, SiLinkedin, SiCodeforces, SiLeetcode } from 'react-icons/si'
import '../css/Footer.css'

const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='contact'>
        <hr/>
        <span id='contact-heading'><h5>Contact</h5></span>
        <div className='wrapper'>
            <button className='icon clickable'>
              <SiGmail />
              <div className='tooltiptext'>steven.fong@stonybrook.edu</div>
            </button>
            <a className='icon' href='https://www.linkedin.com/in/steven-fong-73803b193/'>
              <SiLinkedin/>
              <div className='tooltiptext'>LinkedIn</div>
            </a>
            <a className='icon' href='https://github.com/POPSICKLES'>
              <FaGithub />
              <div className='tooltiptext'>Github</div>
            </a>
            <a className='icon' href='https://codeforces.com/profile/popsickles'>
              <SiCodeforces />
              <br/>
              <div className='tooltiptext'>Codeforces</div>
            </a>
            <a className='icon' href='https://leetcode.com/popsickles'>
              <SiLeetcode />
              <div className='tooltiptext'>Leetcode</div>
            </a>
        </div>
      </div>
    </div >
  );
}
export default Footer;