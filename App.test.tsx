import React from 'react';
import { shallow } from 'enzyme';
import App, { fetchFonts, Navigation } from './App';

describe('./App.tsx', () => {
  describe('<App />', () => {
    it('renders AppLoading at the beginning', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.contains('AppLoading'));
    });
  });

  describe('fetchFonts', () => {
    it('should not throw an error', async () => {
      await fetchFonts();
    });
  });

  describe('Navigation', () => {
    it('should contain NavigationContainer', () => {
      const wrapper = shallow(<Navigation />);
      expect(wrapper.contains('NavigationContainer'));
    });
  });
});
