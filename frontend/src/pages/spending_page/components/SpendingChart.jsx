import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, LabelList } from 'recharts'

const data= [
    { day: 'Mon', amount: 45 },
    { day: 'Tue', amount: 75 },
    { day: 'Wed', amount: 55 },
    { day: 'Thu', amount: 35 },
    { day: 'Fri', amount: 92 },
];

const SpendingChart = () => {
    return (
        <div className="bg-[#1a1a1a] rounded-3xl p-6 border border-white/5">
            <div className="h-48 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6b7280', fontSize: 12 }}
                            dy={10}
                        />
                        <Bar
                            dataKey="amount"
                            fill="#f97316"
                            radius={[4, 4, 4, 4]}
                            barSize={45}
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill="#f97316" className="hover:opacity-80 transition-opacity" />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="text-center mt-8 text-gray-500 font-medium">
                Total: <span className="text-gray-400">RM 92.00</span>
            </div>
        </div>
    );
};

export default SpendingChart;
