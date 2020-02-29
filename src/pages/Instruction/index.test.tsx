import * as React from 'react';
import { shallow } from 'enzyme';
import Screen, { renderItem } from './index';
// import store from 'src/redux/store';
// import { Provider } from 'react-redux';

describe('src/pages/Instruction', () => {
  let props: any;
  beforeEach(() => {
    props = {
      navigation: { goBack: jest.fn() },
    };
  });

  describe('Screen', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Screen {...props} />);
      expect(wrapper).toBeTruthy();
    });

    it('should render a text with onPress', () => {
      const wrapper = shallow(<Screen {...props} />);
      wrapper.find('Text').simulate('press');
    });

    it.todo('should render a carousel with onSnap');
  });

  describe('renderItem', () => {
    it('should return an image component', () => {
      const ret = renderItem({ item: '' });
      expect(ret.type.displayName).toEqual('Image');
    });
  });
});
