import React from 'react';
import LoginCard from './components/LoginCard.jsx';

const LoginPage = () => {
    return (
        <div
            className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative px-4"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=2000&auto=format&fit=crop")',
            }}
        >
            {/* Dark overlay for better readability */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

            <div className="relative z-10 w-full max-w-md">
                <header className="mb-8 text-left pl-2">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">
                        Your Account
                    </h1>
                    <p className="text-lg font-semibold text-white/90">
                        Welcome to Eatelligence!
                    </p>
                </header>
                <LoginCard />
            </div>
        </div>
    );
};

export default LoginPage;