import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';
import Michael from './front.jpg';
import { SiUpwork } from 'react-icons/si';
import { isMobile } from 'react-device-detect';
import { useState } from 'react';
import EmailHover from './EmailHover';

export default function Home() {

    const [showEmail, setShowEmail] = useState(false);

    const socialLinks = [
        {
            title: "Email",
            icon: <AiOutlineMail size={60}/>,
            path: "mailto:mv3191@gmail.com"
        },
        {
            title: "LinkedIn",
            icon: <AiOutlineLinkedin size={60}/>,
            path: "https://www.linkedin.com/in/michael-vandenberg/"
        },
        {
            title: "Upwork",
            icon: <SiUpwork size={60}/>,
            path: 'https://www.upwork.com/freelancers/~01bf106353ca24b02f?viewMode=1'
        }
    ]

    const handleMouseOver = () => {
        setShowEmail(true);
    }
    
    const handleMouseLeave = () => {
        setShowEmail(false);
    }

    return (
        <div className="App">
            <h1 className="Michael">Michael Vandenberg</h1>
            <h3 className="Michael-Description">Content Writer & Editor</h3>
            <img src={Michael} className="Michael-Image" alt="Michael working." />
            <div className="Social-Links">
                {socialLinks.map((link, index) => (
                    <div className="Social-Flex">
                        <a href={link.path} onMouseOver={link.title == "Email" && !isMobile ? handleMouseOver : null} onMouseOut={link.title == "Email" && !isMobile ? handleMouseLeave : null} target="_blank" rel="noreferrer" key={index}>
                            <div className="Social-Link">
                                {link.icon}
                            </div>
                        </a>
                        <div className="Email-Box">
                            {showEmail && link.title === "Email" && <EmailHover />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ); 
}

