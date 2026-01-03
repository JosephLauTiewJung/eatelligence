import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import FoodItemRow from './components/FoodItemRow.jsx';
import { MOCK_RECOMMENDATIONS, MOCK_DATABASE } from './data/data.js';
import BottomNavigationBar from "../../components/BottomNavigationBar.jsx";
import { Check, X } from 'lucide-react'
const FoodListPage = () => {
    const [activeTab, setActiveTab] = useState('shopping-list');
    return (
        <div className="bg-black flex flex-col items-center px-4 pt-8 pb-32 mx-auto relative overflow-x-hidden">
            <main className={`w-[80%] ${activeTab === 'food-list' ? 'blur-3xl' : ''}`}>
                {/* Header Section */}
                <Header activeTab={activeTab} onTabChange={setActiveTab} />

                {/* Recommended Foods Card */}
                <div className="mt-8 w-full bg-[#111111] rounded-3xl p-6 shadow-inner border border-gray-900/50">
                    <h2 className="text-white text-xl font-bold mb-4">Recommended Foods</h2>
                    <div className="space-y-1">
                        {MOCK_RECOMMENDATIONS.map((item) => (
                            <FoodItemRow key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                {/* Add All Button */}
                <div className="w-full mt-10">
                    <button className="w-full py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
                        Add all to Shopping List
                    </button>
                </div>
            </main>
            {/* Purple popup div */}
            {
                activeTab === 'food-list' &&
                <div className='absolute top-[10%] z-50 w-[50%] h-[70%] bg-teal-800 rounded-3xl bg-rounded-xl p-4 shadow-lg overflow-scroll'
                                                  style={{scrollbarWidth: "none"}}>
                    <div className='flex justify-end' onClick={() => setActiveTab('shopping-list')}>
                        <X className='size-8 text-blue-200'/>
                    </div>
                    {MOCK_DATABASE.map((item) => (
                        <FoodItemRow key={item.id} item={item} />
                    ))}
                </div>
            }
            {/* Bottom Navigation */}
            <BottomNavigationBar/>
        </div>
    );
};

export default FoodListPage;
