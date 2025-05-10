import { Container } from "@mui/material";
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useExpenseContext } from "../../provider/ExpenseProvider";
import { formatExpensesByCategory } from "../../utils/expenseFormatter";

// const data = [
// 	{ category: "Food", value: 400 },
// 	{ category: "Entertainment", value: 300 },
// 	{ category: "Travel", value: 300 },
// ];
const BarChartSection = () => {
	const { expenses } = useExpenseContext(); // expenses is the data
	// return <div>PieChartSection</div>;
	const data = formatExpensesByCategory(expenses);
	console.log("formatted-data: ", data);
	return (
		<Container>
			<BarChart
				width={250}
				height={240}
				data={data}
				layout="vertical"
				margin={{ top: 20, right: 20, bottom: 20, left: 80 }}
			>
				<XAxis type="number" hide />
				<YAxis
					type="category"
					dataKey="category"
					axisLine={false}
					tickLine={false}
				/>
				<Bar dataKey="totalExpense" fill="#8884d8" />
			</BarChart>
		</Container>
	);
};

export default BarChartSection;
