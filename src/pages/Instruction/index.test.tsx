import * as React from 'react';
import { shallow } from 'enzyme';
import Screen from './index';
// import store from 'src/redux/store';
// import { Provider } from 'react-redux';

describe('src/pages/Instruction', () => {
  let props: any;
  beforeEach(() => {
    props = {
      navigation: { navigate: jest.fn() },
    };
  });

  describe('Screen', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Screen {...props} />);
      expect(wrapper).toBeTruthy();
    });
  });
});
