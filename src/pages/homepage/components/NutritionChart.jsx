import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Carbs', value: 45, color: '#f87171' },
    { name: 'Protein', value: 30, color: '#60a5fa' },
    { name: 'Fat', value: 25, color: '#facc15' },
];

const NutritionChart = () => {
    return (
        <div className="bg-[#1a1a1a] rounded-2xl p-4 border border-white/5 h-full">
            <div className="h-32 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={55}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                            startAngle={90}
                            endAngle={450}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-sm font-bold text-white">Daily</span>
                    <span className="text-gray-400 text-xs">Intake</span>
                </div>
            </div>

            <div className="flex justify-around mt-2 pt-2 border-t border-white/5">
                {data.map((entry) => (
                    <div key={entry.name} className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span className="text-xs text-gray-400">{entry.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NutritionChart;
