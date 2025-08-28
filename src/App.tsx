import './App.css';
import AppRouter from '@/routes/AppRouter';
import NotificationContainer from './components/NotificationContainer';
import { Toaster } from '@/components/ui/toaster';
import ThemeProvider from './components/ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRouter />
        <NotificationContainer />
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
