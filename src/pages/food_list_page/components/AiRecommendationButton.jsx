import {Sparkles} from "lucide-react";
import React from "react";

const AiRecommendationButton = ({onClick}) => {
    return (
        <div>
            {/* AI Recommendations Button */}
            <button  className="w-full bg-[#f39c38] hover:bg-[#e68a2e] transition-colors py-4 rounded-full flex
            items-center justify-center space-x-3 shadow-lg" onClick={onClick}>
                <Sparkles className="text-cyan-300 fill-cyan-300" size={24} />
                <span className="text-white font-bold text-lg tracking-wide uppercase">AI Recommendations</span>
            </button>
        </div>
    )
}

export default AiRecommendationButton;