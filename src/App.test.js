import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Consulta de Valores title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Consulta de Valores/i);
  expect(titleElement).toBeInTheDocument();
});
