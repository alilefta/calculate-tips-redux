import { createSelector } from "reselect";

export const selectItem = (state, props) =>
	state.menu.find((item) => item.uuid === props.uuid);
export const selectItems = (state) => state.menu;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectItemTotal = createSelector(
	[selectItem],
	(item) => item.price * item.quantity
);

export const selectSubTotal = createSelector([selectItems], (items) =>
	items.reduce(
		(total, currentItem) => total + currentItem.price * currentItem.quantity,
		0
	)
);

export const selectTipAmount = createSelector(
	[selectSubTotal, selectTipPercentage],
	(subTotal, tipPercentage) => (tipPercentage / 100) * subTotal
);

export const selectTotal = createSelector(
	[selectSubTotal, selectTipAmount],
	(subTotal, tipAmount) => subTotal + tipAmount
);
