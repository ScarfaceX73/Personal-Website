/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import "./dashboard.css";
import developerLogo from "../../resourses/animation_500_lbwl93ts.gif";
import quotation from "../../resourses/quotation.png";
import { SiJavascript, SiHtml5, SiReact, SiNodedotjs } from "react-icons/si";
import { ImCss3 } from "react-icons/im";
import { IoSparklesSharp } from "react-icons/io5";
import { TiHeartFullOutline } from "react-icons/ti";
import { RiFlashlightFill, RiExternalLinkLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai"
import chatApp from "../../resourses/projects/chatApp.png";
import moneyManager from "../../resourses/projects/money-ma.png";
import JobApp from "../../resourses/projects/JobsNow.png";
import JwtAuth from "../../resourses/projects/login.png";
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Dashboard = () => {
    const [hovered, setHovered] = useState(undefined)
    const projects = [{
        id: 0,
        img: chatApp,
        description: "An interactive one-on-one chat app with socket.io. Join a room and start chatting with your friends.",
        deployedUrl: "",
        githubUrl: ""
    },
    {
        id: 1,
        img: JobApp,
        description: "A web app for recruiters and aspirants. Recruiters can post a job for the aspirants to view.",
        deployedUrl: "",
        githubUrl: ""
    },
    {
        id: 2,
        img: moneyManager,
        description: "A financial support web app helps the client with their income & expense records.",
        deployedUrl: "",
        githubUrl: ""
    },
    {
        id: 3,
        img: JwtAuth,
        description: "Jwt Auth login, logout and register page.(forget password page is on development)",
        deployedUrl: "",
        githubUrl: ""
    }];

    const navigate = useNavigate()
    const handleContactMe = () => {
        navigate("/contact-me")
    };


    return (
        <div className='main-div'>
            <div className='dashboard'>
                <div className='intro-container'>
                    <div className='basic-intro'>
                        <h1 className='name'>I'm <span>Srinivasa</span>.</h1>
                        <h4 className='web-dev'>Front-end <strong>Web-developer</strong></h4>
                        <div>
                            <button className='hire-me' onClick={handleContactMe}>Hire Me</button>
                            <a className='resume' href='https://drive.google.com/file/d/1j3gZen5QXoyof-cRCpnviu8WMMxuupTe/view?usp=sharing' target='_blank'>Resume</a>
                        </div>
                    </div>
                    <div>
                        <img src={developerLogo} alt="developer-logo" className="developer-logo" />
                    </div>
                </div>
                <div className='skill-icons'>
                    <p>tech / tools i specialize:</p>
                    <SiHtml5 className='skills' />
                    <ImCss3 className='skills' />
                    <SiJavascript className='skills' />
                    <SiReact className='skills' />
                    <SiNodedotjs className='skills' />
                </div>
            </div>
            <div className='cards' id='about-container'>
                <div className='card1 card-box'>
                    <div className='sparkle'><IoSparklesSharp className='sparkle-icon' /></div>
                    <h3>Clean & Modern Style</h3>
                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                </div>
                <div className='card2 card-box'>
                    <div className='heart'><TiHeartFullOutline className='heart-icon' /></div>
                    <h3>Frontend Developer</h3>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                </div>
                <div className='card3 card-box'>
                    <div className='light'><RiFlashlightFill className='light-icon' /></div>
                    <h3>Fast & Optimized</h3>
                    <p>A fast and optimized web is what I desire the most using tools and advanced strategies.</p>
                </div>
            </div>
            <div className='quote-container'>
                <div>
                    <img src={quotation} alt="Quotation mark" /><span className='quote'><strong>Clean code</strong> is not written by following a set of <strong>rules</strong>, but from values that drive <strong>discipline</strong>.</span>
                </div>
            </div>
            <div className='modern-style' id='projects-container'>
                <div className='minimalist-design'>
                    <h6>My Recent Work</h6>
                    <h3>Experiences & Skills I have.</h3>
                    <p>Here are a few past projects I've worked on. Want to see more?Github</p>
                </div>
                <div className='projects'>
                    <div>
                        <div className='project-details'>
                            <h3>Languages I speak:</h3>
                            <p>I enjoy building User Interfaces with HTML, CSS, Javascript, ReactJS, NodeJS & MongoDB.</p>
                        </div>
                        <div className='project-details'>
                            <h3>Experiences I draw from:</h3>
                            <p>Currently, I'm focused on building modern, performant and maintainable code at Spark+ Technologies as an Intern.</p>
                        </div>
                        <div className='project-details'>
                            <h3>Proof of my skills:</h3>
                            <p>I was part of the full-stack development program by GUVI Geek Networks, IITM Research Park. </p>
                        </div>
                    </div>
                    <div className='project-grid'>
                        {projects.map((item) => {
                            return (
                                <>
                                    <div className='columns project-container' key={item.id} onMouseEnter={() => { setHovered(item.id) }} onMouseLeave={() => { setHovered(undefined) }}>
                                        <div className='image'>
                                            <img className='project-thumb' src={item.img} style={{ opacity: hovered === item.id ? 0.2 : 1 }} />
                                            {hovered === item.id && <div className="info-div" style={{ position: "absolute" }}>
                                                <p className='title'>{item.description}</p>
                                                <div>
                                                    <a className='button' href={item.deployedUrl}><RiExternalLinkLine /></a>
                                                    <a className='button' href={item.githubUrl}><AiFillGithub /></a>
                                                </div>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='detailed-ui'>
                <h6>Detail Oriented</h6>
                <h3>Lighthouse, Accessibility & Browser Support.</h3>
                <p>Awareness to ease of access, User Interface consistency, and improved User Experience.</p>
                <a href='#'>UI Consistency</a>
                <a href='#'>Lighthouse Score</a>
            </div>
            <div className='footer'>footer</div>
        </div>
    )
}

export default Dashboard;