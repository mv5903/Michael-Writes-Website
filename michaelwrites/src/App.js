import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Writing from "./pages/Writing";
import Editing from "./pages/Editing";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="writing" element={<Writing />} />
                    <Route path="editing" element={<Editing />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
