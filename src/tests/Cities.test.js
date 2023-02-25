import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Cities from '../components/Cities';
import store from '../redux/configureStore';

jest.mock('axios');

describe('Cities Page Component', () => {
  test('renders the component properly', () => {
    const tree = render(
      <Provider store={store}>
        <Cities />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
