import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Tag from '.';

describe('Tag', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Tag />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
