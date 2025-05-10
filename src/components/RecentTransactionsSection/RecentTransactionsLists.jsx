import React from "react";
import { useExpenseContext } from "../../provider/ExpenseProvider";
import {
	Container,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Pagination,
} from "@mui/material";
import { LuPencil, LuPuzzle } from "react-icons/lu";
import { LuCircleX } from "react-icons/lu";
import { LuArrowLeft } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import { categories } from "../forms/categories";

const RecentTransactionsLists = () => {
	const { expenses, setExpenses, setModalInfo } = useExpenseContext();

	const handleDeleteItem = (id) => {
		setExpenses((prev) => prev.filter((expense) => expense.id != id));
	};

	const handleEditItem = (id) => {
		setModalInfo({
			isOpen: true,
			formContentType: "editExpense",
			editItemId: id,
		});
	};
	return (
		<>
			{expenses.length > 0 ? (
				<>
					<List>
						{expenses.map(({ id, title, price, category, createdAt }) => {
							const categoryFound = categories.find(
								({ label }) => label === category
							);
							// if category not found in the list, then use a miscellaneous icon for it.
							const Icon = categoryFound ? categoryFound.Icon : LuPuzzle;

							return (
								<ListItem key={id}>
									<ListItemIcon>
										<Icon />
									</ListItemIcon>
									<ListItemText primary={title} secondary={createdAt} />
									<ListItemText primary={`\u20B9 ${price}`} />
									<ListItemButton onClick={() => handleDeleteItem(id)}>
										<ListItemIcon>
											<LuCircleX />
										</ListItemIcon>
									</ListItemButton>
									<ListItemButton onClick={() => handleEditItem(id)}>
										<ListItemIcon>
											<LuPencil />
										</ListItemIcon>
									</ListItemButton>
								</ListItem>
							);
						})}
					</List>
					{/* <div className="pagination">
						<LuArrowLeft />
						<p></p>
						<LuArrowRight />
					</div> */}
					<Container
						sx={{
							backgroundColor: "pink",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Pagination count={1} />
					</Container>
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default RecentTransactionsLists;
