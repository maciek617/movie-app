import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('<App />', () => {
  test('Header should be visible', () => {
    const wrapper = render(<Header />);
    expect(wrapper).toBeTruthy();

    // There should be text "Search for any movie"
    const h1 = wrapper.container.querySelector('h1');
    expect(h1?.textContent).toBe('Search for any movie');
  });
});
