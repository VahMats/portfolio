import React from "react"
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Contact />
        </div>
    )
}

export default Portfolio;