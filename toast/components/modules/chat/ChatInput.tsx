import React from "react";

interface ChatInputProps {
    placeholder?: string;
    value?: string;
    error?: boolean;

    onChange?: (value: string) => unknown;
    onDone?: () => unknown;
}

export const ChatInput: React.FC<ChatInputProps> = ({ placeholder, value, onChange, onDone, error }) => {
    return (
        <div className="flex flex-row justify-between items-center w-full m-2 px-2">
            <input 
                className={`
                box-border text-base sm:text-2xl py-2 px-4 rounded-8 
                focus:outline-none 
                text-primary-100 placeholder-primary-300 bg-primary-700 w-full h-6.5
                ${
                    error ? 'border border-secondary' : ''
                }`}
                
                placeholder={placeholder ?? ''}
                value={value ?? ''}

                onChange={e => onChange?.(e.target.value)}
                onKeyPress={e => e.key == 'Enter' && !e.shiftKey && onDone?.()}
                autoFocus={true}
            />
            <button 
                className={`
                ml-2 sm:ml-4 h-6.5 w-6.5 sm:hidden p-2 rounded-8 md:hover:bg-accent-hover focus:outline-none bg-accent flex justify-center items-center
                text-primary-100 text-base sm:text-2xl font-bold
                `}
                onClick={_ => onDone?.()}
            >
                <svg viewBox='0 0 512 512' className="h-6.5 w-6.5">
                    <path fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100'/>
                </svg>
            </button>
        </div>
    )
};