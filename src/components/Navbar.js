import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";
import Logo from "../assets/logo.svg"
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-20">
            <div>
                <img src={Logo} alt="Logo" style={{width: '50px'}}/>
            </div>
            <div className="hidden md:flex ">
                <ul className="hidden md:flex text-2xl">
                    <li>
                        <Link className="navElement" to='home' smooth={true} duration={500}>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="navElement" to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="navElement" to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link  className="navElement" to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div className="flex flex-col fixed top-[35%] left-0 hidden md:block">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] lg:hover:ml-[-10px] lg:duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/vahe-nersisyan-265040226/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] lg:hover:ml-[-10px] lg:duration-300 bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/VahMats">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] lg:hover:ml-[-10px] lg:duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.facebook.com/vahe.nersisyan.31/">
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
