import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import FoodItemRow from './components/FoodItemRow.jsx';
import { MOCK_RECOMMENDATIONS, MOCK_DATABASE } from './data/data.js';
import BottomNavigationBar from "../../components/BottomNavigationBar.jsx";
import { Check, X } from 'lucide-react'
import ShoppingList from "./components/ShoppingList.jsx";
import toast from "react-hot-toast";
import AiRecommendationButton from "./components/AiRecommendationButton.jsx";
import axios from "axios";
import {LoadingPage} from "./components/LoadingPage.jsx";
const FoodListPage = () => {
    const [activeTab, setActiveTab] = useState('shopping-list');
    const [aiRecommendations, setAiRecommendations] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isMealPlanVisible, setIsMealPlanVisible] = useState(false);
    const [addedItems, setAddedItems] = React.useState(() => {
        try {
            const storedItem = sessionStorage.getItem("shoppingList")
            console.log(storedItem)
            return storedItem ? JSON.parse(storedItem) : [];
        }
        catch(error) {
            toast(error.message)
        }
    });
    const [isShoppingListVisible, setIsShoppingListVisible] = useState(false);

    const handleAddItem = (e, item) => {
        if (addedItems.find(addedItem => addedItem.id === item.id)) {
            toast("Item already in shopping list");
            return
        }
        e.preventDefault();
        toast("Item added to shopping list");
        setAddedItems([...addedItems, item]);
    };

    const handleRemoveItem = (e, item) => {
        e.preventDefault()
        setAddedItems(addedItems.filter(addedItem => addedItem.id !== item.id));
    }

    const addAllHandler = (e) => {
        e.preventDefault();
        const newItems = MOCK_RECOMMENDATIONS.filter(
            item => !addedItems.find(added => added.id === item.id)
        );
        setAddedItems(prevItems => [...prevItems, ...newItems]);
    }


    useEffect(() => {
        sessionStorage.setItem("shoppingList", JSON.stringify(addedItems));
        console.log(addedItems);
        console.log(isMealPlanVisible)
    }, [addedItems]);

    useEffect(() => {
        if (aiRecommendations && aiRecommendations.length > 0) {
            console.log(`ai recommendations updated: ${JSON.stringify(aiRecommendations)}`);
        }
    }, [aiRecommendations]);

    const handleOnCloseShoppingList = () => {
        setIsShoppingListVisible(false);
    }
    const aiRecommendationClickHandler = async () => {
        setIsLoading(true)
        setIsMealPlanVisible(false)
        toast("Generate your meal suggestions....");
        const BASE_URL = "https://tcs-560362072194.europe-west1.run.app/"
        const API_ENDPOINT = "user/chat?message="
        const ingredients = JSON.stringify(sessionStorage.getItem("shoppingList"))
        const prompt2 = `Based on the following ingredients: ${ingredients}, suggest other foods that I need to 
        fulfill my nutritional needs`;
        const username = sessionStorage.getItem("username")
        try {
            const response = await axios.get(`${BASE_URL}${API_ENDPOINT}${encodeURIComponent(prompt2)}`,
                {
                    headers: {
                        'username': username
                    }
                })
            console.log(response.data.message)
            setAiRecommendations(response.data.message)
        }
        catch (error) {
            toast.error(error.message)
        }
        toast("Meal suggestions generated!");
        setIsLoading(false)
        setIsMealPlanVisible(true)
    }
    return (
        <div className="bg-black flex flex-col items-center px-4 pt-8 pb-32 mx-auto relative overflow-x-hidden">
            <main className={`w-[80%] ${isMealPlanVisible || isShoppingListVisible || activeTab === 'food-list' ? 'blur-3xl' : ''}`}>
                {/* Header Section */}
                <Header addedItem={addedItems} activeTab={activeTab} onTabChange={setActiveTab} onShoppingListActive={(isOpen) =>
                    setIsShoppingListVisible(isOpen)}/>
                {/* AI Recommendation Button */}
                <div className='mt-8'>
                    <AiRecommendationButton onClick={aiRecommendationClickHandler}/>
                </div>
                {/* Recommended Foods Card */}
                <div className="mt-8 w-full bg-[#111111] rounded-3xl p-6 shadow-inner border border-gray-900/50">
                    <h2 className="text-white text-xl font-bold mb-4">Recommended Foods</h2>
                    <div className="space-y-1">
                        {MOCK_RECOMMENDATIONS.map((item) => (
                            <FoodItemRow key={item.id} item={item} onAddedItem={(e) => handleAddItem(e, item)}/>
                        ))}
                    </div>
                </div>
                {/* Add All Button */}
                <div className="w-full mt-10">
                    <button className="w-full py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all active:scale-95" onClick={addAllHandler}>
                        Add all to Shopping List
                    </button>
                </div>
            </main>
            {/* Shopping List Overlay */}
            <div className='w-[50%] absolute top-[25$%] right-1/4 z-50'>
                {isShoppingListVisible && <ShoppingList items={addedItems} onDeleteItem={handleRemoveItem} onClose={handleOnCloseShoppingList}/>}
            </div>
            {/* Food List Overlay */}
            {
                activeTab === 'food-list' &&
                <div className='absolute top-[10%] z-50 w-[50%] h-[70%] bg-teal-800 rounded-3xl bg-rounded-xl p-4 shadow-lg overflow-scroll'
                                                  style={{scrollbarWidth: "none"}}>
                    <div className='flex justify-end' onClick={() => setActiveTab('shopping-list')}>
                        <X className='size-8 text-blue-200'/>
                    </div>
                    {MOCK_DATABASE.map((item) => (
                        <FoodItemRow key={item.id} item={item} onAddedItem={(e) => handleAddItem(e, item)}/>
                    ))}
                </div>
            }
            {/* Bottom Navigation */}
            <BottomNavigationBar/>
            {isLoading && <LoadingPage meals={aiRecommendations} isLoading={isLoading}/>}
            {
                isMealPlanVisible &&
                <div className='absolute z-50 w-1/2 m-auto bg-white rounded-2xl p-8' onClick={() => setIsMealPlanVisible(false)}>
                    <X className='mb-8'/>
                    <div>{aiRecommendations}</div>
                </div>
            }
        </div>
    );
};

export default FoodListPage;
