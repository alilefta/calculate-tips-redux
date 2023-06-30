import { ADD_ITEM, REMOVE_ITEM } from "../actions/actions";

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
};

export const reducer = (state = initialState, action) => {
	if (action.type === ADD_ITEM) {
		return {
			...state,
			menu: [
				...state.menu,
				{
					uuid: id++,
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

	return state;
};
