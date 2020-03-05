import reducer from './index';
import {
  CHANGE_CURRENT_PHRASE,
  INCREASE_TEAM_POINT,
  RESET_POINTS,
} from '../actions/actionTypes';

describe('src/redux/reducers', () => {
  describe('currentPhrase', () => {
    it('should return a default value', () => {
      const actual = reducer(undefined, {});
      expect(actual).toMatchObject({
        currentPhrase: 'start',
      });
    });

    it('should return a random word if CHANGE_CURRENT_PHRASE', () => {
      const action = {
        type: CHANGE_CURRENT_PHRASE,
      };
      const actual = reducer(undefined, action);
      expect(actual.currentPhrase).not.toEqual('start');
    });
  });

  describe('points', () => {
    it('should return a default value', () => {
      const actual = reducer(undefined, {});
      expect(actual).toMatchObject({
        points: [0, 0],
      });
    });

    it('should increase a point if INCREASE_TEAM_POINT', () => {
      const action = {
        type: INCREASE_TEAM_POINT,
        team: 0,
      };
      const actual = reducer(undefined, action);
      expect(actual.points[0]).toEqual(1);
    });

    it('should rest points if RESET_POINTS', () => {
      const currentState = {
        currentPhrase: 'currentPhrase',
        points: [1, 0],
      };
      const action = {
        type: RESET_POINTS,
      };
      const actual = reducer(currentState, action);
      expect(actual.points[0]).toEqual(0);
    });
  });
});
