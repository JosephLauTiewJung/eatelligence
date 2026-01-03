import BottomNavigationBar from "../../components/BottomNavigationBar.jsx";
import Header from "../../components/Headers.jsx";
import {MoodSelector} from "./components/MoodSelector.jsx";
import {SurpriseCard} from "./components/SurpriseCard.jsx";
import {RecommendBar} from "./components/RecommendBar.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {useState} from "react";
import foods from './data/data.js'

const HomePage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const onSurprise = () => {
        const mood = sessionStorage.getItem("mood");
        if (mood === null) {
            toast.error("Please select your mood first! 😊");
            return;
        }
        toast("Generating a surprise for you...", { icon: '🤖' });
        navigate('/surpriseme');
    }
    return (
        <div className='bg-black min-h-screen'>
            <div className='w-[80%] m-auto'>
                <Header/>
                <BottomNavigationBar/>
                <MoodSelector/>
                <SurpriseCard onSurprise={onSurprise} isLoading={isLoading}/>
                {/*<RecommendBar recommendation={foods[0]}/>*/}
            </div>
        </div>
    )
}

export default HomePage