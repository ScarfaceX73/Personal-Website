import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BsPlayFill } from "react-icons/bs"
import "./header.css";

const Header = () => {
    return (
        <header>
            <h1 className='logo'>S<span>ri</span></h1>
            <nav>
                <ul className='nav-links'>
                    <li><a href='#projects-container' className="projectsWrapper"><div>
                        Work
                    </div>
                        <BsPlayFill style={{ marginTop: "2px" }} /></a></li>
                    <li><a href='#about-container'>About</a></li>
                    <li><a href='/contact-me'>Contact</a></li>
                </ul>
            </nav>
            <div className='menubar-right'>
                <a href='https://github.com/ScarfaceX73' target="_blank" className='icon github' rel="noreferrer"><AiFillGithub className='github-icon' /></a>
                <a href='https://www.linkedin.com/in/srinivasa-durai' target="_blank" className='icon linkdin' rel="noreferrer"><AiFillLinkedin className='linkdin-icon' /></a>
            </div>
        </header>
    )
}

export default Header;