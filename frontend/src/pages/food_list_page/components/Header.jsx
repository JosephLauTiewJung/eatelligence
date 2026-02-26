import React from 'react';
import { ChevronDown, Sparkles, ChevronUp } from 'lucide-react';
import toast from "react-hot-toast";

const Header = ({ activeTab, onTabChange, onShoppingListActive, addedItem}) => {
    const [isShoppingListOpen, setIsShoppingListOpen] = React.useState(false);
    const onClickHandler = () => {
        console.log(addedItem)
        if (addedItem.length === 0) {
            toast("Shopping list is empty" );
            return
        }
        setIsShoppingListOpen(!isShoppingListOpen);
        onTabChange('shopping-list')
        onShoppingListActive(!isShoppingListOpen);
    }
    return (
        <div className="w-full space-y-6">
            {/* Top Navigation Row */}
            <div className="flex items-center space-x-4">
                <button
                    onClick={onClickHandler}
                    className={`flex items-center justify-between px-6 py-3 rounded-full border-2 transition-all ${
                        activeTab === 'shopping-list'
                            ? 'bg-gray-200 text-black border-transparent'
                            : 'bg-transparent text-white border-white'
                    }`}
                >
                    <span className="font-bold mr-2">Shopping List</span>
                    {addedItem.length != 0   && isShoppingListOpen ? <ChevronUp /> : <ChevronDown />}
                </button>

                <button
                    onClick={() => onTabChange('food-list')}
                    className={`flex-1 py-3 px-6 rounded-full border-2 text-center transition-all ${
                        activeTab === 'food-list'
                            ? 'bg-gray-200 text-black border-transparent'
                            : 'bg-transparent text-white border-white'
                    }`}
                >
                    <span className="font-bold">Food List</span>
                </button>
            </div>
        </div>
    );
};

export default Header;
