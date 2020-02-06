import { CHANGE_CURRENT_PHRASE, INCREASE_TEAM_POINT } from './actionTypes';

export const changeCurrentPhrase = (currentPhrase: string) => {
  return {
    type: CHANGE_CURRENT_PHRASE,
    currentPhrase,
  };
};

export const increaseTeamPoint = (team: string) => {
  return {
    type: INCREASE_TEAM_POINT,
    team,
  };
};
