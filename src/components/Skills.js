import React, {useState} from "react";
import Css from "../assets/css.png";
import Github from "../assets/github.png";
import html from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import Next from "../assets/next.png";
import satellite from "../assets/satellite.jpg";
import Modal from "./Modals/Modal";

const Skills = () => {

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({
        imgSrc: "",
        title:"",
        text:"",
    })

    return (
        <div name="skills" style={{backgroundImage: `url(${satellite})`}} className="w-full min-h-screen md:h-screen bg-fixed bg-center bg-no-repeat bg-cover px-4 md:px-20 text-gray-300">
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className="text-gray-800">
                    <p className="text-4xl font-bold inline border-b-4 border-red-900">Experience</p>
                    <p className="py-4">// These are technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div onClick={e=>{setShowModal(true); setModalData({
                        imgSrc: html,
                        title:"HTML",
                        text:"HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)."})
                    }}
                         className='bg-gradient-to-r from-[#0a192c] to-[#0a191a] py-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
                        <img className="w-20 mx-auto" src={html} alt="HTML icon"/>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div onClick={e=>{setShowModal(true); setModalData({
                        imgSrc: Css,
                        title:"CSS",
                        text:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."})
                    }}
                        className='bg-gradient-to-r from-[#0a192c] to-[#0a191a] py-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
                        <img className="w-20 mx-auto" src={Css} alt="HTML icon"/>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div onClick={e=>{setShowModal(true); setModalData({
                        imgSrc: Javascript,
                        title:"JavaScript",
                        text:"JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles."})
                    }}
                         className='bg-gradient-to-r from-[#0a192c] to-[#0a191a] py-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
                        <img className="w-20 mx-auto" src={Javascript} alt="HTML icon"/>
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div onClick={e=>{setShowModal(true); setModalData({
                        imgSrc: ReactImg,
                        title:"React JS",
                        text:"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."})
                    }}
                         className='bg-gradient-to-r from-[#0a192c] to-[#0a191a] py-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
                        <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon"/>
                        <p className='my-4'>REACT</p>
                    </div>
                    <div onClick={e=>{setShowModal(true); setModalData({
                        imgSrc: Node,
                        title:"Node JS",
                        text:"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser."})
                    }}
                         className='bg-gradient-to-r from-[#0a192c] to-[#0a191a] py-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
                        <img className="w-20 mx-auto" src={Node} alt="HTML icon"/>
                        <p className='my-4'>NODE</p>
                    </div>
                    <div onClick={e=>{setShowModal(true); setModalData({
                        imgSrc: Next,
                        title:"Next JS",
                        text:"Next.js is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites."})
                    }}
                         className='bg-gradient-to-r from-[#0a192c] to-[#0a191a] py-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
                        <img className="w-20 mx-auto mt-8" src={Next} alt="HTML icon"/>
                        <p className='my-4'>NEXT</p>
                    </div>
                    <div onClick={e=>{setShowModal(true); setModalData({
                        imgSrc: Tailwind,
                        title:"Tailwind",
                        text:"Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file."})
                    }}
                         className='bg-gradient-to-r from-[#0a192c] to-[#0a191a] py-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
                        <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon"/>
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div onClick={e=>{setShowModal(true); setModalData({
                        imgSrc: Github,
                        title:"GitHub",
                        text:"GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features"})
                    }}
                         className='bg-gradient-to-r from-[#0a192c] to-[#0a191a] py-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
                        <img className="w-20 mx-auto" src={Github} alt="HTML icon"/>
                        <p className='my-4'>GITHUB</p>
                    </div>

                </div>
            </div>
            {showModal && (
                <Modal setShowModal={setShowModal} {...modalData}/>
            )}
        </div>
    )
}

export default Skills
