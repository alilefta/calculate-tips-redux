/* eslint-disable no-unused-vars */
import { connect } from "react-redux";
import TipSelect from "../components/TipSelect";

import { updateTip } from "../store/TipCalculator/actions/actions";

const mapStateToProps = (state) => {
	return {
		tipPercentage: state.tipPercentage,
	};
};

const mapDispatchToProps = {
	updateTip,
};

export const TipSelectContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TipSelect);
