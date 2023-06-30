/* eslint-disable no-unused-vars */
import {
	compose,
	createStore,
	bindActionCreators,
	applyMiddleware,
	combineReducers,
} from "redux";
import "./App.css";
import Menu from "./components/Menu";
import { reducer } from "../reducers/reducers";
import { Provider } from "react-redux";

function App() {
	const store = createStore(reducer);
	return (
		<Provider store={store}>
			<div className="App">
				<Menu />
			</div>
		</Provider>
	);
}

export default App;
