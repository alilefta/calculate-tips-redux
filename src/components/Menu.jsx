/* eslint-disable no-unused-vars */
import TipSelect from "./TipSelect";
import { MenuListContainer } from "../containers/MenuListContainer";
import { MenuFormContainer } from "../containers/MenuFormContainer";
import { TipSelectContainer } from "../containers/TipSelectContainer";
const Menu = () => {
	return (
		<div className="container menu-section">
			<MenuFormContainer />
			<MenuListContainer />
			<TipSelectContainer />
		</div>
	);
};

export default Menu;
