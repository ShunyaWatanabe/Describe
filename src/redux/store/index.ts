import { createStore } from 'redux';

interface Action {
  type: string;
}

function counter(state = 0, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default createStore(counter);
