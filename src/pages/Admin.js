import React, {useEffect, useState} from "react";
import {collection, deleteDoc, doc, getDocs} from "@firebase/firestore";
import {db} from "../components/firebase-config";
import Mountain from "../assets/mountain.jpg"

const Admin = () => {
    const [messages, setMessages] = useState([]);
    const messagesCollection = collection(db, "messages");

    return (
        <div name="contact" style={{backgroundImage: `url(${Mountain})`}} className="w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover grid grid-cols-2 p-16 gap-4">
            <h2 className="col-span-full text-4xl text-gray-100">Messages...</h2>
                {messages.map((el,index)=> {
                    return (
                        <div className="bg-gray-400 col-span-1 flex flex-col items-center justify-around px-20 my-4" key={index}>
                            <h3 className="my-8 text-3xl">{el.name}</h3>
                            <span className="text-2xl">{el.email}</span>
                            <span className="my-8">{el.message}</span>
                            <div onClick={()=>{deleteMessage(el.id)}} className="border-gray-900 border-2 w-[50%] text-center hover:text-white hover:bg-gray-900 cursor-pointer mb-4">Delete message</div>
                        </div>
                    )
                })}
        </div>
    )
}

export default Admin;