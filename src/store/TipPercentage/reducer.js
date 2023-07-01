import { TIP_UPDATED } from "./actions";

const initialState = 20;

export const tipPercentageReducer = (state = initialState, action) => {
	if (action.type === TIP_UPDATED) {
		return action.payload;
	}

	return state;
};
