import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SurpriseCard = ({ data }) => {
    const navigate = useNavigate();
    const [isSpinning, setIsSpinning] = useState(false);
    const [mockData, setMockData] = useState(data[0]);

    const onSpin = () => {
        setIsSpinning(true);
        setTimeout(() => {
            setMockData(data[Math.floor(Math.random() * data.length)]);
            setIsSpinning(false);
        }, 1500);
    }

    const handleGo = () => {
        toast.success('Opening navigation...', { icon: '🗺️' });
        navigate('/navigate', { state: { spot: mockData } });
    };

    return (
        <div className={`w-full bg-[#111] rounded-3xl p-5 border border-zinc-800 transition-all duration-500 ${isSpinning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            {/* Image - Larger */}
            <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 mb-4">
                <img
                    src={mockData.imageUrl}
                    alt={mockData.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="space-y-3">
                <div className="flex justify-between items-start">
                    <h2 className="text-xl font-bold text-white leading-tight">{mockData.name}</h2>
                    <span className="text-xl text-orange-500 font-bold">RM {mockData.price}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {Array.isArray(mockData.tags) && mockData.tags.slice(0, 3).map((tag, idx) => (
                        <span
                            key={idx}
                            className={`text-xs px-3 py-1 rounded-full ${typeof tag === 'object' ? tag.color : 'bg-white/10 text-gray-300'
                                }`}
                        >
                            {typeof tag === 'object' ? tag.label : tag}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                    <button
                        onClick={handleGo}
                        className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl text-base"
                    >
                        Go There!
                    </button>
                    <button
                        onClick={onSpin}
                        disabled={isSpinning}
                        className="flex-1 py-3 bg-white/10 text-white font-bold rounded-xl text-base border border-white/10"
                    >
                        {isSpinning ? '...' : 'Spin Again'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SurpriseCard;
