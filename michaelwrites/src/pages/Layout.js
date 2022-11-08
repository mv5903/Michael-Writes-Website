import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <nav>
                <ul className="navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/writing">Writing</Link>
                    </li>
                    <li>
                        <a href="/files/writing/resume.pdf" target="_blank">Resume</a>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
}