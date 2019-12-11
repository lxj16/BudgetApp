import { createStore } from "redux";

//Action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy
});
const setCount = ({ count } = {}) => ({
  type: "SET",
  count: count
});
const resetCount = (payload = {}) => ({
  type: "RESET",
  count: 0
});

//reducers are pure function
//never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Action is an object

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());
store.dispatch({
  type: "RESET"
});
store.dispatch(setCount({ count: 1000 }));

store.dispatch(decrementCount({ decrementBy: 20 }));

store.dispatch(resetCount());
