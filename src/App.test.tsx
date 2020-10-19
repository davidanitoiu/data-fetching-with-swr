import { waitFor } from '@testing-library/dom';
import { act, render } from '@testing-library/react';
import React from 'react';
import App from './App';

jest.mock('./utils/utils');

describe('App', () => {
  it('renders table correctly', async () => {
    const { getByRole } = render(<App />);

    await act(
      async () => await waitFor(
        () => expect(getByRole('table')).toBeInTheDocument()
      ));
  });
})