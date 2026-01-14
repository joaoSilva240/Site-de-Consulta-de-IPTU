import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Consulta de IPTU title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Consulta de IPTU/i);
  expect(titleElement).toBeInTheDocument();
});
