import React, { useState } from "react";
import { useExpenseContext } from "../../provider/ExpenseProvider";
import { nanoid } from "nanoid";
import { useSnackbar } from "notistack";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { categories } from "./categories";
//* if type == "create" -> show create button

//* if type == "edit" -> show edit button
const ExpenseForm = ({ type }) => {
	const { balance, setModalInfo, setExpenses, modalInfo, expenses } =
		useExpenseContext();
	const [expense, setExpense] = useState(() => {
		if (type == "add") {
			return {
				title: "",
				price: "",
				category: "",
				date: "",
			};
		} else {
			// TODO: if type == "edit", initialise the expense with the old data
			const toEditExpense = expenses.find(
				({ id }) => id === modalInfo.editItemId
			);
			if (!toEditExpense) {
				throw new Error(" some thing wrong: cannot find the edit item");
			} else {
				return {
					title: toEditExpense.title,
					price: toEditExpense.price,
					category: toEditExpense.category,
					date: toEditExpense.date,
				};
			}
		}
	});
	const { enqueueSnackbar } = useSnackbar();
	console.log("expense: ", expense);

	const onChangeHandler = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		console.log(key, "<->", value);
		setExpense((prev) => {
			// we have to convert the number string to Number number.
			if (key == "price") {
				return { ...prev, [key]: Number(value) };
			} else {
				return { ...prev, [key]: value };
			}
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// console.log("expense: ", expense);
		// return;

		// if the price is more than the balance, disallow add or edit:
		if (expense.price > balance) {
			enqueueSnackbar("Insufficient fund", { variant: "error" });
			return;
		}
		if (type == "add") {
			// add an id to the expense:
			expense.id = nanoid();
			setExpenses((prev) => [...prev, expense]);

			enqueueSnackbar("succesfully added!", { variant: "success" });
		} else {
			// edit
			setExpenses((prev) => {
				return prev.map((item) => {
					if (item.id === modalInfo.editItemId) {
						return {
							id: item.id,
							title: expense.title,
							price: expense.price,
							category: expense.category,
							date: expense.date,
						};
					} else {
						return item;
					}
				});
			});
			enqueueSnackbar("succesfully edited!", { variant: "success" });
		}

		// resetting the values and states:
		// empty the form for the next expense to add
		setExpense({
			title: "",
			price: "",
			category: "",
			date: "",
		});
		// close the modal
		setModalInfo(() => ({
			isOpen: false,
			formContentType: "",
			editItemId: "",
		}));
	};

	const handleCancel = () => {
		setModalInfo(() => ({
			isOpen: false,
			formContentType: "",
			editItemId: "",
		}));
	};

	return (
		<div>
			<h2>{type} expenses</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="title"
					id="title"
					value={expense.title}
					onChange={onChangeHandler}
					placeholder="Title"
					required
				/>
				<input
					type="number"
					name="price"
					id="price"
					value={expense.price}
					onChange={onChangeHandler}
					placeholder="Price"
					required
				/>
				<select
					id="category"
					value={expense.category}
					label="category"
					name="category"
					onChange={onChangeHandler}
					sx={{ width: "100px" }}
					required
				>
					<option value="" selected disabled>
						Select Category
					</option>
					{categories.map(({ label }) => (
						<option value={label}>{label}</option>
					))}
				</select>
				<input
					type="date"
					name="date"
					id="date"
					value={expense.date}
					onChange={onChangeHandler}
					placeholder=""
					required
				/>
				<button type="submit">Add Expense</button>
				<button type="button" onClick={handleCancel}>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default ExpenseForm;
