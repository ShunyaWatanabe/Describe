import * as React from 'react';
import { shallow } from 'enzyme';
import { useFocusEffect } from '@react-navigation/native';
import { Screen, mapStateToProps } from './index';

jest.mock('@react-navigation/native');

describe('src/pages/GameMain', () => {
  let props: any;
  let mockUseFocusEffect: any;
  beforeEach(() => {
    props = {
      navigation: { navigate: jest.fn() },
      currentPhrase: 'currentPhrase',
      changeCurrentPhrase: jest.fn(),
    };
    mockUseFocusEffect = useFocusEffect;
  });

  describe('Screen', () => {
    it('should render properly', () => {
      mockUseFocusEffect.mockImplementation((func: any) => func());
      const wrapper = shallow(<Screen {...props} />);
      expect(wrapper).toBeTruthy();
    });

    it('should have a card that calls changeCurrentPhrase', () => {
      const wrapper = shallow(<Screen {...props} />);
      wrapper
        .find('Card')
        .at(0)
        .simulate('press');
      expect(props.changeCurrentPhrase).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should return a proper object', () => {
      const state = { currentPhrase: 'currentPhrase' };
      const mapped = mapStateToProps(state);
      expect(mapped).toMatchObject(state);
    });
  });
});
