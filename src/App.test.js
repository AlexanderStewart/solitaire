import { render, screen, within } from '@testing-library/react';
import App from './App';


test('render the title of an application', () => {
  render(<App />);

  const titleEl = screen.getByText(/GROUP 6 - SOLITAIRE/);
  expect(titleEl).toBeInTheDocument();
});

test('render the title of an application', () => {
  // const columnA = result.container.querySelector('#colA');


  // const columnA = querySelector('#colA');
  // screen.debug(columnA);

  // const { debug } = render(<App />);
  // debug();

  render(<App />);
  const element = screen.getByTestId('colA');
  // console.log(element);

  screen.debug(element);
}); 