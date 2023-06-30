/* eslint-disable no-unused-vars */
import React from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
const MenuList = () => {
	const items = useSelector((state) => state.menu);

	return (
		<div className="m-3">
			<h2>Menu</h2>

			<ul
				className="mt-2 mb-2"
				id="menu"
				role="menubar"
				style={{ padding: "0px" }}
			>
				{items && items.length > 0 ? (
					items.map((item) => <MenuItem key={item.uuid} {...item} />)
				) : (
					<p>No Items were found</p>
				)}
			</ul>
		</div>
	);
};

export default MenuList;
