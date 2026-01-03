
import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Header = ({ activeTab, onTabChange }) => {
    return (
        <div className="w-full space-y-6">
            {/* Top Navigation Row */}
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => onTabChange('shopping-list')}
                    className={`flex items-center justify-between px-6 py-3 rounded-full border-2 transition-all ${
                        activeTab === 'shopping-list'
                            ? 'bg-gray-200 text-black border-transparent'
                            : 'bg-transparent text-white border-white'
                    }`}
                >
                    <span className="font-bold mr-2">Shopping List</span>
                    <ChevronDown size={20} />
                </button>

                <button
                    onClick={() => onTabChange('food-list')}
                    className={`flex-1 py-3 px-6 rounded-full border-2 text-center transition-all ${
                        activeTab === 'food-list'
                            ? 'bg-gray-200 text-black border-transparent'
                            : 'bg-transparent text-white border-white'
                    }`}
                >
                    <span className="font-bold">Food List</span>
                </button>
            </div>

            {/* AI Recommendations Button */}
            <button className="w-full bg-[#f39c38] hover:bg-[#e68a2e] transition-colors py-4 rounded-full flex items-center justify-center space-x-3 shadow-lg">
                <Sparkles className="text-cyan-300 fill-cyan-300" size={24} />
                <span className="text-white font-bold text-lg tracking-wide uppercase">AI Recommendations</span>
            </button>
        </div>
    );
};

export default Header;
