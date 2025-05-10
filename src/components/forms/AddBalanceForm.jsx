import React, { useState } from "react";
import { useExpenseContext } from "../../provider/ExpenseProvider";

const AddBalanceForm = () => {
	const [income, setIncome] = useState("");

	const { setModalInfo, setBalance } = useExpenseContext();

	const handleOnChange = (e) => {
		setIncome(e.target.value);
	};

	const handleAddBalance = () => {
		setBalance((prev) => {
			const newBalance = Number(prev) + Number(income);
			return newBalance;
		});

		setModalInfo(() => ({ isOpen: false, formContentType: "" }));
	};

	const handleCancel = () => {
		setModalInfo(() => ({ isOpen: false, formContentType: "" }));
	};

	return (
		<form onSubmit={handleAddBalance}>
			<input
				type="number"
				name="income"
				id="income"
				value={income}
				placeholder="Income Amount"
				onChange={handleOnChange}
			/>
			<button type="submit">Add Balance</button>
			<button type="button" onClick={handleCancel}>
				Cancel
			</button>
		</form>
	);
};

export default AddBalanceForm;
