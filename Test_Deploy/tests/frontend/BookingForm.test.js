import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../../frontend/src/components/BookingForm';

test('submits booking form', () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText(/date/i);
  fireEvent.change(dateInput, { target: { value: '2021-07-01' } });
  const submitButton = screen.getByText(/submit/i);
  fireEvent.click(submitButton);
  expect(screen.getByText(/booking submitted/i)).toBeInTheDocument();
});