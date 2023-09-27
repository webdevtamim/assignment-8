import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const data = [
    { name: 'Total Donation', value: 12 },
    { name: 'Your Donation', value: 4 },
];

const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

const dataWithPercentages = data.map(entry => ({
    name: entry.name,
    value: (entry.value / totalValue) * 100,
}));

const colors = ['#FF444A', '#00C49F'];

const Statistics = () => {
    return (
        <div style={{ width: '0', height: '100vh', margin: 0, padding: 0 }}>
            <PieChart width={window.innerWidth} height={window.innerHeight}>
                <Pie
                    data={dataWithPercentages}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={200}
                    fill="#8884d8"
                    label
                >
                    {dataWithPercentages.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default Statistics;