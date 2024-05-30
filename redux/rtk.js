import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const increase = createAction("INC");
const decrease = createAction("DEC");

const reducer = createReducer(10, (builder) => {
  return builder
    .addCase(increase, (state, { payload }) => state + payload)
    .addCase(decrease, (state, { payload }) => state - payload);
});

const store = configureStore({
  reducer,
});

const { getState, dispatch, subscribe } = store;

const value = document.getElementById("value");

function render() {
  value.textContent = getState();
}
render();

subscribe(render);

document.getElementById("inc").addEventListener("click", () => {
  dispatch(increase(1));
});

document.getElementById("inc2").addEventListener("click", () => {
  dispatch(increase(2));
});

document.getElementById("inc3").addEventListener("click", () => {
  dispatch(increase(3));
});

document.getElementById("inc-if-odd").addEventListener("click", () => {
  if (getState() % 2) {
    dispatch(increase(1));
  }
});

document.getElementById("dec").addEventListener("click", () => {
  dispatch(decrease(1));
});

document.getElementById("dec-async").addEventListener("click", () => {
  setTimeout(() => dispatch(decrease(1)), 1000);
});
