import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('render app', () => {
  test('Header should be visible', () => {
    const wrapper = render(<Footer />);
    expect(wrapper).toBeTruthy();

    // There should be text "Search for any movie"
    const text = wrapper.getByText('Used API');
    expect(text).toBeTruthy();
  });
});
