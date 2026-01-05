import React, {useEffect} from 'react';
import { Plus } from 'lucide-react';

const FoodItemRow = ({ item, onAddedItem }) => {
    return (
        <div className="flex items-center justify-between py-4 border-b border-gray-800 last:border-0">
            <div className="flex items-center space-x-4">
                {/* Placeholder Circular Image */}
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col">
                    <span className="text-white font-semibold text-lg">{item.name}</span>
                    <div className="flex items-center mt-1">
                        {/* Status Indicator Bar */}
                        <div className={`w-8 h-2 rounded-full ${item.statusColor} mr-2`} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-end">
                <button className="text-white hover:text-gray-300 transition-colors p-1" onClick={onAddedItem}>
                    <Plus size={32} strokeWidth={2.5} />
                </button>
                <span className="text-gray-400 text-sm mt-1">{item.vendor}</span>
            </div>
        </div>
    );
};

export default FoodItemRow;
