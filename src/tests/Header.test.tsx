import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Header from '../components/Header';

describe('Header', () => {
  test('Header should be visible', () => {
    const wrapper = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(wrapper).toBeTruthy();

    const h1 = wrapper.container.querySelector('h1');
    expect(h1?.textContent).toBe('Search for any movie');
  });
});
