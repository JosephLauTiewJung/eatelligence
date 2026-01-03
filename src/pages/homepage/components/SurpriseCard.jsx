export const SurpriseCard = ({ onSurprise, isLoading }) => {
    return (
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-6 shadow-xl shadow-orange-900/20 mb-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

            <h3 className="text-2xl font-bold mb-2">Can't Decide?</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
                Let our AI surprise you with a random nutritious delight.
            </p>

            <button
                onClick={onSurprise}
                disabled={isLoading}
                className="w-full bg-black/20 backdrop-blur-md hover:bg-black/30 text-white font-bold py-4 rounded-2xl flex items-center justify-center space-x-2 transition-all active:scale-[0.98] disabled:opacity-70"
            >
                {isLoading ? (
                    <div className="flex items-center space-x-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>AI is thinking...</span>
                    </div>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span>Surprise Me!</span>
                    </>
                )}
            </button>
        </div>
    );
};
