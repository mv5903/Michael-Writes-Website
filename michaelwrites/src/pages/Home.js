import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';
import { SiUpwork } from 'react-icons/si';

export default function Home() {

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

    return (
        <div className="App">
            <h1 className="Michael">Michael Vandenberg</h1>
            <h3 className="Michael-Description">Content Writer & Editor</h3>
            <div className="Social-Links">
                {socialLinks.map((link, index) => (
                    <a href={link.path} target="_blank" rel="noreferrer" key={index}>
                        <div className="Social-Link">
                            {link.icon}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    ); 
}