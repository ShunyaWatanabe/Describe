import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders AppLoading at the beginning', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains('AppLoading'));
  });
});
