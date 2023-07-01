/* eslint-disable no-unused-vars */
import React from "react";
import { PropTypes } from "prop-types";
const Summary = ({ subTotal, tipAmount, total }) => {
	return (
		<div className="my-3">
			<div className="row text-center mt-3">
				<div className="col-sm-5 offset-sm-2 text-end mr-2">
					<p className="sub-total my-1">SubTotal</p>
				</div>
				<div className="col-sm-2 offset-sm-3 text-start">
					<p className="my-1">${subTotal}</p>
				</div>
			</div>
			<div className="row text-center ">
				<div className="col-sm-5 offset-sm-2 text-end">
					<p className="sub-total my-1">Tip Amount</p>
				</div>
				<div className="col-sm-2 offset-sm-3 text-start">
					<p className="my-1">${tipAmount}</p>
				</div>
			</div>
			<div className="row text-center ">
				<div className="col-sm-5 offset-sm-2 text-end">
					<p className="sub-total my-1">Total</p>
				</div>
				<div className="col-sm-2 offset-sm-3 text-start">
					<p className="my-1">${total}</p>
				</div>
			</div>
		</div>
	);
};

Summary.propTypes = {
	subTotal: PropTypes.number.isRequired,
	tipAmount: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
};

export default Summary;
