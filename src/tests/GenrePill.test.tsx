import { render } from '@testing-library/react';
import GenrePill from '../components/GenrePill';

describe('Button', () => {
  it('should render the correct text', () => {
    const { getByText } = render(<GenrePill text='Action' />);
    const button = getByText('Action');
    expect(button).toBeInTheDocument();
  });
});
