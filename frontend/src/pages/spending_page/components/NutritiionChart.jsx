import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts';

const data= [
    { name: 'Carbs', value: 45, color: '#f87171' }, // coral red
    { name: 'Protein', value: 30, color: '#60a5fa' }, // sky blue
    { name: 'Fat', value: 25, color: '#facc15' }, // yellow
];

const NutritionChart = () => {
    return (
        <div className="bg-[#1a1a1a] rounded-3xl p-6 mb-8 border border-white/5">
            <div className="h-64 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={95}
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

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-bold text-white leading-tight">Daily</span>
                    <span className="text-gray-400 text-sm">Intake</span>
                </div>
            </div>

            {/* Legend */}
            <div className="flex justify-around mt-4 pt-4 border-t border-white/5">
                {data.map((entry) => (
                    <div key={entry.name} className="flex items-center gap-2">
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-sm text-gray-300">{entry.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NutritionChart;
