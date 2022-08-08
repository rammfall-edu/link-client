const hostname = 'http://localhost:3000';

const request = async (url, method = 'GET', body = null) => {
  const data = await fetch(`${hostname}${url}`, {
    method,
    body,
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
