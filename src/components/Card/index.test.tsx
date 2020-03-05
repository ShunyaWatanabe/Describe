import * as React from 'react'; // this import is different from other import
import { shallow } from 'enzyme';
import Card from './index';

describe('src/components/Card', () => {
  let props: any;
  beforeEach(() => {
    props = {
      onPress: jest.fn(),
      text: 'text',
    };
  });

  describe('Card', () => {
    it('should render default Card', () => {
      const wrapper = shallow(<Card {...props} />);
      expect(wrapper).toBeTruthy();
    });
  });
});
