import './App.css';
import AppRouter from '@/routes/AppRouter';
import NotificationContainer from './components/NotificationContainer';

function App() {
  return (
    <>
      <AppRouter />
      <NotificationContainer />
    </>
  )
}

export default App
