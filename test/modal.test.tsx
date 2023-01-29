import React from 'react';
import * as ReactDOM from 'react-dom';
import Modal from '../src/components/modal/index'

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Modal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
