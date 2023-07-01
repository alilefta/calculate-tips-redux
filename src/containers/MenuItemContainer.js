import { connect } from "react-redux";
import MenuItem from "../components/MenuItem";
import {
	ITEM_PRICE_UPDATED,
	ITEM_QUANTITY_UPDATED,
	REMOVE_ITEM,
} from "../store/menu/actions";
import { selectItemTotal } from "../store/selectors";

const mapStateToProps = (state, ownProps) => {
	const totalPrice = selectItemTotal(state, ownProps);
	return { totalPrice: totalPrice.toFixed(2) };
};
const mapDispatchToProps = (dispatch, ownProps) => {
	// this function also provide a second parameter "ownProps" props that can be used to access the props of the component
	return {
		remove: () => dispatch({ type: REMOVE_ITEM, payload: ownProps.uuid }),
		updatePrice: (price) =>
			dispatch({
				type: ITEM_PRICE_UPDATED,
				payload: { price: price, uuid: ownProps.uuid },
			}),
		updateQuantity: (quantity) =>
			dispatch({
				type: ITEM_QUANTITY_UPDATED,
				payload: { quantity: quantity, uuid: ownProps.uuid },
			}),
	};
};

export const MenuItemContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuItem);
