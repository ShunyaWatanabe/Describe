import * as React from 'react';
import { shallow } from 'enzyme';
import Screen from './index';
// import store from 'src/redux/store';
// import { Provider } from 'react-redux';

describe('src/pages/Home', () => {
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

    it('should have a start button that navigates out', () => {
      const wrapper = shallow(<Screen {...props} />);
      wrapper.find('Button').simulate('press');
      expect(props.navigation.navigate).toHaveBeenCalled();
    });

    it('should have a text that navigates to instruction', () => {
      const wrapper = shallow(<Screen {...props} />);
      wrapper
        .find('Text')
        .at(1)
        .simulate('press');
      expect(props.navigation.navigate).toHaveBeenCalled();
    });
  });
});
