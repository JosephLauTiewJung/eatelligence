import { useState } from 'react';
import SurpriseCard from './components/SurpriseCard';
import MOCK_SPOT from './data/mock_spots.js';
import BottomNavigationBar from "../../components/BottomNavigationBar.jsx";
import { Gift } from 'lucide-react';

const SurpriseMePage = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    const handleBoxClick = () => {
        setIsShaking(true);
        setTimeout(() => {
            setIsOpened(true);
        }, 800);
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center px-5 pt-8 pb-28 overflow-x-hidden">
            {/* Header */}
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-black text-white tracking-tight">
                    {isOpened ? 'Your Surprise!' : 'Surprise Me!'}
                </h1>
                <p className="text-zinc-500 mt-2 text-sm">
                    {isOpened ? 'Here is your perfect pick' : 'Tap the box to reveal your meal'}
                </p>
            </header>

            <main className="w-full max-w-md flex flex-col items-center justify-center flex-1">
                {!isOpened ? (
                    <div
                        onClick={handleBoxClick}
                        className={`cursor-pointer transition-transform duration-100 ${isShaking ? 'animate-shake' : 'hover:scale-105'}`}
                    >
                        <div className="w-52 h-52 bg-gradient-to-br from-orange-500 to-red-600 rounded-[2.5rem] shadow-[0_0_50px_rgba(249,115,22,0.4)] flex items-center justify-center border-4 border-white/20 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            <Gift className="w-24 h-24 text-white drop-shadow-xl" />
                        </div>
                        <p className="mt-6 text-gray-400 text-base font-medium text-center animate-pulse">Tap to open!</p>
                    </div>
                ) : (
                    <div className="animate-in zoom-in fade-in duration-500 w-full">
                        <SurpriseCard data={MOCK_SPOT} />
                    </div>
                )}
            </main>

            <BottomNavigationBar />

            {/* Decorative Blur */}
            <div className="fixed -top-20 -left-20 w-72 h-72 bg-[#D19156]/10 blur-[100px] pointer-events-none rounded-full" />
            <div className="fixed top-1/2 -right-20 w-56 h-56 bg-purple-500/10 blur-[80px] pointer-events-none rounded-full" />
        </div>
    );
};

export default SurpriseMePage;
