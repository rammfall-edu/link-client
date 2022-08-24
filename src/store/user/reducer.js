import { LOGIN, LOGOUT } from './types';

const initialStore = {
  isLoggedIn: !!localStorage.token,
};

const user = (store = initialStore, { type }) => {
  if (type === LOGIN) {
    return {
      ...store,
      isLoggedIn: true,
    };
  }

  if (type === LOGOUT) {
    return {
      ...store,
      isLoggedIn: false,
    };
  }

  return store;
};

export default user;
