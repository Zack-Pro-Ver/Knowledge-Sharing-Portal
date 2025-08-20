# React Query Hook Usage Guide

This guide shows how to use the optimized `useApi` hook for TanStack React Query.

## 📋 Basic Usage Examples

### 1. Fetching Data (GET Request)

```tsx
import { useApi } from '../hooks/useApi';

// Simple GET request
function UsersList() {
  const { data: users, isLoading, error } = useApi.get<User[]>(
    ['users'],           // Query key for caching
    '/api/users'         // API endpoint
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {users?.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

### 2. Creating Data (POST Request)

```tsx
import { useApi } from '../hooks/useApi';

function CreateUserForm() {
  const createUser = useApi.post<User>('/api/users', [['users']]);

  const handleSubmit = async (userData: { name: string; email: string }) => {
    await createUser.mutateAsync(userData);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      handleSubmit({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
      });
    }}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <button type="submit" disabled={createUser.isPending}>
        {createUser.isPending ? 'Creating...' : 'Create User'}
      </button>
    </form>
  );
}
```

### 3. Updating Data (PUT Request)

```tsx
import { useApi } from '../hooks/useApi';

function EditUserForm({ user }: { user: { id: string; name: string; email: string } }) {
  const updateUser = useApi.put<User>(
    `/api/users/${user.id}`,
    [['users'], ['user', user.id]]
  );

  const handleUpdate = async (updates: { name: string; email: string }) => {
    await updateUser.mutateAsync({ id: user.id, ...updates });
  };

  return (
    <div>
      <input 
        defaultValue={user.name} 
        onBlur={(e) => handleUpdate({ name: e.target.value, email: user.email })}
      />
      <button onClick={() => handleUpdate({ name: user.name, email: 'new@email.com' })}>
        Update User
      </button>
    </div>
  );
}
```

### 4. Deleting Data (DELETE Request)

```tsx
import { useApi } from '../hooks/useApi';

function DeleteUserButton({ userId }: { userId: string }) {
  const deleteUser = useApi.delete(
    `/api/users/${userId}`,
    [['users']]
  );

  const handleDelete = async () => {
    if (window.confirm('Delete this user?')) {
      await deleteUser.mutateAsync();
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={deleteUser.isPending}
    >
      {deleteUser.isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
}
```

## 🎯 Quick Reference

### Available Methods:
- `useApi.get<T>(key, endpoint, options?)` - GET request
- `useApi.post<T>(endpoint, invalidateKeys?)` - POST request
- `useApi.put<T>(endpoint, invalidateKeys?)` - PUT request
- `useApi.delete(endpoint, invalidateKeys?)` - DELETE request

### Common Patterns:
- **Loading states**: Check `isLoading` or `isPending`
- **Error handling**: Check `error` property
- **Caching**: Use unique query keys
- **Invalidation**: Pass invalidateKeys array to refresh related data

## 📚 Complete Usage Component

```tsx
import React from 'react';
import { useApi } from '../hooks/useApi';

export function CompleteExample() {
  // Fetch users
  const { data: users, isLoading, error } = useApi.get<User[]>(['users'], '/api/users');
  
  // Create user mutation
  const createUser = useApi.post<User>('/api/users', [['users']]);

  return (
    <div>
      <h2>Users</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {users?.map(user => <div key={user.id}>{user.name}</div>)}
      
      <button onClick={() => createUser.mutate({ name: 'New User', email: 'new@example.com' })}>
        Add User
      </button>
    </div>
  );
}
```

## 🔧 Type Definitions

```tsx
interface User {
  id: string;
  name: string;
  email: string;
  active?: boolean;
}
