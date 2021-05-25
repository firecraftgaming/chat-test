import React, { useEffect, useState } from "react";
import { ChatMessageModel } from "../../lib/ChatModels";
import { ChatInput } from "../modules/chat/ChatInput";
import { ChatMessage } from "../modules/chat/ChatMessage";
import { useUsernameStore } from "../stores/useUsernameStore";

let newMsg = false;

export const Chat: React.FC = () => {
    const username = useUsernameStore((state: any) => state.username);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    let last = React.createRef<HTMLDivElement>();

    useEffect(() => {
        if (newMsg) last.current.scrollIntoView();
        newMsg = false;
    });

    const newMessage = (msg) => {
        messages.push(msg);

        setMessage('');
        setMessages(messages);

        newMsg = true;
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
                onDone={() => {
                    let msg = {
                        from: {
                            id: 'test-id',
                            username: 'test-username',
                            displayName: username
                        },
                        id: Math.random().toString(),
                        message: message
                    };
                    newMessage(msg);
                }}
            />
        </div>
    )
};