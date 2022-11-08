import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function Writing() {

    const [advetorial, setAdvetorial] = useState(false);
    const [seo, setSeo] = useState(false);
    const [sports, setSports] = useState(false);
    const [news, setNews] = useState(false);

    const sections = [
        {
            title: "Advertorial",
            description: "Advertorial is a combination of advertisement and editorial. It is a form of paid content that is written by a journalist and published in a newspaper, magazine, or online publication. Advertorial is a form of native advertising.",
            visible: advetorial,
            setVisible: setAdvetorial,
            articles: [
                {
                    title: "Resume",
                    path: "/files/writing/advertorial/resume.pdf"
                },
                {
                    title: "Cover Letter",
                    path: "/files/writing/advertorial/resume.pdf"
                },
            ]
        },
        {
            title: "SEO (Search Engine Optimization)",
            description: "Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO refers to the improvement of unpaid results (known as \"natural\" or \"organic\" results) and excludes direct traffic/visitors and the purchase of paid placement.",
            visible: seo,
            setVisible: setSeo,
            articles: [
                {
                    title: "Resume",
                    path: "/files/writing/seo/resume.pdf"
                }
            ]
        },
        {
            title: "Sports",
            description: "Sports are competitive physical or mental activities which, through casual or organised participation, aim to use, maintain or improve physical ability and skills while providing enjoyment to participants, and in some cases, entertainment for spectators. Sports can be played by individuals or teams and can be either casual or organised.",
            visible: sports,
            setVisible: setSports,
            articles: [
                {
                    title: "Resume",
                    path: "/files/writing/sports/resume.pdf"
                }
            ]
        },
        {
            title: "News",
            description: "News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events. It is also used as a platform to manufacture opinion for the population.",
            visible: news,
            setVisible: setNews,
            articles: [
                {
                    title: "Resume",
                    path: "/files/writing/news/resume.pdf"
                }
            ]
        },
    ]

    return (
        <div className="App">
            <h1>Writing</h1>
            <p>Click on a writing type to learn more and browse samples.</p>
            <div className="Writing-Sections">
                {sections.map((section, index) => (
                    <div>
                        {/* Title of each section */}
                        <div>
                            <h2 className="Writing-Section-Title" onClick={() => {
                            section.setVisible(!section.visible);
                            }}>{section.title} <span className="Writing-Section-Icon">{section.visible ? <IoIosArrowUp /> : <IoIosArrowDown />}</span></h2>
                        </div>

                        {/* Collapsable Portion of Each Section */}
                        <div className={`${'Writing-Section'} ${section.visible ? 'Writing-Section-Visible' : 'Writing-Section-Hidden'}`} key={index}>
                            <p className="Writing-Section-Description">{section.description}</p>
                            <div className="Writing-Section-Articles">
                                <h4>Samples:</h4>
                                <ul>
                                    {section.articles.map((article, index) => (
                                        <li><a className="Writing-Section-Article" href={article.path} target="_blank" rel="noopener" key={index}>{article.title}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ); 
}