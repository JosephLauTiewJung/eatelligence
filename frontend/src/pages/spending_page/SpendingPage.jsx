import NutritionChart from './components/NutritiionChart.jsx';
import SpendingChart from './components/SpendingChart.jsx';
import BottomNavigationBar from "../../components/BottomNavigationBar.jsx";

const SpendingPage = () => {

    return (
        <div className="h-screen bg-black text-white pb-24">
            {/* Header Area */}
            <header className="p-6 pt-12">
                <h1 className="text-2xl font-bold tracking-tight">Nutrition Breakdown</h1>
            </header>

            {/* Main Content Area */}
            <main className="px-4 space-y-8">
                <section>
                    <NutritionChart />
                </section>

                <section>
                    <h2 className="text-2xl font-bold tracking-tight mb-6 px-2">Weekly Spending</h2>
                    <SpendingChart />
                </section>
            </main>

            {/* Persistent Navigation */}
            <BottomNavigationBar/>
        </div>
    );
};

export default SpendingPage;
