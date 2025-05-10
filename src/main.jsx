import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ExpenseProvider } from "./provider/ExpenseProvider.jsx";
import { SnackbarProvider } from "notistack";
import Modal from "react-modal";

/** This line is required else you will get this warning message:
 * Warning: react-modal: App element is not defined.
 * Please use Modal.setAppElement(el) or set appElement={el}.
 * This is needed so screen readers don't see main content when modal is opened.
 * It is not recommended, but you can opt-out by setting ariaHideApp={false}.
 */
Modal.setAppElement("#root"); // If your app root div has id="root"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<SnackbarProvider autoHideDuration={3000}>
			<ExpenseProvider>
				<App />
			</ExpenseProvider>
		</SnackbarProvider>
	</StrictMode>
);
