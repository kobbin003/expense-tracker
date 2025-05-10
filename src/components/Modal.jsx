import React from "react";
import ReactModal from "react-modal";
import { useExpenseContext } from "../provider/ExpenseProvider";
import AddBalanceForm from "./forms/AddBalanceForm";
import ExpenseForm from "./forms/ExpenseForm";

const Modal = () => {
	const { modalInfo } = useExpenseContext();
	console.log("modal-component........");
	const modalContentMap = {
		addBalance: <AddBalanceForm />,
		addExpense: <ExpenseForm type="add" />,
		editExpense: <ExpenseForm type="edit" />,
	};

	return (
		<ReactModal
			isOpen={
				modalInfo.isOpen
				/* Boolean describing if the modal should be shown or not. */
			}
		>
			<p>Modal Content</p>
			{modalContentMap[modalInfo.formContentType]}
		</ReactModal>
	);
};
// const Modal = () => {
// 	const { modalInfo } = useExpenseContext();
// 	console.log("modal-component........");

// 	return (
// 		<ReactModal
// 			isOpen={
// 				modalInfo.isOpen
// 				/* Boolean describing if the modal should be shown or not. */
// 			}
// 		>
// 			<p>Modal Content</p>
// 			{modalInfo.formContentType === "addBalance" ? <AddBalanceForm /> : <></>}
// 			{modalInfo.formContentType === "addExpense" ? (
// 				<ExpenseForm type="add" />
// 			) : (
// 				<></>
// 			)}
// 			{modalInfo.formContentType === "editExpense" ? (
// 				<ExpenseForm type="edit" />
// 			) : (
// 				<></>
// 			)}
// 		</ReactModal>
// 	);
// };

export default Modal;
