export const LoadingPage = () => {

    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
            <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 border-4 border-orange-500/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-t-orange-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Smart AI is Thinking</h2>
            <p className="text-gray-400 text-lg transition-opacity duration-500">
                Generating your meals...
            </p>

            <div className="mt-12 w-48 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 animate-[loading_2s_ease-in-out_infinite]"></div>
            </div>

        </div>
    );
};
