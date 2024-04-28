import {QueryClientProvider} from '@tanstack/react-query';
import {AppNavigation} from './components/Layout';
import queryClient from './components/Provider/QueryProvider';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
};

export default App;
