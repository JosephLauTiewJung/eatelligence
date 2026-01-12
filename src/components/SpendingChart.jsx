import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts'

const data = [
    { day: 'Mon', amount: 45 },
    { day: 'Tue', amount: 75 },
    { day: 'Wed', amount: 55 },
    { day: 'Thu', amount: 35 },
    { day: 'Fri', amount: 92 },
];

const SpendingChart = () => {
    return (
        <div className="bg-[#1a1a1a] rounded-2xl p-4 border border-white/5 h-full">
            <div className="h-32 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6b7280', fontSize: 10 }}
                            dy={5}
                        />
                        <Bar
                            dataKey="amount"
                            fill="#f97316"
                            radius={[3, 3, 3, 3]}
                            barSize={20}
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill="#f97316" />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="flex justify-around mt-2 pt-2 border-t border-white/5">
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-xs text-gray-400">RM 92</span>
                </div>
                <span className="text-xs text-gray-500">This Week</span>
            </div>
        </div>
    );
};

export default SpendingChart;
