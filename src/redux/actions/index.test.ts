import actions from './index';
import {
  CHANGE_CURRENT_PHRASE,
  INCREASE_TEAM_POINT,
  RESET_POINTS,
} from './actionTypes';

describe('src/redux/actions', () => {
  describe('changeCurrentPhrase', () => {
    it('should return proper action object', () => {
      const currentPhrase = 'changeCurrentPhrase';
      const expected = {
        type: CHANGE_CURRENT_PHRASE,
        currentPhrase,
      };
      const received = actions.changeCurrentPhrase(currentPhrase);
      expect(received).toEqual(expected);
    });
  });

  describe('increaseTeamPoint', () => {
    it('should return proper action object', () => {
      const team = 0;
      const expected = {
        type: INCREASE_TEAM_POINT,
        team,
      };
      const received = actions.increaseTeamPoint(team);
      expect(received).toEqual(expected);
    });
  });

  describe('resetPoints', () => {
    it('should return proper action object', () => {
      const expected = {
        type: RESET_POINTS,
      };
      const received = actions.resetPoints();
      expect(received).toEqual(expected);
    });
  });
});
