import {QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000, // 5 mins
      gcTime: 600000, // 10 mins
    },
  },
});

export default queryClient;
