/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ADD_ITEM } from "../store/menu/actions";
import { PropTypes } from "prop-types";
const MenuForm = ({ dispatch }) => {
	const [recipeData, setRecipeData] = useState({
		name: "",
		price: 0.0,
	});
	return (
		<form className="mt-4 m-3 text-start">
			<div className="mb-3">
				<label htmlFor="menu-item" className="form-label ">
					Recipe
				</label>
				<input
					type="text"
					className="form-control"
					id="menu-item"
					placeholder="Recipe Name"
					value={recipeData.name}
					onChange={(e) =>
						setRecipeData({ ...recipeData, name: e.target.value })
					}
				/>
			</div>
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
					value={recipeData.price}
					onChange={(e) =>
						setRecipeData({ ...recipeData, price: e.target.value })
					}
				/>
			</div>
			<div className="d-grid gap-2">
				<button
					className="btn btn-primary"
					type="button"
					onClick={(_) => {
						dispatch({
							type: ADD_ITEM,
							payload: {
								...recipeData,
							},
						});
						setRecipeData({ name: "", price: 0.0 });
					}}
					disabled={
						recipeData.name.length > 3 && parseInt(recipeData.price) > 0
							? false
							: true
					}
				>
					Add Item
				</button>
			</div>
		</form>
	);
};

MenuForm.propTypes = {
	dispatch: PropTypes.func,
};

export default MenuForm;
