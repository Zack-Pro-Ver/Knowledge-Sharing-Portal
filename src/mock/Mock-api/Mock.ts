import MockAdapter from 'axios-mock-adapter';
import api from '../../api/axiosInstance';

// Initialize mock adapter with Axios instance
const mock = new MockAdapter(api, { delayResponse: 500 });
// Mock GET /users
mock.onGet('/users').reply(200, [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
]);

// Mock POST /users
mock.onPost('/users').reply(201, (config: { data: string }) => {
  const newUser = JSON.parse(config.data);
  return [201, newUser];
});

export default mock;
