import {
	ADD_ITEM,
	ITEM_PRICE_UPDATED,
	ITEM_QUANTITY_UPDATED,
	REMOVE_ITEM,
} from "./actions";

let id = 1;
const initialState = [
	{
		uuid: id++,
		name: "Pizza Margerita",
		price: 30,
		quantity: 1,
	},
	{
		uuid: id++,
		name: "Tofu ",
		price: 20,
		quantity: 1,
	},
];

export const menuReducer = (state = initialState, action) => {
	if (action.type === ADD_ITEM) {
		return [
			...state,
			{
				uuid: id++,
				quantity: 1,
				...action.payload,
			},
		];
	}

	if (action.type === REMOVE_ITEM) {
		return [...state.filter((item) => item.uuid !== action.payload)];
	}

	if (action.type === ITEM_PRICE_UPDATED) {
		const updatedMenu = state.map((item) => {
			if (item.uuid === action.payload.uuid) {
				return { ...item, price: action.payload.price };
			} else {
				return item;
			}
		});

		return [...updatedMenu];
	}

	if (action.type === ITEM_QUANTITY_UPDATED) {
		const updatedMenu = state.map((item) => {
			if (item.uuid === action.payload.uuid) {
				return { ...item, quantity: action.payload.quantity };
			} else {
				return item;
			}
		});

		return [...updatedMenu];
	}

	return state;
};
