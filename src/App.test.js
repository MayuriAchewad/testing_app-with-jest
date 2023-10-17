import { render, screen } from '@testing-library/react';
import App from './App';

test('header renders with react react testing app in the document', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/loginForm/i);
  expect(linkElement).toBeInTheDocument();
});
