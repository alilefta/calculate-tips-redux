/* eslint-disable no-unused-vars */
import { MenuListContainer } from "../containers/MenuListContainer";
import { MenuFormContainer } from "../containers/MenuFormContainer";
import { TipSelectContainer } from "../containers/TipSelectContainer";
import { SummaryContainer } from "../containers/SummaryContainer";
const Menu = () => {
	return (
		<div className="container menu-section">
			<MenuFormContainer />
			<MenuListContainer />
			<TipSelectContainer />
			<SummaryContainer />
		</div>
	);
};

export default Menu;
