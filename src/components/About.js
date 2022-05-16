import React from "react";
import SpaceStation from "../assets/spaceStation.jpg"

const About = () => {
    return (
                <div name="about" style={{backgroundImage: `url(${SpaceStation})`}} className="w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover px-4 md:px-16 text-gray-300">
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                            <div className="sm:text-right pb-8 pl-4">
                                <p className="text-4xl font-bold inline border-b-4 border-red-600">About</p>
                            </div>

                        </div>
                        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                            <div className='sm:text-right text-4xl font-bold'>
                                <p>Hi. I'm Vahe, nice to meet you. Please take a look around.</p>
                            </div>
                            <div>
                                <p>I am working at Vectus, specializing in app development. I prefer full-stack development, in javascript.</p>
                            </div>
                        </div>
                    </div>

                </div>
    )
}

export default About;