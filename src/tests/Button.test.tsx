import { render } from '@testing-library/react';
import Button from '../components/Button';

describe('Button', () => {
  it('should render the correct text', () => {
    const { getByText } = render(<Button text='Click me' fullWidth />);
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  it('should have full width class when prop is true', () => {
    const { getByText } = render(<Button text='Click me' fullWidth />);
    const button = getByText('Click me');
    expect(button).toHaveClass('w-full');
  });
});
