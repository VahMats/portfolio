import React from "react";
import {Link} from "react-scroll"
import {HiArrowNarrowRight} from "react-icons/hi";
import Nasa from "../assets/nasa.jpg"

const Home = () => {
    return (
        <div style={{backgroundImage: `url(${Nasa})`}} name="home" className="w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover">
            <div className="max-w-[1000px] mx-auto px-8 md:px-16 flex flex-col justify-center h-full">
                <p className="text-red-600 ">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Vahe Nersisyan</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full stack Developer</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]" >I’m a full-stack developer specializing in building exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.</p>
                <div>
                    <Link to='skills' smooth={true} duration={500}>
                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600 duration-200">View Skills
                        <span  className="group-hover:rotate-90 duration-200">
                            <HiArrowNarrowRight className="ml-4"/>
                        </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;