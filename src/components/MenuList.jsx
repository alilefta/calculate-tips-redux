/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { MenuItemContainer } from "../containers/MenuItemContainer";
const MenuList = ({ items }) => {
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
					items.map((item) => <MenuItemContainer key={item.uuid} {...item} />)
				) : (
					<p>No Items were found</p>
				)}
			</ul>
		</div>
	);
};

export default MenuList;
