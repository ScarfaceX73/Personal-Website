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
import video from "../../resourses/projects/video.png";
import pizza from "../../resourses/projects/pizza.png";
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Dashboard = () => {
    const [hovered, setHovered] = useState(undefined)
    const projects = [{
        id: 0,
        img: chatApp,
        description: "An interactive one-on-one chat app with socket.io. Join a room and start chatting with your friends.",
        deployedUrl: "https://startling-croquembouche.netlify.app",
        githubUrl: "https://github.com/ScarfaceX73/socket-io-project-fe",
        tool1: SiSocketdotio,
        tool2: SiTailwindcss
    },
    {
        id: 1,
        img: video,
        description: "A Video Chat app with webRTC. Distance is just a number, Join your friend from across the world now.",
        deployedUrl: "https://jovial-snickerdoodle-ba9fd1.netlify.app",
        githubUrl: "https://github.com/ScarfaceX73/video-chat-fe",
        tool1: SiExpress,
        tool2: SiSocketdotio
    },
    {
        id: 2,
        img: moneyManager,
        description: "A financial support web app helps the client with their income & expense records.",
        deployedUrl: "https://prismatic-sunflower-f951cc.netlify.app",
        githubUrl: "https://github.com/ScarfaceX73/Money-manager",
        tool1: SiTailwindcss,
        tool2: SiFirebase
    },
    {
        id: 3,
        img: pizza,
        description: "A Pizza delivery app to help the clients order and customize their favorite Pizza.",
        deployedUrl: "https://brilliant-malasada-8dfefd.netlify.app",
        githubUrl: "https://github.com/ScarfaceX73/Pizza-delivery",
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
                            <a className='resume' href='https://drive.google.com/file/d/1HAHHWjOMm_PdzCu8bQU_wreA7np0ZU_y/view?usp=sharing' target='_blank' rel="noreferrer">Resume</a>
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
                    <h3>Works & Experiences I have.</h3>
                    <p>Here are a few past projects I've worked on. Want to see more?<a href='https://github.com/ScarfaceX73' target="_blank" rel="noreferrer">Github</a></p>
                </div>
                <div className='projects'>
                    <div className='experience'>
                        <div className='project-details'>
                            <h3>Experiences I draw from:</h3>
                            <p>Currently, I'm focused on building modern, performant and maintainable code at <a href='https://sparkplustech.com/' target='_blank' rel="noreferrer">Spark+ Technologies</a> as an Intern.</p>
                        </div>
                        <div className='project-details'>
                            <h3>Proof of my skills:</h3>
                            <p>I was part of the full-stack development program by <a href='https://www.guvi.in/' target='_blank' rel="noreferrer">GUVI Geek Networks, IITM Research Park</a>. </p>
                        </div>
                        <div className='project-details'>
                            <h3>A small achievement of mine:</h3>
                            <p>Participated in Tamil Nadu's <span style={{ color: "#7733ff" }}>Corepathi</span> and won 12.5 Lakhs INR. Answered 12 out of 15 questions.</p>
                        </div>
                    </div>
                    <div className='project-grid'>
                        {projects.map((item) => {
                            return (
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
                                                <a className='button' href={item.deployedUrl} target="_blank" rel="noreferrer"><RiExternalLinkLine /></a>
                                                <a className='button' href={item.githubUrl} target="_blank" rel="noreferrer"><AiFillGithub /></a>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='detailed-ui'>
                <h6>My Skills</h6>
                <h3>The Languages I Speak!</h3>
                <p>I enjoy building User Interfaces with <span style={{ color: "#ff7dac" }}>HTML, CSS, Javascript, ReactJS, NodeJS & MongoDB</span>.
                    I'm also well versed in React-frameworks like Redux, React-router, Formik and other.    </p>

            </div>
            <div className='footer'>
                <div>
                    <h6>Start a project</h6>
                    <h3>Interested in collaborating with me?</h3>
                    <p>I'm always open to discussing product design work or partnership opportunities.</p>
                    <a onClick={handleContactMe} style={{ cursor: "pointer" }}>Start a Conversation!</a>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;