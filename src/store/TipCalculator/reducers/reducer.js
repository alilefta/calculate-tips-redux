import {
	ADD_ITEM,
	ITEM_PRICE_UPDATED,
	ITEM_QUANTITY_UPDATED,
	REMOVE_ITEM,
	TIP_UPDATED,
} from "../actions/actions";

let id = 1;
const initialState = {
	menu: [
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
	],
	tipPercentage: 20,
};

export const reducer = (state = initialState, action) => {
	if (action.type === ADD_ITEM) {
		return {
			...state,
			menu: [
				...state.menu,
				{
					uuid: id++,
					quantity: 1,
					...action.payload,
				},
			],
		};
	}

	if (action.type === REMOVE_ITEM) {
		return {
			...state,
			menu: state.menu.filter((item) => item.uuid !== action.payload),
		};
	}

	if (action.type === ITEM_PRICE_UPDATED) {
		const updatedMenu = state.menu.map((item) => {
			if (item.uuid === action.payload.uuid) {
				return { ...item, price: action.payload.price };
			} else {
				return item;
			}
		});

		return {
			...state,
			menu: updatedMenu,
		};
	}

	if (action.type === ITEM_QUANTITY_UPDATED) {
		const updatedMenu = state.menu.map((item) => {
			if (item.uuid === action.payload.uuid) {
				return { ...item, quantity: action.payload.quantity };
			} else {
				return item;
			}
		});

		return {
			...state,
			menu: updatedMenu,
		};
	}

	if (action.type === TIP_UPDATED) {
		return {
			...state,
			tipPercentage: action.payload,
		};
	}

	// Calculate tips and total
	return state;
};
