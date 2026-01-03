import SurpriseCard from './components/SurpriseCard';
import MOCK_SPOT  from './components/constants.jsx'
import BottomNavigationBar from "../../components/BottomNavigationBar.jsx";
const App = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center px-6 py-12 md:py-20 overflow-x-hidden">
            {/* Header */}
            <header className="mb-12 text-center animate-in fade-in duration-1000">
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                    Surprise Me!
                </h1>
                <p className="text-zinc-500 mt-4 text-lg font-medium">
                    Find your next favorite spot in one click.
                </p>
            </header>

            {/* Main Container */}
            <main className="w-full max-w-lg flex flex-col items-center justify-center">
                <SurpriseCard data={MOCK_SPOT}/>
            </main>
            <BottomNavigationBar/>

            {/* Decorative Blur Spots */}
            <div className="fixed -top-24 -left-24 w-96 h-96 bg-[#D19156]/10 blur-[120px] pointer-events-none rounded-full" />
            <div className="fixed top-1/2 -right-24 w-64 h-64 bg-purple-500/10 blur-[100px] pointer-events-none rounded-full" />
        </div>
    );
};

export default App;
