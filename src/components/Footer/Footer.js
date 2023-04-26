import React, { useEffect } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <div data-aos="fade-up"
                    data-aos-duration="1000">
                    <InstagramIcon />
                    <TwitterIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                </div>
            </div>
            <p> &copy; 2023 Rushin Nemz</p>
        </div>
    )
}

export default Footer;
