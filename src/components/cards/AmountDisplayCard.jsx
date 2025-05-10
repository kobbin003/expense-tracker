import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";

const AmountDisplayCard = ({ title, value, btnTitle, clickHandler }) => {
	return (
		<Card variant="outlined">
			<CardContent>
				{title}: &#8377;{value}
			</CardContent>
			<Button variant="contained" onClick={clickHandler}>
				{btnTitle}
			</Button>
			<CardActions></CardActions>
		</Card>
	);
};

export default AmountDisplayCard;
