import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const expenseContext = createContext();

export const useExpenseContext = () => useContext(expenseContext);

/**
 * expense = {
 *  id:"",
 *  title:"",
 *  price: 0,
 *  category:"",
 *  createdAt:Date()
 * }
 */

/** 
formContentType are:
1. addBalance
2. addExpense
3. editExpense
*/

export const ExpenseProvider = ({ children }) => {
	const [expenses, setExpenses] = useState(() => {
		const storedExpenses = localStorage.getItem("expenses");
		if (storedExpenses) {
			const storedExpensesParsed = JSON.parse(storedExpenses);
			if (Array.isArray(storedExpensesParsed)) {
				return storedExpensesParsed;
			} else {
				return [];
			}
		} else {
			// initiate the expenses key
			localStorage.setItem("expenses", JSON.stringify([]));
			return [];
		}
	});

	const [balance, setBalance] = useState(() => {
		const storedBalance = localStorage.getItem("balance");
		if (storedBalance !== null) {
			return JSON.parse(storedBalance);
		} else {
			// initiate the balance key: A default wallet balance of 5000
			localStorage.setItem("balance", "5000");
			return 5000;
		}
	});

	const [modalInfo, setModalInfo] = useState({
		isOpen: false,
		formContentType: "",
		editItemId: "", // will only be required in case of editing expense
	});

	// update the expenses-localStorage on expenses change
	// as well as the balance-localStorage
	useEffect(() => {
		const prevExpenses = JSON.parse(localStorage.getItem("expenses"));
		const prevExpensesTotal = prevExpenses.reduce((acc, { price }) => {
			return acc + price;
		}, 0);

		const newExpenses = expenses;
		const newExpensesTotal = newExpenses.reduce((acc, { price }) => {
			return acc + price;
		}, 0);

		const diff = newExpensesTotal - prevExpensesTotal;
		const remainingBalance = JSON.parse(localStorage.getItem("balance"));

		localStorage.setItem("expenses", JSON.stringify(expenses));
		localStorage.setItem("balance", JSON.stringify(remainingBalance - diff));
		setBalance(remainingBalance - diff);
	}, [expenses]);

	// update the balance-localstorage on balance change
	useEffect(() => {
		// console.log("balance-change: ", balance);
		localStorage.setItem("balance", JSON.stringify(balance));
	}, [balance]);

	return (
		<expenseContext.Provider
			value={{
				expenses,
				setExpenses,
				modalInfo,
				setModalInfo,
				balance,
				setBalance,
			}}
		>
			{children}
		</expenseContext.Provider>
	);
};
