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
                        <Link to="/editing">Editing</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
}