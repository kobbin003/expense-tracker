import React from "react";
import { useExpenseContext } from "../../provider/ExpenseProvider";
import AmountDisplayCard from "./AmountDisplayCard";

const ExpensesCard = () => {
	const { setModalInfo, expenses } = useExpenseContext();

	const totalExpense = expenses.reduce((acc, { price }) => {
		return acc + price;
	}, 0);

	const handleAddExpense = () => {
		setModalInfo({ isOpen: true, formContentType: "addExpense" });
	};

	return (
		<AmountDisplayCard
			title="Expenses"
			value={totalExpense}
			btnTitle={"+ Add Expense"}
			clickHandler={handleAddExpense}
		/>
	);
};

export default ExpensesCard;
