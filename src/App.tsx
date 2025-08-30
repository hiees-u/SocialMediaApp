import './App.css';
import AppRouter from '@/routes/AppRouter';
import NotificationContainer from './components/NotificationContainer';
import { Toaster } from '@/components/ui/toaster';
import ThemeProvider from './components/ThemeProvider';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter>
        <ThemeProvider>
          <AppRouter />
          <NotificationContainer />
          <Toaster />
        </ThemeProvider>
      </HashRouter>
    </>
  );
}

export default App;
