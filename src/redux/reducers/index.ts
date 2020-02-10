import { combineReducers } from 'redux';
import { phrases } from 'src/data';

import {
  CHANGE_CURRENT_PHRASE,
  INCREASE_TEAM_POINT,
  RESET_POINTS,
} from '../actions/actionTypes';

const currentPhrase = (state: string = 'start', action: any) => {
  switch (action.type) {
    case CHANGE_CURRENT_PHRASE: {
      const themes = Object.keys(phrases);
      const theme = themes[Math.floor(Math.random() * themes.length)];
      const phrase =
        phrases[theme][Math.floor(Math.random() * phrases[theme].length)];
      return phrase;
    }
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
    case RESET_POINTS:
      return [0, 0];
    default:
      return state;
  }
};

const reducer = combineReducers({
  currentPhrase,
  points,
});

export default reducer;
