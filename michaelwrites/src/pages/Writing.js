import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function Writing() {

    const [advetorial, setAdvetorial] = useState(false);
    const [seo, setSeo] = useState(false);
    const [sports, setSports] = useState(false);
    const [news, setNews] = useState(false);

    const sections = [
        {
            title: "Advertorials",
            description: "Published editorials specifically designed to sell the audience on a customer's product or service. All of these are aimed at establishing an emotional connection with the reader.",
            visible: advetorial,
            setVisible: setAdvetorial,
            articles: [
                {
                    title: "Susskind & Almallah",
                    path: "/files/writing/advertorial/Susskind & Almallah.pdf"
                },
                {
                    title: "The Learning Corp",
                    path: "/files/writing/advertorial/The Learning Corp.pdf"
                },
                {
                    title: "THe MAX Challenge of Howell",
                    path: "/files/writing/advertorial/THe MAX Challenge of Howell.pdf"
                },
                {
                    title: "Diaz Tree Service",
                    path: "/files/writing/advertorial/Diaz Tree Service.pdf"
                },
                {
                    title: "Restaurant Treasure Book",
                    path: "/files/writing/advertorial/Restaurant Treasure Book.pdf"
                }

            ]
        },
        {
            title: "Online Content and Blogs",
            description: "SEO and other blog content created on various topics. Included below are list posts, how-to's, comparison pieces, and basic question-and-answer articles. ",
            visible: seo,
            setVisible: setSeo,
            articles: [
                {
                    title: "9 Best Hotels For Business Travelers With Kids",
                    path: "/files/writing/seo/9 Best Hotels For Business Travelers With Kids.pdf"
                },
                {
                    title: "17 Travel Apps Perfect For Business Trips",
                    path: "/files/writing/seo/X Travel Apps Perfect For Business Trips.pdf"
                },
                {
                    title: "Tips for Building Mental Toughness in Baseball",
                    path: "/files/writing/seo/Tips for Building Mental Toughness in Baseball.pdf"
                },
                {
                    title: "How to Secure a Toilet Flange in 8 Steps",
                    path: "/files/writing/seo/How to Secure a Toilet Flange in 8 Steps.pdf"
                },
                {
                    title: "How to Throw A Cornhole Bag",
                    path: "/files/writing/seo/How to Throw A Cornhole Bag.pdf"
                },
                {
                    title: "Why Does My Trimmer Line Keep Breaking",
                    path: "/files/writing/seo/Why Does My Trimmer Line Keep Breaking.pdf"
                },
                {
                    title: "Rapid Prototyping vs 3D Printing",
                    path: "/files/writing/seo/Rapid Prototyping vs 3D Printing.pdf"
                },
                {
                    title: "Coinbase vs Coinbase Pro- What's the Difference",
                    path: "/files/writing/seo/Coinbase vs Coinbase Pro- What's the Difference.pdf"
                }
            ]
        },
        {
            title: "Sports",
            description: "Articles highlighting unique sports and athletes. These are from a sports column I kept in the About Our Town newspapers.",
            visible: sports,
            setVisible: setSports,
            articles: [
                {
                    title: "Ice Fishing",
                    path: "/files/writing/sports/Ice Fishing.pdf"
                },
                {
                    title: "Plainfield Curling Club",
                    path: "/files/writing/sports/Plainfield Curling Club.pdf"
                },
                {
                    title: "Stumpy's Hatchet House",
                    path: "/files/writing/sports/Stumpy's Hatchet House.pdf"
                },
                {
                    title: "Rutgers Water Polo",
                    path: "/files/writing/sports/Rutgers Water Polo.pdf"
                }
            ]
        },
        {
            title: "News",
            description: "Standard AP Style news articles",
            visible: news,
            setVisible: setNews,
            articles: [
                {
                    title: "Bill Moore",
                    path: "/files/writing/news/Bill Moore.pdf"
                },
                {
                    title: "Jon McBride",
                    path: "/files/writing/news/Jon McBride Article.pdf"
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