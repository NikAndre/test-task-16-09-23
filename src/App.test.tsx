import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const addBtn = screen.getByTestId('addBtn');
  const clearBtn = screen.getByTestId('clearBtn');
  const completedTab = screen.getByTestId('completedTab');
  const activeTab = screen.getByTestId('activeTab');
  const allTab = screen.getByTestId('allTab');
  const input = screen.getByTestId('todos_input');
  expect(screen.queryByText(/aaa/i)).toBeNull();
  fireEvent.input(input, {
    target: {value: 'aaa'}
  });
  fireEvent.click(addBtn);

  expect(screen.queryByText(/aaa/i)).toBeInTheDocument();
  expect(screen.getByRole(/checkbox/i)).toHaveClass('tasks_item__checkbox');
  fireEvent.click(screen.getByRole(/checkbox/i));
  expect(screen.getByRole(/checkbox/i)).toHaveClass('checked')
  fireEvent.click(activeTab);
  expect(screen.queryByText(/aaa/i)).toBeNull();
  fireEvent.click(allTab);
  expect(screen.queryByText(/aaa/i)).toBeInTheDocument();
  fireEvent.click(clearBtn);
  expect(screen.queryByText(/aaa/i)).toBeNull();
});



