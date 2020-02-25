import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('src/components/Button', () => {
  let props: any;
  beforeEach(() => {
    props = {
      onPress: jest.fn(),
      text: 'text',
    };
  });

  describe('Button', () => {
    it('should render default button', () => {
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper).toBeTruthy();
    });

    it('should render fill button', () => {
      props.uiType = 'fill';
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper).toBeTruthy();
    });

    it('should render outline button', () => {
      props.uiType = 'outline';
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper).toBeTruthy();
    });

    it('should render outline button if wrong uiType', () => {
      props.uiType = 'test';
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper).toBeTruthy();
    });
  });
});
