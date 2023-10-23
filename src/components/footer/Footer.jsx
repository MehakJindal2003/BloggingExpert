import React from 'react'
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <>
        <footer className='boxItems'>
            <div className="container flex">
                <p>Open Blogging Platform for everyone READ. UPLOAD. EXPLORE.</p>
                <div className="social">
                  <a href="https://www.facebook.com/" target="_blank">
                    <BsFacebook className='icon' color='black'/>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank">
                    <RiInstagramFill className='icon' color='black'/>
                  </a>
                  <a href="https://www.twitter.com/" target="_blank">
                    <AiFillTwitterCircle className='icon' color='black'/>
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <AiFillLinkedin className='icon' color='black'/>
                  </a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer