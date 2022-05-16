import React, {useState} from "react";
import SpaceFromEarth from "../assets/spaceFromEarth.jpg"
import {addDoc, collection} from "@firebase/firestore";
import {db} from "./firebase-config";


const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const messagesCollection = collection(db, "messages");

    const createMessage = async () => {
        const messageContent = {
            name,
            email,
            message: text,
        }
        await addDoc(messagesCollection, messageContent);
        setText("")
        setEmail("")
        setName("")
    }


    return (
        <div name="contact" style={{backgroundImage: `url(${SpaceFromEarth})`}} className="w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover flex justify-center items-center px-8 md:p-16">
            <form onSubmit={e=>{e.preventDefault(); createMessage()}} className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-red-600 text-gray-300">Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - vah.mats01@gmail.com</p>
                </div>
                <input onChange={e=>{
                    setName(e.target.value)
                }} className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input onChange={e=>{
                    setEmail(e.target.value)}} className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea onChange={e=>{
                    setText(e.target.value)}} className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact;