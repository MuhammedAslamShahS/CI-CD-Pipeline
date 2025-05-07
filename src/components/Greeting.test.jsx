import { render, screen } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import Greeting from './Greeting';

test('renders greeting with provided name', () => {
  render(<Greeting name="Test User" />);
  expect(screen.getByText('Hello, Test User!')).toBeInTheDocument();
});

test('renders greeting with default name if no name is provided', () => {
  render(<Greeting />);
  expect(screen.getByText('Hello, Guest!')).toBeInTheDocument();
});
