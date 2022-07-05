import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes';
import Menu from './components/Menu';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;