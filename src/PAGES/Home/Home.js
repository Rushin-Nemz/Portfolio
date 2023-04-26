import React, { useEffect } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Home.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import mainimg from "./mainimg.png"

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='home'>
            <div className="about">
                <div className="profilepic">
                    <img src={mainimg} alt="profile pic" />
                </div>
                <div data-aos="zoom-in-up">
                    <h2>Hi, My Name is Rushin</h2>
                </div>
                <div className="prompt">
                    <div data-aos="flip-left">
                        <p>A Web Developer with a passion for learning and creating new things. I consider my self a responsible
                            and hard working person.
                        </p></div>
                    <LinkedInIcon />
                    <EmailIcon />
                    <GitHubIcon />
                </div>
            </div>
            <div className="skills">
                <div data-aos="zoom-out-down">
                    <h1>Skills</h1></div>
                <ol className='list'>
                    <li className='item'>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <h2>Front End</h2>
                            <p>ReactJS, Redux, HTML, CSS, Bootstrap, WordPress </p>
                        </div>
                    </li>
                    <li className='item'>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <h2>Back End</h2>
                            <p>NodeJS, ExpressJS, MongoDB</p>
                        </div>
                    </li>
                    <li className='item'>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <h2> Programming Languages</h2>
                            <p> Python, C , C++ , JavaScript [Beginner]</p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home
