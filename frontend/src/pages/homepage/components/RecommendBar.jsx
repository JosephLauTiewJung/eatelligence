export const RecommendBar = ({ recommendation, onClose }) => {
    if (!recommendation) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div
                className="bg-neutral-900 w-full max-w-lg rounded-t-[2.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl slide-in-from-bottom duration-500 animate-in"
            >
                <div className="relative h-64">
                    <img
                        src={recommendation.image}
                        alt={recommendation.title}
                        className="w-full h-full object-cover"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 p-2 rounded-full transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-3xl font-bold">{recommendation.title}</h2>
                        <span className="bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full text-sm font-semibold">
              {recommendation.calories}
            </span>
                    </div>

                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        {recommendation.description}
                    </p>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Key Nutrients</h4>
                        <div className="flex flex-wrap gap-2">
                            {recommendation.nutrients.map((n, idx) => (
                                <span key={idx} className="bg-neutral-800 px-4 py-2 rounded-xl text-sm font-medium border border-neutral-700">
                  {n}
                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full mt-8 bg-white text-black font-bold py-4 rounded-2xl hover:bg-gray-200 transition-colors active:scale-95"
                    >
                        Got it!
                    </button>
                </div>
            </div>
        </div>
    );
};
