import { useUsernameStore } from "../../stores/useUsernameStore";

export const Login: React.FC = () => {

    const setUsername = useUsernameStore(state => state.setUsername);

    return (
        <div className="flex flex-col p-6 justify-center items-center w-400 rounded-8 bg-primary-800">
            <div className="text-primary-100 font-bold text-3xl w-full">Welcome!</div>
            <div className="text-primary-100 font-normal text-2xl w-full">Fill a name in the box below to begin chatting</div>
            <input 
                className="w-full text-2xl mt-6 py-2 px-4 rounded-8 text-primary-100 placeholder-primary-300 focus:outline-none bg-primary-700"
                placeholder="Name"
                onKeyPress={e => e.key == 'Enter' && setUsername('')}
            />
            <button 
                className="w-full text-2xl mt-2 py-2 px-4 rounded-8 text-primary-100 md:hover:bg-accent-hover focus:outline-none bg-accent font-bold"
                onClick={_ => setUsername('')}
            >
                Done
            </button>
        </div>
    );
};