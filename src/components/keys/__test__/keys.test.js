import {render, screen} from '@testing-library/react';
import App from '../../App';

describe('Testing presence of keys', () => {
  test('Check if all operation and number keys are present', () => {
    render(<App />);

    for (let i = 0; i < 10; i++) {
      let button = screen.getAllByText(`${i}`)
      expect(button.length > 0).toBe(true);
    }
    let button = screen.getByText('+')
    expect(button).toBeInTheDocument();
    button = screen.getByText('-')
    expect(button).toBeInTheDocument();
    button = screen.getByText('x')
    expect(button).toBeInTheDocument();
    button = screen.getByText('/')
    expect(button).toBeInTheDocument();
    button = screen.getByText('.')
    expect(button).toBeInTheDocument();
    button = screen.getByText('=')
    expect(button).toBeInTheDocument();
    button = screen.getByText('Reset')
    expect(button).toBeInTheDocument();
    button = screen.getByText('Del')
    expect(button).toBeInTheDocument();


  }

  )
}
);
