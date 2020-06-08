const redux = require("redux");

const initialState = {
	counter: 0,
};

const addCounter = {
	type: "ADD",
};

const subCounter = {
	type: "SUB",
};

const addNumber = {
    type: "ADD_NUMBER",
    value: 10,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case addCounter.type:
			return {
				counter: state.counter + 1,
			};
		case subCounter.type:
			return {
				counter: state.counter - 1,
			};
		case addNumber.type:
			return {
				counter: addNumber.value,
			};
		default:
			return state;
	}
};

const store = redux.createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addCounter);

store.dispatch(subCounter);

store.dispatch(addNumber);
