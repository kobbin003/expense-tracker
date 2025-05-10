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
				createdAt: "",
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
					createdAt: toEditExpense.createdAt,
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

		// if the price is more than the balance, disallow add or edit:
		if (expense.price > balance) {
			enqueueSnackbar("Insufficient fund", { variant: "error" });
			return;
		}
		if (type == "add") {
			// add an id to the expense:
			expense.id = nanoid();
			setExpenses((prev) => [...prev, expense]);

			// empty the form for the next expense to add
			setExpense({
				title: "",
				price: "",
				category: "",
				createdAt: "",
			});
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
							createdAt: expense.createdAt,
						};
					} else {
						return item;
					}
				});
			});
			enqueueSnackbar("succesfully edited!", { variant: "success" });
			setModalInfo(() => ({
				isOpen: false,
				formContentType: "",
				editItemId: "",
			}));
		}
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
				{/* <input
					type="text"
					name="category"
					id="category"
					value={expense.category}
					onChange={onChangeHandler}
					placeholder="Select Category"
					required
				/> */}
				<FormControl fullWidth>
					<InputLabel id="category-label">category</InputLabel>
					<Select
						labelId="category-label"
						id="category"
						value={expense.category}
						label="category"
						name="category"
						onChange={onChangeHandler}
						autoWidth
						sx={{ width: "100px" }}
					>
						{categories.map(({ label }) => (
							<MenuItem value={label}>{label}</MenuItem>
						))}
					</Select>
				</FormControl>
				<input
					type="date"
					name="createdAt"
					id="createdAt"
					value={expense.createdAt}
					onChange={onChangeHandler}
					placeholder=""
					required
				/>
				<button type="submit">Add Expense</button>
				<button onClick={handleCancel}>Cancel</button>
			</form>
		</div>
	);
};

export default ExpenseForm;
