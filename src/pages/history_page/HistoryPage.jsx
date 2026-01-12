import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trash2, TrendingUp, Utensils, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNavigationBar from '../../components/BottomNavigationBar.jsx';
import toast from 'react-hot-toast';

const HistoryPage = () => {
    const navigate = useNavigate();
    const [history, setHistory] = useState([]);
    const [totalSpent, setTotalSpent] = useState(0);
    const [avgCalories, setAvgCalories] = useState(0);

    useEffect(() => {
        const log = JSON.parse(sessionStorage.getItem('spendingLog') || '[]');
        setHistory(log.reverse()); // Most recent first

        // Calculate stats
        const total = log.reduce((sum, item) => sum + (item.price || 0), 0);
        const calories = log.reduce((sum, item) => sum + (item.calories || 500), 0);
        setTotalSpent(total);
        setAvgCalories(log.length > 0 ? Math.round(calories / log.length) : 0);
    }, []);

    const clearHistory = () => {
        sessionStorage.removeItem('spendingLog');
        setHistory([]);
        setTotalSpent(0);
        setAvgCalories(0);
        toast.success('History cleared!');
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-MY', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-black text-white pb-28">
            {/* Header */}
            <div className="p-4 pt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="p-3 bg-white/10 rounded-full">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold">Meal History</h1>
                        <p className="text-gray-500 text-sm">{history.length} meals logged</p>
                    </div>
                </div>
                {history.length > 0 && (
                    <button onClick={clearHistory} className="p-3 bg-red-500/20 rounded-full text-red-400">
                        <Trash2 className="w-5 h-5" />
                    </button>
                )}
            </div>

            {/* Stats Cards */}
            <div className="px-4 mt-4 grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-2xl p-4 border border-green-500/20">
                    <div className="flex items-center gap-2 text-green-400 mb-2">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs uppercase">Total Spent</span>
                    </div>
                    <p className="text-2xl font-bold">RM {totalSpent.toFixed(2)}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-2xl p-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 text-orange-400 mb-2">
                        <Utensils className="w-4 h-4" />
                        <span className="text-xs uppercase">Avg Calories</span>
                    </div>
                    <p className="text-2xl font-bold">{avgCalories} kcal</p>
                </div>
            </div>

            {/* Meal List */}
            <div className="px-4 mt-6">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Recent Meals</h2>

                {history.length > 0 ? (
                    <div className="space-y-3">
                        {history.map((item, idx) => (
                            <div key={item.id || idx} className="bg-[#111] rounded-2xl p-4 border border-white/5 flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-xl">
                                    🍽️
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white">{item.spotName || 'Unknown Meal'}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-gray-500">{item.location || 'Campus'}</span>
                                        <span className="text-xs text-gray-600">•</span>
                                        <span className="text-xs text-gray-500">{formatDate(item.date)}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-orange-400">RM {(item.price || 0).toFixed(2)}</p>
                                    <p className="text-xs text-gray-500">{item.calories || '~500'} kcal</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <Calendar className="w-12 h-12 mx-auto text-gray-700 mb-4" />
                        <p className="text-gray-500">No meals logged yet</p>
                        <p className="text-gray-600 text-sm mt-1">Visit a food spot and tap "I've Arrived"</p>
                    </div>
                )}
            </div>

            <BottomNavigationBar />
        </div>
    );
};

export default HistoryPage;
