import React from 'react';
import { useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
    {
        label: 'Home',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        route: '/home'
    },
    {
        label: 'Explore',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        route: '/food-list'
    },
    {
        label: 'Profile',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        route: '/profile'
    },
];

const BottomNavigationBar = () => {
    const navigate = useNavigate();
    const onClickNavItem = (item) => (e) => {
        e.preventDefault();
        if (item.route) {
            navigate(item.route);
        }
    }
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/5 pb-8 pt-3 px-6 z-40">
            <div className="flex justify-between items-center max-w-lg mx-auto">
                {NAV_ITEMS.map((item) => (
                    <button
                        onClick={onClickNavItem(item)}
                        key={item.label}
                        className={`flex flex-col items-center space-y-1 transition-all hover:scale-110 text-gray-500 hover:text-gray-300`}
                    >
                        {item.icon}
                        <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BottomNavigationBar;
