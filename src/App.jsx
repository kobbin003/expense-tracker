import { Box, Grid } from "@mui/material";
import "./App.css";
import ExpensesCard from "./components/cards/ExpensesCard";
import WalletbalanceCard from "./components/cards/WalletbalanceCard";
import BarChartSection from "./components/charts/BarChartSection";
import PieChartSection from "./components/charts/PieChartSection";
import Modal from "./components/Modal";
import RecentTransactionsLists from "./components/RecentTransactionsSection/RecentTransactionsLists";

function App() {
	return (
		<>
			<Modal />

			<main>
				<div
					style={{ height: "50vh", display: "flex", flexDirection: "column" }}
				>
					<h1 style={{ height: "50px", paddingY: "2em" }}>Expense Tracker</h1>
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
						<h2 style={{ paddingBottom: "0.2em" }}>
							<i>Recent Transactions</i>
						</h2>
						<RecentTransactionsLists />
					</Grid>
					<Grid size={{ xs: 13, md: 5 }}>
						<h2 style={{ paddingBottom: "0.2em" }}>
							<i>Top Expenses</i>
						</h2>
						<BarChartSection />
					</Grid>
				</Grid>
			</main>
		</>
	);
}

export default App;
