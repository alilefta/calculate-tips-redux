/* eslint-disable no-unused-vars */
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
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
