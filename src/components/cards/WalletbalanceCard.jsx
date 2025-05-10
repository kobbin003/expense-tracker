import React from "react";
import AmountDisplayCard from "./AmountDisplayCard";
import { useExpenseContext } from "../../provider/ExpenseProvider";

const WalletbalanceCard = () => {
	const { setModalInfo, balance } = useExpenseContext();

	const handleAddIncome = () => {
		setModalInfo({ isOpen: true, formContentType: "addBalance" });
	};

	return (
		<AmountDisplayCard
			title="Wallet Balance"
			value={balance}
			btnTitle={"+ Add Income"}
			clickHandler={handleAddIncome}
		/>
	);
};

export default WalletbalanceCard;
