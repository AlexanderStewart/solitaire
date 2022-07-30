import { render, screen } from '@testing-library/react';
import App from './pages/Game';


test('render the title of an application', () => {
  render(<App />);

  const titleEl = screen.getByText(/GROUP 6 - SOLITAIRE/);
  expect(titleEl).toBeInTheDocument();
});
