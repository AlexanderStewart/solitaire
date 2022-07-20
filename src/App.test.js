import { render, screen } from '@testing-library/react';
import App from './App';


test('render the title of an application', () => {
  render(<App />);

  const titleEl = screen.getByText(/GROUP 6 - SOLITAIRE/);
  expect(titleEl).toBeInTheDocument();
});
