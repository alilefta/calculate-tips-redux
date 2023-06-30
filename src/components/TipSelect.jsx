/* eslint-disable no-unused-vars */
import React from "react";
import { TIP_UPDATED } from "../store/TipCalculator/actions/actions";
import { PropTypes } from "prop-types";
const TipSelect = ({ tipPercentage, updateTip }) => {
	return (
		<div className="m-3 text-start">
			<label
				htmlFor="select-tip"
				className="my-2 "
				style={{
					fontSize: "0.9em",
				}}
			>
				How much tip would you like to pay?
			</label>
			<select
				className="form-select pt-1 pb-1"
				aria-label="Default select example"
				value={tipPercentage}
				onChange={(e) => updateTip(e.target.value)}
			>
				<option value="10">10%</option>
				<option value="20">20%</option>
				<option value="30">30%</option>
				<option value="40">40%</option>
				<option value="50">50%</option>
			</select>
			<div className="row text-center my-3">
				<div className="col-sm-6 offset-sm-3">
					<p className="sub-total">SubTotal</p>
				</div>
				<div className="col-sm-2 offset-sm-1">
					<p>$0.00</p>
				</div>
			</div>
		</div>
	);
};

TipSelect.propTypes = {
	updateTip: PropTypes.func,
	tipPercentage: PropTypes.number,
};

export default TipSelect;
