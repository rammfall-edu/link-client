import { GET_LINKS, CREATE_LINKS } from './types';

export const getLinks = ({ links }) => ({
  type: GET_LINKS,
  links,
});

export const createLink = ({ link }) => ({
  type: CREATE_LINKS,
  link,
});
