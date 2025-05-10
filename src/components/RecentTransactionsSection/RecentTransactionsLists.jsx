import React from "react";
import { useExpenseContext } from "../../provider/ExpenseProvider";
import {
	Avatar,
	Box,
	Button,
	Container,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
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
			<Box
				sx={{
					backgroundColor: "var(--white)",
					paddingX: "0.5em",
					maxHeight: "50vh",
					overflowY: "scroll",
					borderRadius: "10px",
				}}
			>
				{expenses.length > 0 ? (
					<>
						<List>
							{expenses.map(({ id, title, price, category, date }) => {
								const categoryFound = categories.find(
									({ label }) => label === category
								);
								// if category not found in the list, then use a miscellaneous icon for it.
								const Icon = categoryFound ? categoryFound.Icon : LuPuzzle;

								return (
									<>
										<ListItem
											key={id}
											sx={{
												display: "flex",
												// flexDirection: "row",
												justifyContent: "space-between",
											}}
										>
											<Box
												sx={{
													// backgroundColor: "orangered",
													display: "flex",
													alignItems: "center",
												}}
											>
												<ListItemAvatar>
													<Avatar>
														<Icon color="black" />
													</Avatar>
												</ListItemAvatar>
												<ListItemText primary={title} secondary={date} />
											</Box>
											<Box
												sx={{
													display: "flex",
													// backgroundColor: "violet",
													alignItems: "center",
													justifyContent: "flex-end",
													gap: "0.5em",
												}}
											>
												<ListItemText
													primary={`\u20B9 ${price}`}
													sx={{ color: "#F4BB4A", marginRight: "1em" }}
												/>
												<IconButton
													variant="contained"
													sx={{ backgroundColor: "#FF3E3E" }}
													onClick={() => handleDeleteItem(id)}
												>
													{/* <ListItemIcon> */}
													<LuCircleX color="white" />
													{/* </ListItemIcon> */}
												</IconButton>
												<IconButton
													// sx={{ width: "fit-content" }}
													sx={{ backgroundColor: "#F4BB4A" }}
													onClick={() => handleEditItem(id)}
												>
													{/* <ListItemIcon> */}
													<LuPencil color="white" />
													{/* </ListItemIcon> */}
												</IconButton>
											</Box>
										</ListItem>
										<Divider variant="fullWidth" component="li" />
									</>
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
								// backgroundColor: "pink",
								display: "flex",
								justifyContent: "center",
								paddingY: "0.5em",
							}}
						>
							<Pagination count={1} />
						</Container>
					</>
				) : (
					<>
						<Container
							sx={{
								// backgroundColor: "pink",
								display: "flex",
								justifyContent: "center",
								paddingY: "0.5em",
							}}
						>
							<Pagination count={1} />
						</Container>
					</>
				)}
			</Box>
		</>
	);
};

export default RecentTransactionsLists;
