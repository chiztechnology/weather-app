import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import CityItem from '../components/CityItem';
import store from '../redux/configureStore';

const mockData = {
  id: 1, name: 'london', country: 'United Kingdom', localtime: '12:09 PM', humidity: '80%', temp_c: '23',
};

describe('City item Page Component', () => {
  test('renders the component properly', () => {
    const tree = render(
      <Provider store={store}>
        <CityItem key={mockData.id} data={mockData} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
