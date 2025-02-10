import { render, screen } from '@testing-library/react';
import Navbar from '../../frontend/src/components/Navbar';

test('renders navbar', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});