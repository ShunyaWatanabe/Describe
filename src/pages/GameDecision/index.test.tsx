import * as React from 'react';
import { shallow } from 'enzyme';
import { useFocusEffect } from '@react-navigation/native';
import { Screen, mapStateToProps } from './index';

jest.mock('@react-navigation/native');

describe('src/pages/GameDesign', () => {
  let props: any;
  let mockUseFocusEffect: any;
  beforeEach(() => {
    props = {
      navigation: { navigate: jest.fn() },
      increaseTeamPoint: jest.fn(),
      points: [0, 0],
    };
    mockUseFocusEffect = useFocusEffect;
  });

  describe('Screen', () => {
    it('should render properly', () => {
      mockUseFocusEffect.mockImplementation((func: any) => func());
      const wrapper = shallow(<Screen {...props} />);
      expect(wrapper).toBeTruthy();
    });

    it.each([0, 1])('should have 2 team buttons', team => {
      const wrapper = shallow(<Screen {...props} />);
      wrapper
        .find('Button')
        .at(team)
        .simulate('press');
      expect(props.increaseTeamPoint).toHaveBeenCalledWith(team);
    });

    // for ternary operator
    it.each([0, 1])('should have buttons that calls naviagte', team => {
      props.points = [7, 7];
      const wrapper = shallow(<Screen {...props} />);
      wrapper
        .find('Button')
        .at(team)
        .simulate('press');
      expect(props.increaseTeamPoint).toHaveBeenCalledWith(team);
    });
  });

  describe('mapStateToProps', () => {
    it('should return a proper object', () => {
      const state = {
        points: [0, 0],
        currentPhrase: 'currentPhrase',
      };
      const mapped = mapStateToProps(state);
      expect(mapped).toMatchObject(state);
    });
  });
});
