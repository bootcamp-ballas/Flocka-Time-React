import React from 'react';
import App from './App';
import { render, cleanup } from '@testing-library/react';

it('renders without crashing', () => {
  const { asFragment  } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
