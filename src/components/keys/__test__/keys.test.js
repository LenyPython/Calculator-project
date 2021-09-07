import {render, screen} from '@testing-library/react';
import Keys from '../Keys';

const value = '5'
const prevValue = '10+'

test('Check if all operation and number keys are present', () => {
  render(<Keys calcMemo={value, prevValue} />);

  for (let i = 0; i < 10; i++) {
    let button = screen.getByRole('button', {name: i})
    expect(button).toBeInTheDocument()
  }
  let button = screen.getByRole('button', {name: '+'})
  expect(button).toBeInTheDocument();
  button = screen.getByRole('button', {name: '-'})
  expect(button).toBeInTheDocument();
  button = screen.getByRole('button', {name: 'x'})
  expect(button).toBeInTheDocument();
  button = screen.getByRole('button', {name: '/'})
  expect(button).toBeInTheDocument();
  button = screen.getByRole('button', {name: '.'})
  expect(button).toBeInTheDocument();
  button = screen.getByRole('button', {name: '='})
  expect(button).toBeInTheDocument();
  button = screen.getByRole('button', {name: 'reset'})
  expect(button).toBeInTheDocument();
  button = screen.getByRole('button', {name: 'del'})
  expect(button).toBeInTheDocument();
}
);
