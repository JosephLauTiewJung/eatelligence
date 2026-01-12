import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const username = sessionStorage.getItem('username') || 'User';
    const initial = username.charAt(0).toUpperCase();

    return (
        <div className="flex justify-between items-start pt-8 pb-6">
            <div>
                <h1 className="text-white text-3xl font-bold tracking-tight">Hey, {username}!</h1>
                <p className="text-gray-400 text-lg mt-1">Ready to eat smarter?</p>
            </div>
            <div
                onClick={() => navigate('/profile')}
                className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl cursor-pointer hover:scale-105 transition shadow-lg"
            >
                {initial}
            </div>
        </div>
    );
};

export default Header;