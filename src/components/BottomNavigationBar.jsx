import React from 'react';
import toast from "react-hot-toast";
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
        label: 'Planner',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        route: '/spending'
    },
    {
        label: 'Surprise Me',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
        ),
        route: '/surpriseme'
    },
];

const BottomNavigationBar = () => {
    const navigate = useNavigate();
    const onClickNavItem = (item) => (e) => {
        e.preventDefault();
        toast(`${item.label} clicked!`, { duration: 1000 });
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
