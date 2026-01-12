import BottomNavigationBar from "../../components/BottomNavigationBar.jsx";
import Header from "./components/Header.jsx";
import NutritionChart from './components/NutritionChart.jsx';
import SpendingChart from './components/SpendingChart.jsx';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

// Mood options with friendlier, natural phrasing
const MOOD_OPTIONS = [
    { emoji: '😊', mood: 'Happy', phrase: "I'm feeling good!" },
    { emoji: '😫', mood: 'Stressed', phrase: "Rough day..." },
    { emoji: '😴', mood: 'Tired', phrase: "Low energy" },
    { emoji: '🤤', mood: 'Hungry', phrase: "Starving!" },
    { emoji: '🥳', mood: 'Celebrate', phrase: "Let's celebrate!" },
];

const HomePage = () => {
    const navigate = useNavigate();
    const [selectedMood, setSelectedMood] = useState(null);

    useEffect(() => {
        const saved = sessionStorage.getItem('mood');
        if (saved) {
            const moodData = JSON.parse(saved);
            const found = MOOD_OPTIONS.find(m => m.mood === moodData?.mood || m.mood === moodData);
            if (found) setSelectedMood(found);
        }
    }, []);

    const handleMoodSelect = (option) => {
        setSelectedMood(option);
        sessionStorage.setItem('mood', JSON.stringify(option));
    };

    const onSurprise = () => {
        if (!selectedMood) {
            toast.error("How are you feeling today?");
            return;
        }
        toast("AI is finding your perfect meal...", { icon: '🤖' });
        navigate('/surpriseme');
    };

    return (
        <div className='bg-black min-h-screen pb-32'>
            <div className='w-[85%] m-auto'>
                <Header />

                {/* Dashboard Charts */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                    <div>
                        <h2 className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Daily Intake</h2>
                        <NutritionChart />
                    </div>
                    <div>
                        <h2 className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Spending</h2>
                        <SpendingChart />
                    </div>
                </div>

                {/* AI Recommendation Section */}
                <section className="mt-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl p-5 border border-orange-500/20">
                    <h2 className="text-xl font-bold text-white mb-1">🤖 AI Meal Finder</h2>
                    <p className="text-gray-500 text-sm mb-4">Tell me how you're feeling</p>

                    {/* Mood Selection - Horizontal scroll of faces */}
                    <div className="flex justify-between gap-2 mb-4">
                        {MOOD_OPTIONS.map((option) => (
                            <button
                                key={option.mood}
                                onClick={() => handleMoodSelect(option)}
                                className={`flex-1 py-3 rounded-2xl text-center transition-all flex flex-col items-center ${selectedMood?.mood === option.mood
                                    ? 'bg-gradient-to-br from-orange-500 to-red-500 scale-105 shadow-lg'
                                    : 'bg-[#1a1a1a] border border-white/5 hover:border-orange-500/30'
                                    }`}
                            >
                                <span className="text-2xl">{option.emoji}</span>
                                <span className="text-[9px] text-gray-400 mt-1">{option.mood}</span>
                            </button>
                        ))}
                    </div>

                    {/* Selected mood feedback */}
                    {selectedMood && (
                        <p className="text-center text-gray-400 text-sm mb-3">
                            "{selectedMood.phrase}" — got it!
                        </p>
                    )}

                    {/* Go Button */}
                    <button
                        onClick={onSurprise}
                        disabled={!selectedMood}
                        className={`w-full py-4 font-bold text-lg rounded-2xl transition shadow-lg ${selectedMood
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90'
                            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        🎁 Surprise Me
                    </button>
                </section>

                <BottomNavigationBar />
            </div>
        </div>
    )
}

export default HomePage