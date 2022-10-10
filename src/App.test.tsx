import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

import { App, WrappedApp } from './App';

describe('App', () => {
  it('Renders the App Component', () => {
    // Arrange
    render(<WrappedApp />);
    // Act
    // Expect
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello World!'
    );
  });

  it('Renders 404 not found for invalid url', () => {
    render(
      <MemoryRouter initialEntries={['/not-found-route']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '404 Not Found!'
    );
  });
});
