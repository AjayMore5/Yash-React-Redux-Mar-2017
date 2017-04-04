import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

//http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/