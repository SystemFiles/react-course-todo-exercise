import React from 'react';
import renderer from 'react-test-renderer';

import NewTodoForm from '../src/component/NewTodoForm.js';

describe('<NewTodoForm />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<NewTodoForm />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });