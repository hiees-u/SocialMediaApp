import './App.css';
import AppRouter from '@/routes/AppRouter';
import NotificationContainer from './components/NotificationContainer';
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <>
      <AppRouter />
      <NotificationContainer />
      <Toaster />
    </>
  )
}

export default App
