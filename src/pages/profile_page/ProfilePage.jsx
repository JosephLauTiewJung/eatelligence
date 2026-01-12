import React, { useState, useEffect } from 'react';
import { Save, User, Heart, Wallet, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import BottomNavigationBar from '../../components/BottomNavigationBar.jsx';

const ALLERGIES = ['🥜 Peanuts', '🦐 Shellfish', '🥛 Dairy', '🍞 Gluten', '🥚 Eggs', '🫘 Soy'];

const ProfilePage = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        height: '', weight: '', bmi: 0,
        budgetCategory: 'RM 5-10',
        dietary: { halal: false, vegetarian: false },
        allergies: []
    });

    useEffect(() => {
        const saved = sessionStorage.getItem('userProfile');
        if (saved) setProfile(JSON.parse(saved));
    }, []);

    useEffect(() => {
        if (profile.height && profile.weight) {
            const h = parseFloat(profile.height) / 100;
            const w = parseFloat(profile.weight);
            if (h > 0 && w > 0) setProfile(p => ({ ...p, bmi: (w / (h * h)).toFixed(1) }));
        }
    }, [profile.height, profile.weight]);

    const handleToggle = (key) => setProfile(p => ({ ...p, dietary: { ...p.dietary, [key]: !p.dietary[key] } }));
    const toggleAllergy = (a) => setProfile(p => ({ ...p, allergies: p.allergies.includes(a) ? p.allergies.filter(x => x !== a) : [...p.allergies, a] }));

    const handleSave = () => {
        sessionStorage.setItem('userProfile', JSON.stringify(profile));
        sessionStorage.setItem('dailyBudget', profile.budgetCategory);
        toast.success('Profile saved!', { icon: '✨' });
        navigate('/home');
    };

    const getBmiColor = () => {
        const bmi = parseFloat(profile.bmi);
        if (!bmi) return 'text-gray-500';
        if (bmi < 18.5) return 'text-blue-400';
        if (bmi < 25) return 'text-green-400';
        if (bmi < 30) return 'text-yellow-400';
        return 'text-red-400';
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-black to-black text-white p-5 pb-28">

            {/* Profile Header */}
            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                    <User className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Your Profile</h1>
                    <p className="text-gray-500 text-sm">Personalize your experience</p>
                </div>
            </div>

            <div className="space-y-4 max-w-md mx-auto">

                {/* Health Card */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 rounded-2xl border border-white/5 shadow-xl">
                    <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span className="text-sm font-bold text-gray-300">Health Metrics</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div>
                            <label className="text-[10px] text-gray-500 uppercase">Height</label>
                            <input type="number" value={profile.height} onChange={(e) => setProfile(p => ({ ...p, height: e.target.value }))}
                                className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-3 text-lg font-bold text-center focus:border-orange-500 outline-none" placeholder="cm" />
                        </div>
                        <div>
                            <label className="text-[10px] text-gray-500 uppercase">Weight</label>
                            <input type="number" value={profile.weight} onChange={(e) => setProfile(p => ({ ...p, weight: e.target.value }))}
                                className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-3 text-lg font-bold text-center focus:border-orange-500 outline-none" placeholder="kg" />
                        </div>
                        <div>
                            <label className="text-[10px] text-gray-500 uppercase">BMI</label>
                            <div className={`bg-black/50 border border-white/10 rounded-xl py-2 px-3 text-lg font-bold text-center ${getBmiColor()}`}>
                                {profile.bmi || '--'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Budget Card */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 rounded-2xl border border-white/5 shadow-xl">
                    <div className="flex items-center gap-2 mb-3">
                        <Wallet className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-bold text-gray-300">Budget Per Meal</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {['RM 3-5', 'RM 5-10', 'RM 10-15', 'RM 15+'].map((cat) => (
                            <button key={cat} onClick={() => setProfile(p => ({ ...p, budgetCategory: cat }))}
                                className={`py-3 rounded-xl text-xs font-bold transition-all ${profile.budgetCategory === cat
                                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                                        : 'bg-black/50 border border-white/10 text-gray-500 hover:border-green-500/50'
                                    }`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dietary Preferences */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 rounded-2xl border border-white/5 shadow-xl">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-bold text-gray-300">🍽️ Dietary Preferences</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {[{ key: 'halal', label: '☪️ Halal', color: 'from-blue-500 to-indigo-600' },
                        { key: 'vegetarian', label: '🥬 Vegetarian', color: 'from-green-500 to-teal-600' }].map((item) => (
                            <button key={item.key} onClick={() => handleToggle(item.key)}
                                className={`py-3 rounded-xl text-sm font-bold transition-all ${profile.dietary[item.key]
                                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                                        : 'bg-black/50 border border-white/10 text-gray-500'
                                    }`}>
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Allergies */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-4 rounded-2xl border border-white/5 shadow-xl">
                    <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-bold text-gray-300">Allergies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {ALLERGIES.map((a) => (
                            <button key={a} onClick={() => toggleAllergy(a)}
                                className={`px-3 py-2 rounded-full text-xs font-medium transition-all ${profile.allergies.includes(a)
                                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md'
                                        : 'bg-black/50 border border-white/10 text-gray-500 hover:border-red-500/50'
                                    }`}>
                                {a}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Save Button */}
                <button onClick={handleSave}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl hover:opacity-90 transition">
                    <Save className="w-5 h-5" /> Save Profile
                </button>
            </div>

            <BottomNavigationBar />
        </div>
    );
};

export default ProfilePage;
