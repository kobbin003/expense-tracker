import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";

const AmountDisplayCard = ({ title, value, btnTitle, clickHandler }) => {
	return (
		<Card
			variant="outlined"
			sx={{
				backgroundColor: "var(--light-grey-background)",
			}}
		>
			<CardContent
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{title}:
				<span
					style={{
						color: `${
							btnTitle.toLowerCase().includes("income") ? "#9DFF5B" : "#F4BB4A"
						}`,
					}}
				>
					&#8377;{value}
				</span>
			</CardContent>
			<CardActions
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Button
					variant="contained"
					onClick={clickHandler}
					sx={{
						// backgroundColor: "#89E148",
						background: `${
							btnTitle.toLowerCase().includes("income")
								? "linear-gradient(to right, #B5DC52,#89E148)"
								: "linear-gradient(to right, #FF9595,#FF4747,#FF3838)"
						}`,
					}}
				>
					{btnTitle}
				</Button>
			</CardActions>
		</Card>
	);
};

export default AmountDisplayCard;
