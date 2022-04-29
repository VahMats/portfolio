import React from "react";
import Modal from "./Modal";

const HtmlModal = ({ setShowHtmlModal, showHtmlModal }) => {
    if (!showHtmlModal) {return null}
    return (
    <div className={`w-screen h-screen bg-white fixed `}>
        <div>
            <div className="w-[20px] h-[20px]" onClick={setShowHtmlModal(false)}>X</div>
            <p>HTML try to make modal</p>
        </div>
    </div>
    )
}

export default HtmlModal;
