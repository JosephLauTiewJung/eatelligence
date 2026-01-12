import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigationBar from "../../components/BottomNavigationBar.jsx";
import { Search, MapPin, Filter, Sparkles, Clock, TrendingUp, Wallet, Heart, Navigation } from 'lucide-react';
import { CAMPUS_DATABASE, getRecommendationScore } from './data/campus_database';
import toast from 'react-hot-toast';

const RECOMMENDATION_MODES = [
    { id: 'smart', label: '✨ Smart', icon: Sparkles, desc: 'AI-powered picks for you' },
    { id: 'nearby', label: '📍 Nearby', icon: Navigation, desc: 'Closest to you' },
    { id: 'trending', label: '🔥 Trending', icon: TrendingUp, desc: 'Most popular now' },
    { id: 'budget', label: '💰 Budget', icon: Wallet, desc: 'Best value meals' },
    { id: 'healthy', label: '🥗 Healthy', icon: Heart, desc: 'Low-cal options' },
];

const FoodListPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [mode, setMode] = useState('smart');
    const [items, setItems] = useState([]);
    const [userContext, setUserContext] = useState({});

    // Load user context from sessionStorage
    useEffect(() => {
        const profile = JSON.parse(sessionStorage.getItem('userProfile') || '{}');
        const moodData = sessionStorage.getItem('mood');
        const budget = sessionStorage.getItem('dailyBudget') || 'RM 5-10';

        // Handle mood as either string or object
        let moodString = null;
        if (moodData) {
            try {
                const parsed = JSON.parse(moodData);
                moodString = typeof parsed === 'object' ? parsed.mood : parsed;
            } catch {
                moodString = moodData;
            }
        }

        setUserContext({
            budget,
            mood: moodString,
            bmi: profile.bmi,
            dietary: profile.dietary || {},
            userAllergies: profile.allergies || [],
            currentHour: new Date().getHours()
        });
    }, []);

    // Apply recommendation algorithm based on mode
    useEffect(() => {
        let sorted = [...CAMPUS_DATABASE];
        const currentHour = new Date().getHours();

        // Filter by search term
        if (searchTerm) {
            sorted = sorted.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.stall.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Note: Removed time-based filtering - show all items always

        // Apply sorting based on mode
        switch (mode) {
            case 'smart':
                sorted = sorted.map(item => ({
                    ...item,
                    score: getRecommendationScore(item, userContext)
                })).sort((a, b) => b.score - a.score);
                break;
            case 'nearby':
                sorted.sort((a, b) => a.distance - b.distance);
                break;
            case 'trending':
                sorted.sort((a, b) => b.popularity - a.popularity);
                break;
            case 'budget':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'healthy':
                sorted.sort((a, b) => a.calories - b.calories);
                break;
            default:
                break;
        }

        setItems(sorted);
    }, [mode, searchTerm, userContext]);

    const handleVisit = (item) => {
        toast("Opening navigation...", { icon: '🗺️' });
        navigate('/navigate', { state: { spot: item } });
    };

    const getScoreColor = (score) => {
        if (score >= 80) return 'text-green-400';
        if (score >= 60) return 'text-yellow-400';
        return 'text-gray-400';
    };

    return (
        <div className="bg-black min-h-screen text-white pb-28">

            {/* Header */}
            <div className="pt-6 px-4 pb-3 bg-gradient-to-b from-neutral-900 to-black">
                <h1 className="text-2xl font-bold tracking-tight">Campus Dining</h1>
                <p className="text-gray-500 text-xs mt-1">Powered by AI recommendations</p>

                {/* Search */}
                <div className="mt-4 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search food, stall, location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:border-orange-500 outline-none"
                    />
                </div>

                {/* Recommendation Mode Selector */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                    {RECOMMENDATION_MODES.map(m => (
                        <button
                            key={m.id}
                            onClick={() => setMode(m.id)}
                            className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 ${mode === m.id
                                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                : 'bg-[#1a1a1a] text-gray-400 border border-white/10'
                                }`}
                        >
                            {m.label}
                        </button>
                    ))}
                </div>

                {/* Mode Description */}
                <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-orange-400" />
                    {RECOMMENDATION_MODES.find(m => m.id === mode)?.desc}
                </p>
            </div>

            {/* Results */}
            <main className="px-4 mt-3 space-y-3">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <div key={item.id}
                            className={`bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-2xl p-3 border border-white/5 flex gap-3 hover:border-orange-500/30 transition shadow-lg ${index === 0 && mode === 'smart' ? 'ring-1 ring-orange-500/50' : ''}`}
                        >
                            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-800 relative">
                                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                                {index === 0 && mode === 'smart' && (
                                    <div className="absolute top-1 left-1 bg-orange-500 text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold">
                                        TOP PICK
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 flex flex-col justify-between min-w-0">
                                <div>
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="font-bold text-sm leading-tight truncate">{item.name}</h3>
                                        {mode === 'smart' && item.score && (
                                            <span className={`text-xs font-bold ${getScoreColor(item.score)}`}>
                                                {Math.round(item.score)}%
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-500 text-[10px] mt-0.5 flex items-center gap-1 truncate">
                                        <MapPin className="w-2.5 h-2.5" /> {item.location} · {item.distance}m
                                    </p>
                                    <div className="flex gap-1 mt-1.5 flex-wrap">
                                        <span className="text-[9px] px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded-full">{item.calories}kcal</span>
                                        <span className="text-[9px] px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded-full">⭐{item.rating}</span>
                                        {item.tags.slice(0, 1).map(tag => (
                                            <span key={tag} className="text-[9px] px-1.5 py-0.5 bg-white/5 text-gray-400 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="font-bold text-orange-400">RM {item.price.toFixed(2)}</span>
                                    <button
                                        onClick={() => handleVisit(item)}
                                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-4 py-2 rounded-xl hover:opacity-90 transition shadow"
                                    >
                                        Go →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-16 text-gray-600">
                        <Clock className="w-10 h-10 mx-auto mb-3 opacity-50" />
                        <p className="text-sm">No open spots found right now</p>
                        <p className="text-xs text-gray-700 mt-1">Try searching or check back later</p>
                    </div>
                )}
            </main>

            <BottomNavigationBar />
        </div>
    );
};

export default FoodListPage;
