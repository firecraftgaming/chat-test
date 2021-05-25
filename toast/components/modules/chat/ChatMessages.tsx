import React from "react";
import { ChatMessageModel } from "../../../lib/ChatModels";

interface ChatMessageProps {
    message: ChatMessageModel;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    return (
        <div className="w-full h-full p-2 overflow-y-scroll overflow-x-hidden">
            {messages.map(v => <ChatMessage key={v.id} message={v} />)}
            <div className="w-full h-4" ref={last}></div>
        </div>
    )
};