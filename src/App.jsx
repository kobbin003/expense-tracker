import { Box, Container, Grid, Stack } from "@mui/material";
import "./App.css";
import AmountDisplayCard from "./components/cards/AmountDisplayCard";
import ExpenseForm from "./components/forms/ExpenseForm";
import RecentTransactionsLists from "./components/RecentTransactionsSection/RecentTransactionsLists";
import RecentTransactionsSection from "./components/RecentTransactionsSection/RecentTransactionsSection";
import BarChartSection from "./components/charts/BarChartSection";
import Modal from "./components/Modal";
import WalletbalanceCard from "./components/cards/WalletbalanceCard";
import ExpensesCard from "./components/cards/ExpensesCard";
import PieChartSection from "./components/charts/PieChartSection";

function App() {
	return (
		<>
			<Modal />

			<main>
				<div
					style={{ height: "50vh", display: "flex", flexDirection: "column" }}
				>
					<h1 style={{ height: "50px" }}>Expense Tracker</h1>
					<Grid
						container
						columns={13}
						sx={{
							backgroundColor: "var(--grey-background)",
							display: "flex",
							flexGrow: "1",
							justifyContent: "space-between",
							alignItems: "center",
							paddingX: "2em",
							borderRadius: "10px",
						}}
					>
						<Grid size={{ xs: 13, md: 4 }}>
							<WalletbalanceCard />
						</Grid>
						<Grid size={{ xs: 13, md: 4 }}>
							<ExpensesCard />
						</Grid>
						<Grid size={{ xs: 13, md: 4 }}>
							<Box sx={{ flexGrow: "1", minHeight: "200px" }}>
								<PieChartSection />
							</Box>
						</Grid>
					</Grid>
				</div>
				<Grid
					container
					// gap={4}
					columns={13}
					height={"50vh"}
					sx={{
						// backgroundColor: "blueviolet",
						// paddingX: { xs: "1em", md: "2em" },
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Grid size={{ xs: 13, md: 7.7 }}>
						<RecentTransactionsSection />
					</Grid>
					<Grid size={{ xs: 13, md: 5 }}>
						<h2>Top Expenses</h2>
						<BarChartSection />
					</Grid>
				</Grid>
			</main>
		</>
	);
}

export default App;
