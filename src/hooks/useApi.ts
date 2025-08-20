import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Optimized API hook with minimal boilerplate
export const useApi = {
  // GET hook
  get: <T>(key: string[], endpoint: string) => 
    useQuery<T>({
      queryKey: key,
      queryFn: () => fetch(endpoint).then(r => r.json()),
      staleTime: 5 * 60 * 1000, // 5 minutes
    }),

  // POST hook
  post: <T>(endpoint: string, invalidateKeys?: string[][]) => {
    const queryClient = useQueryClient();
    return useMutation<T, Error, any>({
      mutationFn: (data) => 
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }).then(r => r.json()),
      onSuccess: () => invalidateKeys?.forEach(key => 
        queryClient.invalidateQueries({ queryKey: key })
      ),
    });
  },

  // PUT hook
  put: <T>(endpoint: string, invalidateKeys?: string[][]) => {
    const queryClient = useQueryClient();
    return useMutation<T, Error, any>({
      mutationFn: (data) => 
        fetch(endpoint, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }).then(r => r.json()),
      onSuccess: () => invalidateKeys?.forEach(key => 
        queryClient.invalidateQueries({ queryKey: key })
      ),
    });
  },

  // DELETE hook
  delete: (endpoint: string, invalidateKeys?: string[][]) => {
    const queryClient = useQueryClient();
    return useMutation<void, Error>({
      mutationFn: () => fetch(endpoint, { method: 'DELETE' }).then(r => r.json()),
      onSuccess: () => invalidateKeys?.forEach(key => 
        queryClient.invalidateQueries({ queryKey: key })
      ),
    });
  },
};
