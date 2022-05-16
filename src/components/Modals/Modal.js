import React from "react";

const Modal = ({ setShowModal, imgSrc, title, text}) => {
    return (
        <div className={`absolute left-0 md:left-[20vw] z-10 top-[220vh]`}>
            <div>
                <div className="w-screen h-screen md:w-[60vw] md:h-[70vh] bg-gradient-to-r from-[#0a192c] to-[#0a191a] ">
                    <div className="w-full text-right p-8 " >
                        <span className="w-[10px] md:w-[20px] cursor-pointer p-4 h-[20px] hover:bg-gray-100 hover:text-gray-900 hover:rounded-lg text-2xl md:text-4xl" onClick={e=>setShowModal(false)}>X</span>
                    </div>
                    <div className="w-full justify-center text-center items-center">
                        <img className="w-24 md:w-32 mx-auto" src={imgSrc} alt="HTML icon"/>
                        <h3 className='md:my-4 text-xl md:text-3xl'>{title}</h3>
                        <p className="w-[80%] md:w-[60%] mx-auto mt-4 md:mt-16 text-lg md:text-2xl">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;