import React from "react";
import { ChatMessageModel } from "../../../lib/ChatModels";

interface ChatMessageProps {
    message: ChatMessageModel;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    return (
        <div className={`
        flex flex-col justify-between items-start py-2 rounded-8 bg-primary-800 
        text-primary-100 font-bold text-2xl
        w-full
        `}>
            {
                <div className="flex justify-center items-center rounded-8 bg-primary-800 text-primary-100 font-bold text-xl">
                    {message.from.displayName}
                </div>
            }
            <div className="flex justify-center items-center rounded-8 bg-primary-800 text-primary-100 font-normal text-xl">
                {message.message}
            </div>
        </div>
    )
};