import {useState} from "react";
import toast from "react-hot-toast";

const MOODS = [
    { id: 'Stressed', emoji: '😫', label: 'Stressed' },
    { id: 'Happy', emoji: '😊', label: 'Happy' },
    { id: 'Tired', emoji: '😴', label: 'Tired' },
    { id: 'Focused', emoji: '🤓', label: 'Focused' },
    { id: 'Hungry', emoji: '😋', label: 'Hungry' },
];

export const MoodSelector= ({ selectedMood, onSelectMood }) => {
    const [chosedMood, setChosedMood] = useState('')
    onSelectMood = (selectedMood) => {
        setChosedMood(selectedMood)
        sessionStorage.setItem('mood', JSON.stringify(selectedMood.id))
    }
    return (
        <div className="mb-8">
            <h2 className="text-white text-xl font-bold mb-4">How are you feeling?</h2>
            <div className="flex space-x-3 pb-2 overflow-scroll" style={{scrollbarWidth:'none'}}>
                {MOODS.map((mood) => (
                    <button
                        key={mood.id}
                        onClick={() => onSelectMood(mood)}
                        className={`flex-shrink-0 w-20 h-24 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 border-2 ${
                            chosedMood.id === mood.id
                                ? 'bg-orange-500 border-orange-500 scale-105'
                                : 'bg-neutral-900 border-transparent hover:bg-neutral-800'
                        }`}
                    >
                        <span className="text-3xl mb-2">{mood.emoji}</span>
                        <span className={`text-xs font-medium ${chosedMood.id === mood.id ? 'text-white' : 'text-gray-400'}`}>
              {mood.label}
            </span>
                    </button>
                ))}
            </div>
        </div>
    );
};
