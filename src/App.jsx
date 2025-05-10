import { Container, Grid, Stack } from "@mui/material";
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
			<header>
				<h1>Expense Tracker</h1>
			</header>
			<main>
				<Grid
					container
					// gap={4}
					columns={13}
					// width={"full"}
					height={"40vh"}
					sx={{
						backgroundColor: "pink",
						paddingX: { xs: "1em", md: "2em" },
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Grid size={{ xs: 13, md: 4 }}>
						<WalletbalanceCard />
					</Grid>
					<Grid size={{ xs: 13, md: 4 }} sx={{ backgroundColor: "red" }}>
						<ExpensesCard />
					</Grid>
					<Grid size={{ xs: 13, md: 4 }} sx={{ backgroundColor: "yellow" }}>
						<PieChartSection />
					</Grid>
				</Grid>
				<Grid
					container
					// gap={4}
					columns={13}
					height={"40vh"}
					sx={{
						backgroundColor: "blueviolet",
						paddingX: { xs: "1em", md: "2em" },
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Grid size={{ xs: 13, md: 7.7 }} sx={{ backgroundColor: "green" }}>
						<RecentTransactionsSection />
					</Grid>
					<Grid
						size={{ xs: 13, md: 5 }}
						sx={{ backgroundColor: "blanchedalmond" }}
					>
						<h2>Top Expenses</h2>
						<BarChartSection />
					</Grid>
				</Grid>
				{/* <ExpenseForm /> */}
			</main>
		</>
	);
}

export default App;
