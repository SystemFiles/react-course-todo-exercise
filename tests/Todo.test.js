import React from 'react';
import renderer from 'react-test-renderer';

import Todo from '../src/component/Todo.js';

describe('<Todo />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<Todo />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });