import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useExpenseContext } from "../../provider/ExpenseProvider";
import { formatExpensesByCategory } from "../../utils/expenseFormatter";

// const data = [
// 	{ name: "Food", value: 400 },
// 	{ name: "Entertainment", value: 300 },
// 	{ name: "Travel", value: 300 },
// ];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	// index,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

const PieChartSection = () => {
	const { expenses } = useExpenseContext(); // expenses is the data
	// return <div>PieChartSection</div>;
	const data = formatExpensesByCategory(expenses);
	console.log("formatted-data: ", data);

	return (
		// <ResponsiveContainer width="100%" height="100%">
		<PieChart width={400} height={300}>
			<Pie
				data={data}
				cx="50%"
				cy="50%"
				labelLine={false}
				label={renderCustomizedLabel}
				outerRadius={80}
				fill="#8884d8"
				dataKey="totalExpense"
				nameKey={"category"}
			>
				{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
			<Legend
				verticalAlign="bottom"
				iconType="rect"
				formatter={(value) => <span style={{ color: "black" }}>{value}</span>}
			/>
		</PieChart>
		// </ResponsiveContainer>
	);
};

export default PieChartSection;
