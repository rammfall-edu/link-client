const hostname = process.env.API_URL || 'http://localhost:3000';

const request = async (url, method = 'GET', body = null) => {
  const headers = localStorage.token ? { token: localStorage.token } : {};
  const data = await fetch(`${hostname}${url}`, {
    method,
    body,
    headers,
  });
  if (!data.ok && data.status === 400) {
    const result = await data.json();
    const error = new Error(result.info);
    error.field = result.field;

    throw error;
  }

  return await data.json();
};

export const registerUser = async (body) =>
  await request('/register', 'POST', body);

export const loginUser = async (body) => await request('/login', 'POST', body);

export const createLink = async (body) => await request('/links', 'POST', body);

export const getLinks = async () => await request('/links');

export const getLink = async (hash) => await request(`/hash/${hash}`);
