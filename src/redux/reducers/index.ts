import { combineReducers } from 'redux';
import data from 'src/data/data.json';

import {
  CHANGE_CURRENT_PHRASE,
  INCREASE_TEAM_POINT,
} from '../actions/actionTypes';

const currentPhrase = (state: string = 'start', action: any) => {
  switch (action.type) {
    case CHANGE_CURRENT_PHRASE:
      return data.phrases[Math.floor(Math.random() * data.phrases.length)];
    default:
      return state;
  }
};

const points = (state: number[] = [0, 0], action: any) => {
  switch (action.type) {
    case INCREASE_TEAM_POINT: {
      const ret = [...state];
      ret[action.team] += 1;
      return ret;
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  currentPhrase,
  points,
});

export default reducer;
