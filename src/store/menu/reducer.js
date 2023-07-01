import { produce } from "immer";
import {
	ADD_ITEM,
	ITEM_PRICE_UPDATED,
	ITEM_QUANTITY_UPDATED,
	REMOVE_ITEM,
} from "./actions";

let id = 1;
const initialMenu = [
	{
		uuid: id++,
		name: "Pizza Margerita",
		price: 30,
		quantity: 1,
	},
	{
		uuid: id++,
		name: "Kebab",
		price: 20,
		quantity: 1,
	},
];

export const menuReducer = produce((state, action) => {
	if (action.type === ADD_ITEM) {
		const item = { uuid: id++, quantity: 1, ...action.payload };
		state.push(item);
	}

	if (action.type === REMOVE_ITEM) {
		return state.filter((item) => item.uuid !== action.payload);
	}

	if (action.type === ITEM_PRICE_UPDATED) {
		const item = state.find((item) => item.uuid === action.payload.uuid);
		item.price = parseFloat(action.payload.price);
	}

	if (action.type === ITEM_QUANTITY_UPDATED) {
		const item = state.find((item) => item.uuid === action.payload.uuid);
		item.quantity = parseFloat(action.payload.quantity);
	}
}, initialMenu);
