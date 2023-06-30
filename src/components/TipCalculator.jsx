/* eslint-disable no-unused-vars */
import React from "react";

const TipCalculator = () => {
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
				defaultValue="20"
			>
				<option value="10">10%</option>
				<option value="20">20%</option>
				<option value="30">30%</option>
				<option value="40">40%</option>
				<option value="50">50%</option>
			</select>
		</div>
	);
};

export default TipCalculator;
