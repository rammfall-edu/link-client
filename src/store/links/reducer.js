import { CREATE_LINKS, GET_LINKS } from './types';

const initialStore = [];

const links = (store = initialStore, { type, links, link }) => {
  if (type === GET_LINKS) {
    return [...links];
  }

  if (type === CREATE_LINKS) {
    return [...store, link];
  }

  return store;
};

export default links;
