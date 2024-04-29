import {QueryClientProvider} from '@tanstack/react-query';
import {AppNavigation} from './components/Layout';
import queryClient from './components/Provider/QueryProvider';
import 'react-native-gesture-handler';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
};

export default App;
