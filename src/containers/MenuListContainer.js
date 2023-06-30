import { connect } from "react-redux";
import MenuList from "../components/MenuList";

const mapStateToProps = (state) => {
	return {
		items: state.menu,
	};
};

export const MenuListContainer = connect(mapStateToProps)(MenuList);
