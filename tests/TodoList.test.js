import React from 'react';
import renderer from 'react-test-renderer';

import TodoList from '../src/component/TodoList.js';

describe('<TodoList />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<TodoList />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });