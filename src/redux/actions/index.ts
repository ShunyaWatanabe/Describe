import {
  CHANGE_CURRENT_PHRASE,
  INCREASE_TEAM_POINT,
  RESET_POINTS,
} from './actionTypes';

const changeCurrentPhrase = (currentPhrase: string) => {
  return {
    type: CHANGE_CURRENT_PHRASE,
    currentPhrase,
  };
};

const increaseTeamPoint = (team: number) => {
  return {
    type: INCREASE_TEAM_POINT,
    team,
  };
};

const resetPoints = () => {
  return {
    type: RESET_POINTS,
  };
};

export default {
  changeCurrentPhrase,
  increaseTeamPoint,
  resetPoints,
};
