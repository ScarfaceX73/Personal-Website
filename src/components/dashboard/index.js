/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import "./dashboard.css";
import developerLogo from "../../resourses/animation_500_lbwl93ts.gif";
import quotation from "../../resourses/quotation.png";
import { SiJavascript, SiHtml5, SiReact, SiNodedotjs, SiMongodb, SiSocketdotio, SiTailwindcss, SiExpress, SiFirebase } from "react-icons/si";
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
        deployedUrl: "https://6341a5b0a5687361d7946251--startling-croquembouche-2f8126.netlify.app/",
        githubUrl: "https://github.com/ScarfaceX73/socket-io-project-fe",
        tool1: SiSocketdotio,
        tool2: SiTailwindcss
    },
    {
        id: 1,
        img: JobApp,
        description: "A web app for recruiters and aspirants. Recruiters can post a job for the aspirants to view.",
        deployedUrl: "https://precious-duckanoo-a1ce08.netlify.app/",
        githubUrl: "https://github.com/ScarfaceX73/job-vacancies-fe",
        tool1: SiExpress,
        tool2: SiMongodb
    },
    {
        id: 2,
        img: moneyManager,
        description: "A financial support web app helps the client with their income & expense records.",
        deployedUrl: "https://6318dd807e6c05006f3ada29--sparkling-pika-f11577.netlify.app/",
        githubUrl: "https://github.com/ScarfaceX73/react-money-manager-fe",
        tool1: SiTailwindcss,
        tool2: SiFirebase
    },
    {
        id: 3,
        img: JwtAuth,
        description: "Jwt Auth login, logout and register page.(forget password page is on development)",
        deployedUrl: "https://github.com/ScarfaceX73/url-shortner",
        githubUrl: "https://github.com/ScarfaceX73/jwt-auth-be",
        tool1: SiExpress,
        tool2: SiMongodb

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
                    <p>Here are a few past projects I've worked on. Want to see more?<a href='https://github.com/ScarfaceX73' target="_blank">Github</a></p>
                </div>
                <div className='projects'>
                    <div className='experience'>
                        <div className='project-details'>
                            <h3>Languages I speak:</h3>
                            <p>I enjoy building User Interfaces with <span style={{ color: "#7733ff" }}>HTML, CSS, Javascript, ReactJS, NodeJS & MongoDB</span>.</p>
                        </div>
                        <div className='project-details'>
                            <h3>Experiences I draw from:</h3>
                            <p>Currently, I'm focused on building modern, performant and maintainable code at <a href='https://sparkplustech.com/' target='_blank'>Spark+ Technologies</a> as an Intern.</p>
                        </div>
                        <div className='project-details'>
                            <h3>Proof of my skills:</h3>
                            <p>I was part of the full-stack development program by <a href='https://www.guvi.in/' target='_blank'>GUVI Geek Networks, IITM Research Park</a>. </p>
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
                                                <div className='featured-tools'>
                                                    <SiJavascript style={{ margin: "5px 5px", color: "#6600eb", fontSize: "24px" }} />
                                                    <SiReact style={{ margin: "5px 5px", color: "#6600eb", fontSize: "24px" }} />
                                                    <SiNodedotjs style={{ margin: "5px 5px", color: "#6600eb", fontSize: "24px" }} />
                                                    <item.tool1 style={{ margin: "5px 5px", color: "#6600eb", fontSize: "24px" }} />
                                                    <item.tool2 style={{ margin: "5px 5px", color: "#6600eb", fontSize: "24px" }} />
                                                </div>
                                                <div className='url-links'>
                                                    <a className='button' href={item.deployedUrl} target="_blank"><RiExternalLinkLine /></a>
                                                    <a className='button' href={item.githubUrl} target="_blank"><AiFillGithub /></a>
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
                <h6>Start a project</h6>
                <h3>Interested in collaborating with me?</h3>
                <p>I’m always open to discussing product design work or partnership opportunities.</p>
                <a href='/contact-me'>Start a Conversation!</a>
            </div>
        </div>
    )
}

export default Dashboard;