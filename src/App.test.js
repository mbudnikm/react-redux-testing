import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render without craching (with prop all=false)', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App all={false}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match snapshot', () => {
  const app = <App />
  expect(app).toMatchSnapshot()
});