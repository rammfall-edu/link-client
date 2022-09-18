import React from 'react';
import { fireEvent, render, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as redux from 'react-redux';

import Login from './Login';
import store from '../store';

const { Provider } = redux;

jest.mock('../api', () => ({
  loginUser: async () => ({ token: 'test' }),
}));

describe('Login', () => {
  describe('when email incorrect', function () {
    it('should show validation error', async () => {
      const { findByLabelText, findByText } = render(
        <BrowserRouter>
          <Provider store={store}>
            <Login />
          </Provider>
        </BrowserRouter>
      );
      const input = await findByLabelText('Email');

      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: '1234' } });
      fireEvent.blur(input);
      const message = await findByText('Email must be a valid email');

      expect(message).toBeTruthy();
    });
  });

  describe('when all data is correct', () => {
    it('should dispatch action', async () => {
      const dispatchMock = jest.fn();
      jest.spyOn(store, 'dispatch').mockReturnValue(dispatchMock);
      const { findByLabelText, findAllByText } = render(
        <BrowserRouter>
          <Provider store={store}>
            <Login />
          </Provider>
        </BrowserRouter>
      );
      const emailInput = await findByLabelText('Email');
      const passwordInput = await findByLabelText('Password');
      const [, button] = await findAllByText('Login');

      await act(() => {
        fireEvent.focus(emailInput);
        fireEvent.change(emailInput, { target: { value: 'test@test.test' } });
        fireEvent.blur(emailInput);

        fireEvent.focus(passwordInput);
        fireEvent.change(passwordInput, { target: { value: '1234qwerty' } });
        fireEvent.blur(passwordInput);

        fireEvent.click(button);
      });

      expect(dispatchMock).toHaveBeenCalledWith({ type: 'User/LOGIN' });
    });
  });
});
