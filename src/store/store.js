/* eslint-disable no-unused-vars */
import {
	compose,
	createStore,
	bindActionCreators,
	applyMiddleware,
	combineReducers,
} from "redux";
import { menuReducer } from "./menu/reducer";
import { tipPercentageReducer } from "./TipPercentage/reducer";
export const enhancer =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
	menu: menuReducer,
	tipPercentage: tipPercentageReducer,
});
export const store = createStore(rootReducer, enhancer);
