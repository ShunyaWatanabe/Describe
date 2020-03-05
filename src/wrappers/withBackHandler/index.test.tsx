import * as React from 'react';
import { BackHandler } from 'react-native'; // it's needed to direct access mocked version
import withBackHandler from './index';

jest.mock('react-native', () => {
  return {
    BackHandler: {
      addEventListener: jest.fn(),
    },
  };
});

describe('/wrappers/withBackHandler', () => {
  it('should bind BackHandler', () => {
    withBackHandler(<></>);
    expect(BackHandler.addEventListener).toHaveBeenCalledWith(
      'hardwareBackPress',
      expect.any(Function),
    );
  });
});
