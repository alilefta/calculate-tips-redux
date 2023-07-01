/* eslint-disable no-unused-vars */

import "./App.css";
import Menu from "./components/Menu";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Menu />
			</div>
		</Provider>
	);
}

export default App;
