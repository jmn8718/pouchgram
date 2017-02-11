import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NotFoundPage from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotFoundPage />, div);
});

it('renders should contain message', () => {
  const wrapper = shallow(<NotFoundPage />);
  const message = <h1>404: Page Not Found</h1>;
  expect(wrapper.contains(message)).toEqual(true);
});

it('renders should not contain message', () => {
  const wrapper = shallow(<NotFoundPage />);
  const message = <h1>Welcome</h1>;
  expect(wrapper.contains(message)).toEqual(false);
});
