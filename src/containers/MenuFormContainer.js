import { connect } from "react-redux";
import MenuForm from "../components/MenuForm";
// import { addItem } from "../store/TipCalculator/actions/actions";
// const mapDispatchToProps = { onSubmit: (name, price) => dispatch(addItem(name, price)) };

// Connect API will autmatically pass dispatch function

// const mapStateToProps = (state) => {
// 	return {
// 		items: state.menu,
// 	};
// };

export const MenuFormContainer = connect()(MenuForm);
// export const MenuFormContainer = connect(mapStateToProps, mapDispatchToProps)(MenuForm);
