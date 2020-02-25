import * as React from 'react';
import { shallow } from 'enzyme';
import { Screen, mapStateToProps } from './index';
// import store from 'src/redux/store';
// import { Provider } from 'react-redux';

describe('src/pages/GameScore', () => {
  let props: any;
  beforeEach(() => {
    props = {
      navigation: { navigate: jest.fn() },
      points: [0, 0],
    };
  });

  describe('Screen', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Screen {...props} />);
      expect(wrapper).toBeTruthy();
    });

    it('should have a next round button that navigates out', () => {
      const wrapper = shallow(<Screen {...props} />);
      wrapper.find('Button').simulate('press');
      expect(props.navigation.navigate).toHaveBeenCalled();
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
