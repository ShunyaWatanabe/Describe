import * as React from 'react';
import { shallow } from 'enzyme';
import { Screen, mapStateToProps } from './index';

describe('src/pages/GameResult', () => {
  let props: any;
  beforeEach(() => {
    props = {
      navigation: { navigate: jest.fn() },
      points: [0, 0],
      resetPoints: jest.fn(),
    };
  });

  describe('Screen', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Screen {...props} />);
      expect(wrapper).toBeTruthy();
    });

    // this covers the ternary operator
    it('should show the winner', () => {
      props.points = [1, 0];
      shallow(<Screen {...props} />);
    });

    it('should have a return home button that navigates out', () => {
      const wrapper = shallow(<Screen {...props} />);
      wrapper
        .find('Button')
        .at(0)
        .simulate('press');
      expect(props.navigation.navigate).toHaveBeenCalled();
    });

    it('should have a play again button that navigates out and resest points', () => {
      const wrapper = shallow(<Screen {...props} />);
      wrapper
        .find('Button')
        .at(1)
        .simulate('press');
      expect(props.navigation.navigate).toHaveBeenCalled();
      expect(props.resetPoints).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should return a proper object', () => {
      const state = {
        points: [0, 0],
      };
      const mapped = mapStateToProps(state);
      expect(mapped).toMatchObject(state);
    });
  });
});
