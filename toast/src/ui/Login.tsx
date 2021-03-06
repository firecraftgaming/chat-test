import { useRouter } from "next/router";
import React, { useState } from "react";
import { useConn } from "../hooks/useConn";
import { useUsernameStore } from "../stores/useUsernameStore";

export const Login: React.FC = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);

    const setUsername = useUsernameStore((state: any) => state.setUsername);
    const conn = useConn();

    const router = useRouter();

    const onChange = e => {
        setError(false);
        setName(e.target.value);
    }

    const onDone = async () => {
        if (!name) return setError(true);
        if (!conn) return window.location.reload();
        setUsername((await conn.sendCall('user:login', {name}) as {username: string}).username);
        router.push('/');
    };

    return (
        <div className="flex flex-col p-6 justify-center items-center w-400 rounded-8 bg-primary-800">
            <div className="text-primary-100 font-bold text-3xl w-full">Welcome!</div>
            <div className="text-primary-100 font-normal text-2xl w-full">Fill a name in the box below to begin chatting</div>
            <input 
                className={`w-full text-2xl mt-6 py-2 px-4 rounded-8 text-primary-100 placeholder-primary-300 focus:outline-none bg-primary-700 ${error ? 'border border-secondary' : ''}`}
                placeholder="Name"
                value={name}
                onChange={e => onChange(e)}
                onKeyPress={e => e.key == 'Enter' && onDone()}
            />
            <button 
                className="w-full text-2xl mt-2 py-2 px-4 rounded-8 text-primary-100 md:hover:bg-accent-hover focus:outline-none bg-accent font-bold"
                onClick={_ => onDone()}
            >
                Done
            </button>
        </div>
    );
};