import { connect } from "react-redux";
import Summary from "../components/Summary";
import {
	selectSubTotal,
	selectTipAmount,
	selectTotal,
} from "../store/selectors";

const mapStateToProps = (state) => {
	const subTotal = selectSubTotal(state);
	const tipAmount = selectTipAmount(state);
	const total = selectTotal(state);
	return {
		subTotal: parseFloat(subTotal.toFixed(2)),
		tipAmount: parseFloat(tipAmount.toFixed(2)),
		total: parseFloat(total.toFixed(2)),
	};
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
