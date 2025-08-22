// this is a reference file and should be removed in the future

import { useQuery } from '@tanstack/react-query';
import api from '../mock/api/axiosInstance';

export interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
  avatar?: string;
  createdAt?: string;
}

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await api.get<User[]>('/users');
      return response.data;
    },
    staleTime: 2 * 60 * 1000, // 5 minutes
    gcTime: 3 * 60 * 1000, // 10 minutes
  });
};

