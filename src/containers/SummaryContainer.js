import { connect } from "react-redux";
import Summary from "../components/Summary";

const mapStateToProps = (state) => {
	const subTotal = state.menu.reduce(
		(total, currentItem) => total + currentItem.price * currentItem.quantity,
		0
	);
	const tipAmount = (state.tipPercentage / 100) * subTotal;

	const total = subTotal + tipAmount;
	console.log(typeof total);

	return {
		subTotal: parseFloat(subTotal.toFixed(2)),
		tipAmount: parseFloat(tipAmount.toFixed(2)),
		total: parseFloat(total.toFixed(2)),
	};
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
