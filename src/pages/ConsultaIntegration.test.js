import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Consulta from './Consulta';

// Mock fetch to ensure it fails and uses fallback data
global.fetch = jest.fn(() => Promise.resolve({
  ok: false
}));

test('renders tax composition fields when searching', async () => {
  render(<Consulta />);

  // Wait for initial data load to handle the state update from the useEffect catch block
  await act(async () => {
    await new Promise(r => setTimeout(r, 500));
  });

  // Find input and button
  const input = screen.getByPlaceholderText(/Digite apenas números/i);
  const button = screen.getByText(/Consultar Dados/i);

  // Type cadastro
  userEvent.type(input, '01.02.034.0567.001');

  // Click search
  userEvent.click(button);

  // Wait for results
  await waitFor(() => {
    expect(screen.getByText('Dados do Imóvel')).toBeInTheDocument();
  }, { timeout: 3000 });

  // Check for new fields headers
  const compositions = screen.getAllByText('Composição do Imposto');
  expect(compositions.length).toBe(2); // One for 2025, one for 2026

  // Check for specific rows in 2025 (first card)
  expect(screen.getAllByText('Imposto Territorial').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Imposto Predial').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Isenção').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Taxa de Limpeza').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Taxa de Conservação').length).toBeGreaterThan(0);
  expect(screen.getAllByText('CIP').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Taxa de Expediente').length).toBeGreaterThan(0);

  // Check values (formatted currency)
  expect(screen.getByText('R$ 420,00')).toBeInTheDocument();
  expect(screen.getByText('R$ 460,00')).toBeInTheDocument();
});
