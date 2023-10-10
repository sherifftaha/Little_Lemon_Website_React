import { render, screen } from '@testing-library/react';
import BookingForm from '../Sections/BookingForm';

test('renders learn react link', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
