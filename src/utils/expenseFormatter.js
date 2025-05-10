// forma the expenses such it categories the expenses according to the category
export const formatExpensesByCategory = (expenses) => {
	return expenses.reduce(
		(acc, expense) => {
			let categoryInfo;
			switch (expense.category) {
				case "Food":
					categoryInfo = acc.find(({ category }) => category == "Food");
					if (categoryInfo) {
						categoryInfo.totalExpense += expense.price;
					}
					break;
				case "Entertainment":
					categoryInfo = acc.find(
						({ category }) => category == "Entertainment"
					);
					if (categoryInfo) {
						categoryInfo.totalExpense += expense.price;
					}
					break;
				case "Travel":
					categoryInfo = acc.find(({ category }) => category == "Travel");
					if (categoryInfo) {
						categoryInfo.totalExpense += expense.price;
					}
					break;

				default:
					break;
			}
			return acc;
		},
		[
			{ category: "Food", totalExpense: 0 },
			{ category: "Entertainment", totalExpense: 0 },
			{ category: "Travel", totalExpense: 0 },
		]
	);
};

const expenses = [
	{
		title: "cola",
		price: 80,
		category: "Food",
		date: "2025-05-09",
		id: "mI-_n2bJy0AUYdcmIhwSW",
	},
	{
		title: "movie",
		price: 800,
		category: "Entertainment",
		date: "2025-05-09",
		id: "mI-_n2bJy0AUYdcmIhwSW",
	},
	{
		title: "pizza",
		price: 180,
		category: "Food",
		date: "2025-05-09",
		id: "mI-_n2bJy0AUYdcmIhwSW",
	},
	{
		title: "holiday",
		price: 280,
		category: "Travel",
		date: "2025-05-09",
		id: "mI-_n2bJy0AUYdcmIhwSW",
	},
	{
		title: "gaming",
		price: 1080,
		category: "Travel",
		date: "2025-05-09",
		id: "mI-_n2bJy0AUYdcmIhwSW",
	},
];

const res = formatExpensesByCategory(expenses);

console.log("res: ", res);
