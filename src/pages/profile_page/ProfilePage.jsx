import React, { useState, useEffect } from 'react';
import { Save, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import BottomNavigationBar from '../../components/BottomNavigationBar.jsx';

const ProfilePage = () => {
    const navigate = useNavigate();
    const username = sessionStorage.getItem('username') || 'User';
    const email = sessionStorage.getItem('email') || 'user@example.com';
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
        toast.success('Saved!');
        navigate('/home');
    };

    const getBmiColor = () => {
        const bmi = parseFloat(profile.bmi);
        if (!bmi) return 'from-gray-600 to-gray-700';
        if (bmi < 18.5) return 'from-blue-500 to-blue-600';
        if (bmi < 25) return 'from-green-500 to-emerald-600';
        if (bmi < 30) return 'from-yellow-500 to-orange-500';
        return 'from-red-500 to-red-600';
    };

    return (
        <div className="min-h-screen bg-black text-white pb-28">
            {/* Profile Avatar Header */}
            <div className="relative h-32 bg-gradient-to-br from-orange-500 to-red-600">
                <div className="absolute -bottom-10 left-6">
                    <div className="w-20 h-20 rounded-full bg-black border-4 border-black flex items-center justify-center text-3xl font-bold bg-gradient-to-br from-orange-400 to-red-500">
                        {username.charAt(0).toUpperCase()}
                    </div>
                </div>
            </div>

            <div className="pt-14 px-6">
                <h1 className="text-2xl font-bold">{username}</h1>
                <p className="text-gray-500 text-sm">{email}</p>
            </div>

            <div className="px-6 mt-8 space-y-6">
                {/* BMI Card */}
                <div className={`bg-gradient-to-r ${getBmiColor()} rounded-2xl p-5 flex items-center justify-between`}>
                    <div>
                        <p className="text-white/70 text-xs uppercase tracking-wider">Body Mass Index</p>
                        <p className="text-4xl font-black mt-1">{profile.bmi || '--'}</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-white/20 rounded-xl p-3 text-center">
                            <input type="number" value={profile.height}
                                onChange={(e) => setProfile(p => ({ ...p, height: e.target.value }))}
                                className="w-14 bg-transparent text-xl font-bold text-center outline-none" placeholder="170" />
                            <p className="text-[10px] text-white/60">cm</p>
                        </div>
                        <div className="bg-white/20 rounded-xl p-3 text-center">
                            <input type="number" value={profile.weight}
                                onChange={(e) => setProfile(p => ({ ...p, weight: e.target.value }))}
                                className="w-14 bg-transparent text-xl font-bold text-center outline-none" placeholder="65" />
                            <p className="text-[10px] text-white/60">kg</p>
                        </div>
                    </div>
                </div>

                {/* Settings List */}
                <div className="bg-[#111] rounded-2xl overflow-hidden border border-white/5">
                    {/* Budget */}
                    <div className="p-4 border-b border-white/5">
                        <p className="text-xs text-gray-500 mb-3">BUDGET PER MEAL</p>
                        <div className="flex gap-2">
                            {['RM 3-5', 'RM 5-10', 'RM 10-15', 'RM 15+'].map((cat) => (
                                <button key={cat} onClick={() => setProfile(p => ({ ...p, budgetCategory: cat }))}
                                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${profile.budgetCategory === cat
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-white/5 text-gray-500'
                                        }`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dietary */}
                    <div className="p-4 border-b border-white/5">
                        <p className="text-xs text-gray-500 mb-3">DIETARY PREFERENCES</p>
                        <div className="flex gap-3">
                            <button onClick={() => handleToggle('halal')}
                                className={`flex-1 py-3 rounded-xl font-medium text-sm transition ${profile.dietary.halal ? 'bg-green-500 text-white' : 'bg-white/5 text-gray-400'
                                    }`}>
                                ☪️ Halal
                            </button>
                            <button onClick={() => handleToggle('vegetarian')}
                                className={`flex-1 py-3 rounded-xl font-medium text-sm transition ${profile.dietary.vegetarian ? 'bg-green-500 text-white' : 'bg-white/5 text-gray-400'
                                    }`}>
                                🥬 Vegetarian
                            </button>
                        </div>
                    </div>

                    {/* Allergies */}
                    <div className="p-4">
                        <p className="text-xs text-gray-500 mb-3">ALLERGIES</p>
                        <div className="flex flex-wrap gap-2">
                            {['🥜 Peanuts', '🦐 Shellfish', '🥛 Dairy', '🍞 Gluten'].map((a) => (
                                <button key={a} onClick={() => toggleAllergy(a)}
                                    className={`px-3 py-2 rounded-full text-xs font-medium transition ${profile.allergies.includes(a)
                                        ? 'bg-red-500 text-white'
                                        : 'bg-white/5 text-gray-400'
                                        }`}>
                                    {a}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <button onClick={handleSave}
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg">
                    <Save className="w-4 h-4" /> Save Changes
                </button>
            </div>

            <BottomNavigationBar />
        </div>
    );
};

export default ProfilePage;
