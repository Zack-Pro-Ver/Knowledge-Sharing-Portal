import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const api = axios.create({
    baseURL: '/api',
});

const mock = new MockAdapter(api, { delayResponse: 500 }); // Simulate a

// Mock a GET request to /users
mock.onGet('/users').reply(200, [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
]);

// Mock a POST request to /users
mock.onPost('/users').reply(201, (config: { data: string }) => {
  const newUser = JSON.parse(config.data);
  return newUser;
});

export default api;
