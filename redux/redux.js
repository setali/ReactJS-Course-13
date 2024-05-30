import { createStore } from "redux";

function reducer(state = 10, { type, payload }) {
  switch (type) {
    case "INC":
      return state + payload;

    case "DEC":
      return state - payload;

    default:
      return state;
  }
}

const store = createStore(reducer);

const { getState, dispatch, subscribe } = store;

const value = document.getElementById("value");

function render() {
  value.textContent = getState();
}
render();

subscribe(render);

function increase(payload) {
  return { type: "INC", payload };
}

function decrease(payload) {
  return { type: "DEC", payload };
}

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
