import React from "react";

const Modal = ({ setShowModal, imgSrc, title, text}) => {
    console.log(imgSrc)
    return (
        <div className={`absolute left-[20vw] z-10 top-[220vh]`}>
            <div>
                <div className="w-[60vw] h-[70vh] bg-gradient-to-r from-[#0a192c] to-[#0a191a] ">
                    <div className="w-full text-right p-8 " >
                        <span className="w-[20px] cursor-pointer p-4 h-[20px] hover:bg-gray-100 hover:text-gray-900 hover:rounded-lg text-4xl" onClick={e=>setShowModal(false)}>X</span>
                    </div>
                    <div className="w-full justify-center text-center items-center">
                        <img className="w-32 mx-auto" src={imgSrc} alt="HTML icon"/>
                        <h3 className='my-4 text-3xl'>{title}</h3>
                        <p className="w-[60%] mx-auto mt-16 text-2xl">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;