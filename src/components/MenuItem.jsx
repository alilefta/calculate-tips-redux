/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { ADD_ITEM, REMOVE_ITEM } from "../../actions/actions";
import { useDispatch } from "react-redux";

const MenuItem = ({ uuid, name, price, quantity }) => {
	const dispatch = useDispatch();
	return (
		<li className="menu-item py-2 rounded-1 px-3 my-3">
			<h5 className="mt-2 mb-3">{name}</h5>
			<div className="row menu-item-info ">
				<div className="col-sm-3 ">
					<label htmlFor="menu-price" className="form-label ">
						Price
					</label>
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							$
						</span>
						<input
							type="number"
							className="form-control"
							placeholder="0"
							aria-label="0"
							aria-describedby="basic-addon1"
							id="menu-price"
							value={price}
							onChange={(e) => e}
						/>
					</div>
				</div>
				<div className="col-sm-3">
					<label htmlFor="menu-quantity" className="form-label ">
						Quantity
					</label>
					<input
						type="number"
						className="form-control"
						id="menu-quantity"
						placeholder="0"
						value={quantity}
						onChange={(e) => e}
					/>
				</div>
				<div className="total-price col-sm-2 offset-sm-4 text-center">
					<label htmlFor="total">Total</label>
					<p className="m-0 mt-2">$0.00</p>
				</div>
				<div className="col-sm-2 justify-content-end offset-sm-10">
					<button
						className="btn btn-outline-danger btn-sm "
						onClick={() => dispatch({ type: REMOVE_ITEM, payload: uuid })}
					>
						Remove
					</button>
				</div>
			</div>
		</li>
	);
};

export default MenuItem;
