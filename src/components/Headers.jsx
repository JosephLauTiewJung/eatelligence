    import React from 'react';
const Header = () => {
    const user = sessionStorage.getItem('username').charAt(0).toUpperCase()
    return (
        <div className="flex justify-between items-start pt-8 pb-6">
            <div>
                <h1 className="text-white text-3xl font-bold tracking-tight">Hello, joseph</h1>
                <p className="text-gray-400 text-lg mt-1">Ready to eat smarter?</p>
            </div>
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-xl cursor-pointer hover:opacity-90 transition-opacity">
                {user}
            </div>
        </div>
    );
};
export default Header;