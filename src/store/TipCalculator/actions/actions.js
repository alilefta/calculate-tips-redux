/* eslint-disable no-unused-vars */
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const ITEM_PRICE_UPDATED = "ITEM_PRICE_UPDATED";
export const TIP_UPDATED = "TIP_UPDATED";
export const ITEM_QUANTITY_UPDATED = "ITEM_QUANTITY_UPDATED";
export const addItem = (item) => ({
	type: ADD_ITEM,
	payload: {
		name: item.name,
		price: item.price,
	},
});

export const removeItem = (uuid) => ({
	type: REMOVE_ITEM,
	payload: uuid,
});

export const itemPriceUpdated = (price, uuid) => ({
	type: ITEM_PRICE_UPDATED,
	payload: { price, uuid },
});

export const itemQuantityUpdated = (quantity, uuid) => ({
	type: ITEM_QUANTITY_UPDATED,
	payload: { quantity, uuid },
});

export const updateTip = (tip) => ({
	type: TIP_UPDATED,
	payload: tip,
});
