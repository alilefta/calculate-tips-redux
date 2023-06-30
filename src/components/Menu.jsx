/* eslint-disable no-unused-vars */

import MenuForm from "./MenuForm";
import MenuList from "./MenuList";
import TipCalculator from "./TipCalculator";
const Menu = () => {
	return (
		<div className="container menu-section">
			<MenuForm />
			<MenuList />
			<TipCalculator />
		</div>
	);
};

export default Menu;
