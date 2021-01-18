import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import ToolBar from './app/components/ToolBar';
import Results from './app/components/Results';

test('renders ToolBar', () => {
  const { getByText } = render(
    <Provider store={store}>
      <ToolBar />
    </Provider>
  );

  expect(getByText(/Send/i)).toBeInTheDocument();
});

test('renders Results', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Results />
    </Provider>
  );
  expect(getByText(/Results/i)).toBeInTheDocument();
});
