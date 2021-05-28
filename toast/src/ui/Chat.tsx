import React, { useEffect, useState } from "react";
import { useConn } from "../hooks/useConn";
import { ChatMessageModel } from "../lib/ChatModels";

import { ChatInput } from "../modules/chat/ChatInput";
import { ChatMessage } from "../modules/chat/ChatMessage";

let msgs = [];

export const Chat: React.FC = () => {
    const [messages, setMessages] = useState([] as ChatMessageModel[]);
    const [message, setMessage] = useState('');
  
    const conn = useConn();
    useEffect(() => {
        if (!conn) return;
        conn.sendCall('chat:fetch', {}).then((v: {messages: ChatMessageModel[]}) => setMessages(v.messages));
        conn.addListener('chat:new_message', (data: ChatMessageModel) => {
            setMessages([...msgs, data]);
        });
    }, [conn]);

    msgs = messages;


    let last = React.createRef<HTMLDivElement>();

    useEffect(() => {
        last.current.scrollIntoView();
    }, [messages]);

    const newMessage = () => {
        if (conn) conn.sendCall('chat:send', {message});
        setMessage('');
    };

    return (
        <div
        className={`
            flex flex-col justify-between items-center p-2
            sm:rounded-8 bg-primary-800 
            text-primary-100 font-bold text-2xl
            w-full h-full
            sm:w-600 sm:h-800
        `}
        >
            <div className="w-full h-full p-2 overflow-y-scroll overflow-x-hidden">
                {messages.length > 0 ? messages.map(v => <ChatMessage key={v.id} message={v} />) : (
                    <div className="text-primary-100 font-normal text-xl">
                        There is nothing here currently, chat something to fill this with messages!
                    </div>
                )}
                <div className="w-full h-px" ref={last}></div>
            </div>
            <ChatInput
                value={message}
                onChange={setMessage}
                onDone={newMessage}
            />
        </div>
    )
};